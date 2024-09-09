import { assign, isArray, memo, camel } from 'radash'
import { compile } from 'json-schema-to-typescript'
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
   * The package scope for commands and configs.
   *
   * Default to the package name.
   *
   * Useful when your extension name has different prefix from the package name.
   */
  extensionScope?: string
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
  typeHintLabel?: string,
  properties?: Record<string, ConfigurationProperty>,
  items?: ConfigurationProperty,
  item?: ConfigurationProperty,
  scope?: string,
  additionalProperties?: boolean,
  defaultSnippets?: any[],
  allOf?: ConfigurationProperty[],
  anyOf?: ConfigurationProperty[],
  oneOf?: ConfigurationProperty[],
  allErrors?: boolean,
  allowComments?: boolean,
  allowTrailingCommas?: boolean,
  patternProperties?: Record<string, ConfigurationProperty>,
  pattern?: string,
}
export interface ConfigurationObject {
  title: string,
  type: string | string[]
  properties: Record<string, ConfigurationProperty>
}
function isProperty(propterty: any): propterty is ConfigurationProperty {
  const typeName = typeof propterty?.type
  const ret = (typeName === 'string' || typeName === 'object')
  return ret
}

const convertCamelCase = memo(function (input: string) {
  if (input.match(/^[a-z0-9$]*$/i) && !input.match(/^\d/)) // Valid JS identifier, keep as-is
    return input
  return camel(input)
})

const upperFirst = memo(function <S extends string>(str: S): Capitalize<S> {
  return (str ? str[0].toUpperCase() + str.slice(1) : "") as Capitalize<S>;
})

const getConfigObject = memo(function (packageJson: any): ConfigurationObject[] {
  const conf = packageJson.contributes?.configuration
  return (isArray(conf) ? [...conf] : [packageJson.contributes?.configuration as ConfigurationObject])
})

const getConfigInfo = memo(
  function (packageJson: any) {
    const deprecatedConfigs = new Map<string, ConfigurationProperty>()
    const deprecatedKeys = new Array<string>()
    const activedConfigs = new Map<string, ConfigurationProperty>()
    const activedKeys = new Array<string>()
    function addOrUpdate(target: Map<string, [string, ConfigurationProperty][]>, scope: string, value: [string, ConfigurationProperty]) {
      const properties = target.get(scope)
      if (properties) {
        properties.push(value)
      } else {
        target.set(scope, [value])
      }
      return target
    }
    const scopedActivedConfigs = Object.entries(getConfigObject(packageJson)).reduce((acc, [fullKey, value]) => {
      if (isProperty(value)) {
        activedConfigs.set(fullKey, value)
        activedKeys.push(fullKey)
        const parts = fullKey.split('.')
        if (parts.length > 1) {
          const scopeParts = parts.slice(0, -1)
          for (let i = 0; i < scopeParts.length; i++) {
            let scope = (scopeParts.slice(0, i + 1).join('.'))
            addOrUpdate(acc, scope, [fullKey, value])
          }
        }
        else {
          let scope = ('')
          addOrUpdate(acc, scope, [fullKey, value])
        }
      } else {
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
      scopedActivedConfigs,
    }
  })

export function generateMarkdown(packageJson: any) {
  const config = getConfigInfo(packageJson)
  const MAX_TABLE_COL_CHAR = 150

  let commandsTable = [
    ['Command', 'Title'],
  ]

  let configsTable = [
    ['Key', 'Description', 'Type', 'Default'],
  ]

  let configsJson: string[] = []
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
            value.description ?? value.markdownDescription ?? value.markdownEnumDescriptions?.join(",") ?? '',
            `\`${String(value.type)}\``,
            defaultVal.length < MAX_TABLE_COL_CHAR ? `\`${defaultVal}\`` : 'See package.json',
          ]
        }),
    )
    configsJson.push(
      String("```json"),
      `{`,
      ...[...config.activedConfigs.entries()]
        .flatMap(([key, value]) => {
          const defaultVal = defaultValFromSchema(value) || ''
          const type = typeFromSchema(value)
          if (type?.length > 10) {
            return [
              `  //${type}`,
              `  //${value.description ?? value.markdownDescription ?? value.markdownEnumDescriptions?.join(",") ?? ''}`,
              `  "${key}": ${defaultVal.length < MAX_TABLE_COL_CHAR ? `${defaultVal}` : 'See package.json'},`,
              ''
            ]
          } else {
            return [
              `  //\`${type}\`, ${value.description ?? value.markdownDescription ?? value.markdownEnumDescriptions?.join(",") ?? ''} `,
              `  "${key}": ${defaultVal.length < MAX_TABLE_COL_CHAR ? `${defaultVal}` : 'See package.json'},`,
              ''
            ]
          }
        }),
      `}`,
      String("```"))
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

