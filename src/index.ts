import { assign, isArray, memo, camel } from 'radash'

const forwardKeys = [
  'publisher',
  'name',
  'version',
  'displayName',
  'description',
]

export interface GenerateOptions {
  /**
   * The header of the generated file
   */
  header?: string | boolean
  /**
   * Use namespace for generated types
   * @default false
   */
  namespace?: string | boolean
  /**
   * The package section for commands and configs.
   *
   * Default to the package name.
   *
   * Useful when your extension name has different prefix from the package name.
   */
  extensionSection?: string
}

export interface ConfigurationProperty {
  type: string | string[]
  default?: any
  description?: string
  enum?: any[]
  enumDescriptions?: string[]
  markdownEnumDescriptions?: string[]
  markdownDescription?: string
  markdownDeprecationMessage?: string
  deprecationMessage?: string
  typeDescription?: string
  typeLabel?: string
  typeHint?: string
  typeHintLabel?: string
  properties?: Record<string, ConfigurationProperty>
  items?: ConfigurationProperty
  item?: ConfigurationProperty
  section?: string
  additionalProperties?: boolean
  defaultSnippets?: any[]
  allOf?: ConfigurationProperty[]
  anyOf?: ConfigurationProperty[]
  oneOf?: ConfigurationProperty[]
  allErrors?: boolean
  allowComments?: boolean
  allowTrailingCommas?: boolean
  patternProperties?: Record<string, ConfigurationProperty>
  pattern?: string
}

function isProperty(propterty: any): propterty is ConfigurationProperty {
  const typeName = typeof propterty?.type
  const ret = (typeName === 'string' || typeName === 'object')
  return ret
}

const convertCamelCase = memo((input: string) => {
  if (input.match(/^[a-z0-9$]*$/i) && !input.match(/^\d/)) // Valid JS identifier, keep as-is
    return input
  return camel(input)
})

const upperFirst = memo(<S extends string>(str: S): Capitalize<S> => {
  return (str ? str[0].toUpperCase() + str.slice(1) : '') as Capitalize<S>
})

const getConfigObject = memo((packageJson: any): Record<string, ConfigurationProperty> => {
  const conf = packageJson.contributes?.configuration
  return (isArray(conf)
    ? conf.reduce((acc, cur) => assign(acc, cur), {}).properties
    : packageJson.contributes?.configuration?.properties
  ) || {}
})

const getConfigInfo = memo(
  (packageJson: any) => {
    const deprecatedConfigs = new Map<string, ConfigurationProperty>()
    const deprecatedKeys = new Array<string>()
    const activedConfigs = new Map<string, ConfigurationProperty>()
    const activedKeys = new Array<string>()
    function addOrUpdate(target: Map<string, [string, ConfigurationProperty][]>, section: string, value: [string, ConfigurationProperty]): Map<string, [string, ConfigurationProperty][]> {
      const properties = target.get(section)
      if (properties) {
        properties.push(value)
      }
      else {
        target.set(section, [value])
      }
      return target
    }
    const sectionActivedConfigs = Object.entries(getConfigObject(packageJson)).reduce((acc, [fullKey, value]) => {
      if (isProperty(value)) {
        activedConfigs.set(fullKey, value)
        activedKeys.push(fullKey)
        const parts = fullKey.split('.')
        if (parts.length > 1) {
          const sectionParts = parts.slice(0, -1)
          for (let i = 0; i < sectionParts.length; i++) {
            const section = (sectionParts.slice(0, i + 1).join('.'))
            addOrUpdate(acc, section, [fullKey, value])
          }
        }
        else {
          const section = ('')
          addOrUpdate(acc, section, [fullKey, value])
        }
      }
      else {
        deprecatedConfigs.set(fullKey, value)
        deprecatedKeys.push(fullKey)
      }
      return acc
    }, new Map<string, [string, ConfigurationProperty][]>())
    return {
      deprecatedConfigs,
      deprecatedKeys,
      activedConfigs,
      activedKeys,
      sectionActivedConfigs,
    }
  },
)

