import {
  convertCamelCase,
  upperFirst,
  getConfigInfo,
} from './util'

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
  const signatures = new Set<string>()
  function getSignature(signature: string, ...builders: ((sign: string, idx: number) => string)[]): string {
    let i = 0
    while (signatures.has(signature) && i < 100) {
      if (builders.length > i) {
        signature = builders[i](signature, i)
      }
      else {
        signature = `${signature}_${i + 1}`
      }
      i++
    }
    signatures.add(signature)
    return signature
  }
  function getSignatures(signatures: string[], ...builders: ((sign: string, idx: number) => string)[]): string[] {
    return signatures.map(signature => getSignature(signature, ...builders))
  }
  const config = getConfigInfo(packageJson)
  let {
    header = true,
    namespace = false,
    extensionSection = packageJson.name,
  } = options

  let lines: string[] = []

  lines.push('// Meta info')
  lines.push('', `import { defineConfigObject, defineConfigs, useCommand, useCommands } from 'reactive-vscode'`, '')
  const forwardKeys = getSignatures([
    'publisher',
    'name',
    'version',
    'displayName',
    'description',
  ])
  for (const key of forwardKeys) {
    lines.push(`export const ${key} = ${packageJson[key] ? JSON.stringify(packageJson[key]) : 'undefined'}`)
  }

  lines.push(

    `export const ${getSignature('extensionId')} = "${packageJson.publisher}.${packageJson.name}"`,
  )

  const extensionSectionWithDot = `${extensionSection}.`
  const extensionId = `${packageJson.publisher}.${packageJson.name}`
  // const _publisher = packageJson.publisher
  const name = packageJson.name as string

  function withoutExtensionPrefix(name: string): string {
    if (name.startsWith(extensionSectionWithDot)) {
      return name.slice(extensionSectionWithDot.length)
    }
    return name
  }

  // ========== Commands ==========
  const cmdFuncBaseName = getSignature(`useCommandBase`)
  const cmdFunctionNames = ((packageJson.contributes?.commands || []) as CommandType[]).map((c) => {
    return {
      funcName: getSignature(`useCommand${upperFirst(convertCamelCase(withoutExtensionPrefix(c.command)))}`, (_s, _i) => `useCommand${upperFirst(convertCamelCase(c.command))}`),
      ...c,
    }
  })

  // function handleRepetitive() {
  //   const funcNameCache = new Map<string, CommandType & { funcName: string }>()
  //   for (const c of cmdFunctionNames) {
  //     let i = 1
  //     while (funcNameCache.has(c.funcName) && i++ < 20) {
  //       const old = funcNameCache.get(c.funcName)
  //       if (old)
  //         old.funcName = `useCommand${upperFirst(convertCamelCase(old.command))}`
  //       c.funcName = `useCommand${upperFirst(convertCamelCase(c.command))}`
  //     }
  //     funcNameCache.set(c.funcName, c)
  //   }

  //   while (funcNameCache.has(cmdFuncBaseName)) {
  //     cmdFuncBaseName = `${cmdFuncBaseName}Base`
  //   }
  // }
  // handleRepetitive()

  lines.push(
    '',
    ...commentBlock('Type union of all commands'),
  )
  if (!cmdFunctionNames?.length) {
    lines.push('export type CommandKey = never')
  }
  else {
    lines.push(
      `export type ${getSignature('CommandKey')} = `,
      ...cmdFunctionNames.map(c =>
        `  | ${JSON.stringify(c.command)}`,
      ),
    )
  }
  // ========== Command Base ==========

  lines.push(`
export function ${cmdFuncBaseName}(commandFullKey: CommandKey, callback: (...args: any[]) => any): void {
  return useCommand(commandFullKey, callback)
}

export function ${cmdFuncBaseName.slice(0, 10)}s${cmdFuncBaseName.slice(10)}(commands: Partial<Record<CommandKey, (...args: any[]) => any>>): void {
  return useCommands(commands)
}
`)

  lines.push(
    ...cmdFunctionNames
      .flatMap((c) => {
        return [
          ``,
          ...commentBlock(`${c.title}
@value \`${c.command}\` identifier of the command `, 0),
          `export function ${c.funcName}(callback: (...args: any[]) => any) {`,
          `  return ${cmdFuncBaseName}(${JSON.stringify(c.command)}, callback)`,
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
      `export type ${getSignature('DeprecatedConfigKey')} = `,
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

    let sectionVar
    let sectionComment
    if (section) {
      sectionVar = getSignature(`${convertCamelCase(withoutExtensionPrefix(section))}`)
      sectionComment = `${section}`
    }
    else {
      sectionVar = getSignature('root')
      sectionComment = `virtual(Keys in the root)`
    }

    const interfaceName = getSignature(`${upperFirst(sectionVar)}`)
    const varName = {
      useConfig: getSignature(`config${interfaceName}`),
      useConfigObject: getSignature(`configObject${interfaceName}`),
    }
    const example = sectionConfig[0]
    const exampleKey = removeSection(example[0])
    // section 默认值
    sectionDefault.push(
      '',
      ...commentBlock(`Section defaults of \`${sectionComment}\``, 2),
      `  ${JSON.stringify(section)}: {`,
    )

    // section 导出对象
    sectionExports.push(
      ...commentBlock([
        `ConfigObject of \`${sectionComment}\``,
        `@example`,
        `const oldVal = ${varName.useConfigObject}.${exampleKey} //get value `,
        // `${varName.useConfigObject}.${exampleKey} = oldVal // set value`,
        `${varName.useConfigObject}.$update("${exampleKey}", oldVal) //update value`,
      ].join('\n'),
      ),
      `export const ${varName.useConfigObject} = useConfigObject("${section}")`,
      ...commentBlock([
        `ToConfigRefs of \`${sectionComment}\``,
        `@example`,
        `const oldVal:${example[1].type} =${varName.useConfig}.${exampleKey}.value //get value `,
        // `${varName.useConfig}.${exampleKey}.value = oldVal // set value`,
        // `//update value to ConfigurationTarget.Workspace/ConfigurationTarget.Global/ConfigurationTarget.WorkspaceFolder`,
        `${varName.useConfig}.${exampleKey}.update(oldVal) //update value`,
      ].join('\n')),
      `export const ${varName.useConfig} = useConfig("${section}")`,
    )
    // section 类型生成开始
    lines.push(``, ...commentBlock(`Section Type of \`${sectionComment}\``), `export interface ${interfaceName} {`,
    )
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
      // `  } satisfies ${interfaceName},`,
      `  } satisfies ${interfaceName} as ${interfaceName},`,
      '',
    )
  })

  const configVar = getSignature(`${convertCamelCase(name)}Config`)
  const sectionNames = [...config.sectionActivedConfigs.keys()]
  lines.push(
    '',
    `const ${configVar} = {`,
    ...sectionDefault,
    `}`,
    // `export type ConfigKey = keyof typeof ${configVar}`,
    `export type ${getSignature('ConfigKey')} = ${sectionNames.map(v => `"${v}"`).join(' | ')}`,
    `
export function ${getSignature('useConfig')}<K extends ConfigKey>(section: K) {
  return defineConfigs<typeof ${configVar}[K]>(section, ${configVar}[section])
}

export function ${getSignature('useConfigObject')}<K extends ConfigKey>(section: K) {
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
  if (!schema.type && schema.anyOf) {
    return `${schema.anyOf.map(v => typeFromSchema(v, true, subIndent + 2)).join(' | ')}`
  }
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
            if (key === 'vscodeTask') {
              console.log(value)
            }
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