export function generateDTS(packageJson: any, options: GenerateOptions = {}) {
  const config = getConfigInfo(packageJson)
  let {
    header = true,
    namespace = false,
    extensionScope = packageJson.name,
  } = options

  let lines: string[] = []

  lines.push('// Meta info')
  lines.push('', `import { defineConfigObject, defineConfigs } from 'reactive-vscode'`, '')

  for (const key of forwardKeys) {
    lines.push(`export const ${key} = ${packageJson[key] ? JSON.stringify(packageJson[key]) : 'undefined'}`)
  }

  lines.push(
    // eslint-disable-next-line no-template-curly-in-string
    'export const extensionId = `${publisher}.${name}`',
  )

  const extensionScopeWithDot = `${extensionScope}.`
  const extensionId = `${packageJson.publisher}.${packageJson.name}`
  const _publisher = packageJson.publisher
  const _name = packageJson.name

  function withoutExtensionPrefix(name: string) {
    if (name.startsWith(extensionScopeWithDot)) {
      return name.slice(extensionScopeWithDot.length)
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

  lines.push(
    '',
    ...commentBlock(`Commands map registed by \`${extensionId}\``),
    'export const commands = {',
    ...(packageJson.contributes?.commands || [])
      .flatMap((c: any) => {
        const name = withoutExtensionPrefix(c.command)
        return [
          ...commentBlock(`${c.title}\n@value \`${c.command}\`
@example
useCommand(commands.${convertCamelCase(name)}, async () => {
  //do actions or update config 
})`, 2),
          `  ${convertCamelCase(name)}: ${JSON.stringify(c.command)},`,
        ]
      }),
    '} satisfies Record<string, CommandKey>',
  )

  // ========== Configs ==========

  // lines.push(
  //   '',
  //   ...commentBlock('Type union of all configs'),
  // )
  // if (!configKeys.length) {
  //   lines.push('export type ConfigKey = never')
  // }
  // else {
  //   lines.push(
  //     'export type ConfigKey = ',
  //     ...configKeys.map(c =>
  //       `  | "${c}"`,
  //     ),
  //   )
  // }

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

  function generateScopedDts(lines: string[], scopedConfigs: [string, ConfigurationProperty][], scope: string) {
    const scopeWithDot = `${scope}.`
    function removeScope(name: string) {
      if (name.startsWith(scopeWithDot)) {
        return name.slice(scopeWithDot.length)
      }
      return name
    }

    let varName = 'root'
    let scopeComment
    if (scope) {
      varName = `${convertCamelCase(withoutExtensionPrefix(scope))}`
      scopeComment = `${scope}`
    }
    else {
      while (config.scopedActivedConfigs.has(varName)) {
        varName = `root${upperFirst(varName)}`
      }
      scopeComment = `virtual(Keys in the root)`
    }
    const interfaceName = `${upperFirst(varName)}`

    const example = scopedConfigs[0]
    const exampleKey = removeScope(example[0])
    lines.push(
      ``,
      ...commentBlock(`Config keys of \`${scopeComment}\``),
      `export interface ${interfaceName} {`,
      ...scopedConfigs
        .flatMap(([key, value]) => {
          const defaultValue = defaultValFromSchema(value)
          return [
            ...commentBlock([
              value.description ?? value.markdownDescription,
              `@key \`${key}\``,
              `@default \`${defaultValue}\``,
              `@type \`${value.type}\``,
            ].join('\n'), 2),
            `  ${JSON.stringify(removeScope(key))}${defaultValue === undefined ? "?" : ""}: ${typeFromSchema(value)},`,
          ]
        }),
      '}',
      '',
      ...commentBlock(`Scoped defaults of \`${scopeComment}\``),
      `const _${varName} = {`,
      ...commentBlock(`scope: \`${scopeComment}\``),
      `  scope: ${JSON.stringify(scope)},`,
      ...commentBlock(`Keys' defaults of \`${scopeComment}\``),
      `  defaults: {`,
      ...scopedConfigs
        .flatMap(([key, value]) => {
          return [
            // ...commentBlock([
            //   value.description,
            // ].join('\n'), 2),
            `    ${JSON.stringify(removeScope(key))}: ${defaultValFromSchema(value)},`,
          ]
        }),
      `  } satisfies ${interfaceName},`,
      `}`,
      '',
      ...commentBlock([
        `Reactive ConfigObject of \`${scopeComment}\``,
        `@example`,
        `let configValue = ${varName}ConfigObject.${exampleKey} //get value `,
        `${varName}ConfigObject.${exampleKey} = true // set value`,
        `${varName}ConfigObject.$update("${exampleKey}", !configValue, ConfigurationTarget.Workspace, true)`,
      ].join('\n'),
      ),
      `export const ${varName}ConfigObject = defineConfigObject<${interfaceName}>(`,
      `  _${varName}.scope,`,
      `  _${varName}.defaults`,
      `)`,
      ...commentBlock([
        `Reactive ToConfigRefs of \`${scopeComment}\``,
        `@example`,
        `let configValue:${example[1].type} =${varName}Configs.${exampleKey}.value //get value `,
        `${varName}Configs.${exampleKey}.value = ${defaultValFromSchema(example[1])} // set value`,
        `//update value to ConfigurationTarget.Workspace/ConfigurationTarget.Global/ConfigurationTarget.WorkspaceFolder`,
        `${varName}Configs.${exampleKey}.update(true, ConfigurationTarget.WorkspaceFolder, true)`,
      ].join('\n')),
      `export const ${varName}Configs = defineConfigs<${interfaceName}>(`,
      `  _${varName}.scope,`,
      `  _${varName}.defaults`,
      `)`,
    )
  }

  config.scopedActivedConfigs.forEach((keyPropList, scope) => {
    generateScopedDts(lines, keyPropList, scope)
  })

  // for complatibility of pre version
  /*
  function genBase(lines: string[], scopedConfigs: [string, ConfigurationProperty][], scope: string) {
    const scopeWithDot = `${scope}.`

    function removeScope(name: string) {
      if (name.startsWith(scopeWithDot)) {
        return name.slice(scopeWithDot.length)
      }
      return name
    }

    lines.push(
      ``,
      `export interface ScopedConfigKeyTypeMap {`,
      ...scopedConfigs
        .map(([key, value]) => {
          return `  ${JSON.stringify(removeScope(key))}: ${typeFromSchema(value)},`
        }),
      '}',
      '',
      `export const scopedConfigs = {`,
      `  scope: ${JSON.stringify(scope)},`,
      `  defaults: {`,
      ...scopedConfigs
        .map(([key, value]: any) => {
          return `    ${JSON.stringify(removeScope(key))}: ${defaultValFromSchema(value)},`
        }),
      `  } satisfies ScopedConfigKeyTypeMap,`,
      `}`,
      '',
    )
  }
  // for complatibility of pre version
  const scopedConfigs = Object.entries(configsObject)
    .filter(([key]) => key.startsWith(extensionScopeWithDot))
  genBase(lines, scopedConfigs, extensionScope)
*/

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
        '// This file is generated by `reactive-meta-gen`. Do not modify manually.',
        '// @see https://github.com/calmripple/reactive-meta-gen',
        '',
      )
    }
  }

  lines.push('') // EOL

  return lines.join('\n')
}

export function generate(packageJson: any, options: GenerateOptions = {}) {
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

function typeFromSchema(schema: ConfigurationProperty, subIndent = 0): string {
  if (!schema)
    return 'unknown'

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
          types.push(`${typeFromSchema(schema.items, subIndent + 2)}[]`)
          break
        } else if (schema.item) {
          types.push(`${typeFromSchema(schema.item, subIndent + 2)}[]`)
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
                value.description ?? value.markdownDescription,
                `@key \`${key}\``,
                `@default \`${defaultValue}\``,
                `@type \`${value.type}\``,
              ].join('\n'), 2),
              `  '${key}'${defaultValue != undefined ? "" : "?"}: ${typeFromSchema(value, subIndent + 2)}`
            ]
          })

          types.push(`{ \n  ${propertyKeyValues.join('\n  ')} }`)

          break
        }
        types.push('Record<string, unknown>')
        break
      default:
        types.push('unknown')
    }
  }

  if (subIndent != 0 && schema.type !== 'object') {
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

export function formatTable(table: string[][]) {
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