export function generateMarkdown(packageJson: any): { commandsTable: string, configsTable: string, configsJson: string } {
  const config = getConfigInfo(packageJson)
  const MAX_TABLE_COL_CHAR = 150

  let commandsTable = [
    ['Command', 'Title'],
  ]

  let configsTable = [
    ['Key', 'Description', 'Type', 'Default'],
  ]

  const configsJson: string[] = []
  if (packageJson.contributes?.commands.length) {
    commandsTable.push(
      ...packageJson.contributes.commands.map((c: any) => {
        return [
          `\`${c.command}\``,
          c.category
            ? `${c.category}: ${c.title}`
            : c.title,
        ]
      }),
    )
  }
  else {
    commandsTable = []
  }

  if (config.activedKeys.length) {
    configsTable.push(
      ...[...config.activedConfigs.entries()]
        .map(([key, value]) => {
          const defaultVal = defaultValFromSchema(value) || ''
          return [
            `\`${key}\``,
            value.description ?? value.markdownDescription ?? value.markdownEnumDescriptions?.join(',') ?? '',
            `\`${String(value.type)}\``,
            defaultVal.length < MAX_TABLE_COL_CHAR ? `\`${defaultVal}\`` : 'See package.json',
          ]
        }),
    )
    configsJson.push(
      String('```json'),
      `{`,
      ...[...config.activedConfigs.entries()]
        .flatMap(([key, value]) => {
          const defaultVal = defaultValFromSchema(value) || ''
          const _type = typeFromSchema(value)
          return [
            // commentBlock([
            `  //${value.description ?? value.markdownDescription ?? value.markdownEnumDescriptions?.join(',') ?? ''}`,
            // ].join('\n'), 2).join("\n"),
            `  "${key}": ${defaultVal.length < MAX_TABLE_COL_CHAR ? `${defaultVal}` : 'See package.json'},`,
            '',
          ]
        }),
      `}`,
      String('```'),
    )
  }
  else {
    configsTable = []
  }

  return {
    commandsTable: formatTable(commandsTable),
    configsTable: formatTable(configsTable),
    configsJson: configsJson.join('\n'),
  }
}

export function generateDTS(packageJson: any, options: GenerateOptions = {}): string {
  const config = getConfigInfo(packageJson)
  let {
    header = true,
    namespace = false,
    extensionSection = packageJson.name,
  } = options

  let lines: string[] = []

  lines.push('// Meta info')
  lines.push('', `import { defineConfigObject, defineConfigs, useCommand } from 'reactive-vscode'`, '')

  for (const key of forwardKeys) {
    lines.push(`export const ${key} = ${packageJson[key] ? JSON.stringify(packageJson[key]) : 'undefined'}`)
  }

  lines.push(
    // eslint-disable-next-line no-template-curly-in-string
    'export const extensionId = `${publisher}.${name}`',
  )

  const extensionSectionWithDot = `${extensionSection}.`
  const extensionId = `${packageJson.publisher}.${packageJson.name}`
  const _publisher = packageJson.publisher
  const _name = packageJson.name

  function withoutExtensionPrefix(name: string): string {
    if (name.startsWith(extensionSectionWithDot)) {
      return name.slice(extensionSectionWithDot.length)
    }
    return name
  }

  // ========== Commands ==========

  lines.push(
    '',
    ...commentBlock('Type union of all commands'),
  )
  if (!packageJson.contributes?.commands?.length) {
    lines.push('export type CommandKey = never')
  }
  else {
    lines.push(
      'export type CommandKey = ',
      ...(packageJson.contributes?.commands || []).map((c: any) =>
        `  | ${JSON.stringify(c.command)}`,
      ),
    )
  }

  lines.push(`
export function useCommandKey(commandFullKey: CommandKey, callback: (...args: any[]) => any): void {
  return useCommand(commandFullKey, callback)
}`,
  )
  lines.push(
    ...(packageJson.contributes?.commands || [])
      .flatMap((c: any) => {
        const name = withoutExtensionPrefix(c.command)
        return [
          ``,
          ...commentBlock(`${c.title}\n@value \`${c.command}\``, 0),
          `export function useCommand${upperFirst(convertCamelCase(name))}(callback: (...args: any[]) => any) {`,
          `  return useCommandKey(${JSON.stringify(c.command)}, callback)`,
          `}`,
        ]
      }),
    '',
  )
  // ========== Configs ==========

  if (config.deprecatedKeys.length) {
    lines.push(
      '',
      ...commentBlock('Type union of Deprecated all configs'),
    )
    lines.push(
      'export type DeprecatedConfigKey = ',
      ...config.deprecatedKeys.map(c =>
        `  | "${c}"`,
      ),
    )
  }

  const sectionDefault: string[] = []
  const sectionExports: string[] = []
  // 遍历所有section
  config.sectionActivedConfigs.forEach((sectionConfig, section) => {
    function removeSection(name: string): string {
      const sectionWithDot = `${section}.`
      if (name.startsWith(sectionWithDot)) {
        return name.slice(sectionWithDot.length)
      }
      return name
    }

    let sectionVar = 'root'
    let sectionComment
    if (section) {
      sectionVar = `${convertCamelCase(section)}`
      sectionComment = `${section}`
    }
    else {
      while (config.sectionActivedConfigs.has(sectionVar)) {
        sectionVar = `root${upperFirst(sectionVar)}`
      }
      sectionComment = `virtual(Keys in the root)`
    }
    const interfaceName = `${upperFirst(sectionVar)}`
    const varName = {
      useConfig: `config${interfaceName}`,
      useConfigObject: `configObject${interfaceName}`,
    }
    const example = sectionConfig[0]
    const exampleKey = removeSection(example[0])
    // section 默认值
    sectionDefault.push(
      '',
      // ...commentBlock(`Section defaults of \`${sectionComment}\``, 2),
      `  ${JSON.stringify(section)}: {`,
    )

    // section 导出对象
    sectionExports.push(
      ...commentBlock([
        `ConfigObject of \`${sectionComment}\``,
        `@example`,
        `const configValue = ${varName.useConfigObject}.${exampleKey} //get value `,
        `${varName.useConfigObject}.${exampleKey} = true // set value`,
        `${varName.useConfigObject}.$update("${exampleKey}", !configValue, ConfigurationTarget.Workspace, true)`,
      ].join('\n'),
      ),
      `export const ${varName.useConfigObject} = useConfigObject("${section}")`,
      ...commentBlock([
        `ToConfigRefs of \`${sectionComment}\``,
        `@example`,
        `const configValue:${example[1].type} =${varName.useConfig}.${exampleKey}.value //get value `,
        `${varName.useConfig}.${exampleKey}.value = ${defaultValFromSchema(example[1])} // set value`,
        `//update value to ConfigurationTarget.Workspace/ConfigurationTarget.Global/ConfigurationTarget.WorkspaceFolder`,
        `${varName.useConfig}.${exampleKey}.update(true, ConfigurationTarget.WorkspaceFolder, true)`,
      ].join('\n')),
      `export const ${varName.useConfig} = useConfig("${section}")`,
    )
    // section 类型生成开始
    lines.push(``, ...commentBlock(`Section Type of \`${sectionComment}\``), `export interface ${interfaceName} {`)
    // 遍历section 下所有 短key的默认值
    sectionConfig.forEach(([fullKey, value]) => {
      const defaultValue = defaultValFromSchema(value)
      // 生成当前section所有key类型
      lines.push(
        ...commentBlock([
          value.description ?? value.markdownDescription,
          // `@key \`${key}\``,
          // `@default ${defaultValue}`,
          // `@type \`${value.type}\``,
        ].join('\n'), 2),
        `  ${JSON.stringify(removeSection(fullKey))}${defaultValue === undefined ? '?' : ''}: ${typeFromSchema(value, false)},`,
      )
      // 当前section下所有key的默认值
      sectionDefault.push(
        ...commentBlock([
          value.description,
        ].join('\n'), 4),
        `    ${JSON.stringify(removeSection(fullKey))}: ${defaultValFromSchema(value)},`,
      )
    })
    // section 类型结束
    lines.push('}')

    // sectionTypeMap.push(` ${JSON.stringify(section)}: ${interfaceName}`)
    sectionDefault.push(
      `  } satisfies ${interfaceName},`,
      '',
    )
  })

  const configVar = `${convertCamelCase(_name)}Config`
  const sectionNames = [...config.sectionActivedConfigs.keys()]
  lines.push(
    `const ${configVar} = {`,
    ...sectionDefault,
    `}`,
    // `export type ConfigKey = keyof typeof ${configVar}`,
    `export type ConfigKey = ${sectionNames.map(v => `"${v}"`).join(' | ')}`,
    `
export function useConfig<K extends ConfigKey>(section: K) {
  return defineConfigs<typeof ${configVar}[K]>(section, ${configVar}[section])
}

export function useConfigObject<K extends ConfigKey>(section: K) {
  return defineConfigObject<typeof ${configVar}[K]>(section, ${configVar}[section])
}
    `,
    ...sectionExports,
  )

  // ========== Namespace ==========

  if (namespace) {
    if (namespace === true)
      namespace = 'ExtensionMeta'

    lines = lines.map(line => line ? `  ${line}` : line)
    lines.unshift(
      ...commentBlock(`Extension Meta for \`${extensionId}\``, 0),
      `export namespace ${namespace} {`,
    )
    lines.push(
      '}',
      '',
      `export default ${namespace}`,
    )
  }

  if (header) {
    if (typeof header === 'string') {
      lines.unshift(header)
    }
    else {
      lines.unshift(
        '/* eslint-disable */',
        '// This file is generated by `reactive-meta-gen`. Do not modify manually.',
        '// @see https://github.com/calmripple/reactive-meta-gen',
        '',
      )
    }
  }

  lines.push('') // EOL

  return lines.join('\n')
}

export function generate(packageJson: any, options: GenerateOptions = {}): {
  dts: string
  markdown: {
    commandsTable: string
    configsTable: string
    configsJson: string
  }
} {
  return {
    dts: generateDTS(packageJson, options),
    markdown: generateMarkdown(packageJson),
  }
}

function commentBlock(text?: string, padding = 0): string[] {
  const indent = ' '.repeat(padding)
  if (!text) {
    return []
  }

  // Avoid premature closure of the comment block due to the presence of "*/" in the text
  const _text = text.replace(/\*\//g, '*\\/')

  return [
    `${indent}/**`,
    ..._text.split(/\n/g).map(l => `${indent} * ${l}`),
    `${indent} */`,
  ]
}

function typeFromSchema(schema: ConfigurationProperty, isSubType = false, subIndent = 2): string {
  if (!schema)
    return 'unknown'
  const indent = ' '.repeat(subIndent)
  const schemaTypes = Array.isArray(schema.type) ? schema.type : [schema.type]
  const types: string[] = []

  for (const schemaType of schemaTypes) {
    switch (schemaType) {
      case 'boolean':
        types.push('boolean')
        break
      case 'string':
        if (schema.enum) {
          types.push(...schema.enum.map((v: string) => JSON.stringify(v)))
          break
        }
        types.push('string')
        break
      case 'number':
        types.push('number')
        break
      case 'array':
        if (schema.items) {
          types.push(`${typeFromSchema(schema.items, true, subIndent + 2)}[]`)
          break
        }
        else if (schema.item) {
          types.push(`${typeFromSchema(schema.item, true, subIndent + 2)}[]`)
          break
        }
        types.push('unknown[]')
        break
      case 'object':
        if (schema.properties) {
          const propertyKeyValues = Object.entries(schema.properties).flatMap(([key, value]) => {
            const defaultValue = defaultValFromSchema(value)
            return [
              ...commentBlock([
                value.description ?? value.markdownDescription ?? value.enumDescriptions?.join('\n'),
                // `@key \`${key}\``,
                `@default \`${defaultValue}\``,
                // `@type \`${value.type}\``,
              ].join('\n'), subIndent),
              `${indent}'${key}'${defaultValue !== undefined ? '' : '?'}: ${typeFromSchema(value, true, subIndent + 2)}`,
            ]
          })

          types.push(`{
  ${indent}${propertyKeyValues.join('\n  ')} 
${indent}}`)

          break
        }
        types.push('Record<string, unknown>')
        break
      default:
        types.push('unknown')
    }
  }

  if (!isSubType && schema.type !== 'object') {
    if (!('default' in schema) || schema.default === undefined)
      types.push('undefined')
    else if (schema.default === null)
      types.push('null')
  }

  if (types.length === 1)
    return types[0]
  else
    return `(${types.join(' | ')})`
}

export function defaultValFromSchema(schema: ConfigurationProperty): string | undefined {
  // if (schema.type !== 'object')
  //   return JSON.stringify(schema.default)

  if ('default' in schema)
    return JSON.stringify(schema.default)

  if (schema.type === 'array') {
    // if (schema.item) {
    //   return `${JSON.stringify(schema.item.type)}[]`
    // }
    // if (schema.items) {
    //   if (schema.items.properties) {
    //     if (schema.items.type === "object") {
    //       const keyValues = Object.entries(schema.items.properties).map(([key, value]): string => {
    //         return `${JSON.stringify(key)}: ${defaultValFromSchema(value)}`
    //       })
    //       return `{ ${keyValues.join(', ')} }[]`
    //     }

    //   } else if (schema.items.type) {
    //     return `${schema.items.type}[]`
    //   }
    // }
    return undefined
  }

  if (schema.type === 'object' && schema.properties) {
    const keyValues = Object.entries(schema.properties).map(([key, value]): string => {
      return `${JSON.stringify(key)}: ${defaultValFromSchema(value)}`
    })

    return `{ ${keyValues.join(', ')} }`
  }
  // console.log(schema)
  return undefined
}

export function formatTable(table: string[][]): string {
  if (!table.length)
    return '**No data**'

  const [header, ...body] = table
  const colChars = Array.from<number>({ length: header.length }).fill(0)

  table.forEach((row) => {
    row.forEach((col, idx) => {
      colChars[idx] = Math.max(colChars[idx], col.length)
    })
  })

  table.forEach((row, rowIdx) => {
    row.forEach((col, colIdx) => {
      table[rowIdx][colIdx] = col.padEnd(colChars[colIdx], ' ')
    })
  })

  return [
    `| ${header.join(' | ')} |`,
    `| ${colChars.map(w => '-'.repeat(w)).join(' | ')} |`,
    ...body.map(row => `| ${row.join(' | ')} |`),
  ].join('\n')
}
