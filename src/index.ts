import {
  convertCamelCase,
  upperFirst,
  getConfigInfo,
  getRightSection,
} from './util'
import * as ts from 'typescript'
import { memo } from 'radash'
import type { GenerateOptions, CommandType, ConfigurationProperty } from './types'

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
  const extensionId = `${packageJson.publisher}.${packageJson.name}`
  // const _publisher = packageJson.publisher
  const name = packageJson.name as string
  const signatures = memo((_domain: string) => new Set<string>())
  function getSignature(signature: string, domain: string = extensionId, builder?: (preSignature: string, tryCount: number) => string | undefined): string {
    let tryCount = 1

    while (signatures(domain).has(signature) && tryCount < 100) {
      let tempSign
      if (builder) {
        try {
          tempSign = builder(signature, tryCount)
        }
        catch {
          tempSign = undefined
        }
      }
      signature = tempSign === undefined ? `${signature}_${tryCount}` : tempSign
      tryCount++
    }
    signatures(domain).add(signature)
    return signature
  }
  function _getSignatures(signatures: string[], domain: string = extensionId, builder?: (preSignature: string, tryCount: number) => string): string[] {
    return signatures.map(signature => getSignature(signature, domain, builder))
  }
  function _getSignatureObject(signatures: Record<string, string>, domain: string = extensionId, builder?: (preSignature: string, tryCount: number) => string): Record<string, string> {
    return Object.entries(signatures).reduce((pre, [key, value]) => {
      pre[getSignature(key, domain, builder)] = value
      return pre
    }, {} as Record<string, string>)
  }
  const config = getConfigInfo(packageJson)
  let {
    header = true,
    namespace = false,
  } = options

  let lines: string[] = []

  lines.push('// Meta info')
  lines.push('', `import { defineConfigObject, defineConfigs, useCommand as useReactiveCommand, 
    useCommands as useReactiveCommands,
    useLogger as useReactiveLogger,
    useOutputChannel as useReactiveOutputChannel,    
    } from 'reactive-vscode'`, '')

  const varPublisher = getSignature(`publisher`)
  lines.push(
    `export const ${varPublisher} = ${packageJson.publisher ? JSON.stringify(packageJson.publisher) : 'undefined'}`,
  )
  const varName = getSignature(`name`)
  lines.push(
    `export const ${varName} = ${packageJson.name ? JSON.stringify(packageJson.name) : 'undefined'}`,
  )

  const varversion = getSignature(`version`)
  lines.push(
    `export const ${varversion} = ${packageJson.version ? JSON.stringify(packageJson.version) : 'undefined'}`,
  )
  const varDisplayName = getSignature(`displayName`)
  lines.push(
    `export const ${varDisplayName} = ${packageJson.displayName ? JSON.stringify(packageJson.displayName) : 'undefined'}`,
  )
  const vardescription = getSignature(`description`)
  lines.push(
    `export const ${vardescription} = ${packageJson.description ? JSON.stringify(packageJson.description) : 'undefined'}`,
  )
  const varExtensionId = getSignature(`extensionId`)
  lines.push(
    `export const ${varExtensionId} = "${packageJson.publisher}.${packageJson.name}"`,
  )

  // ========== Commands ==========
  // useCommand${upperFirst(convertCamelCase(getRightSection(c.command, -1)))}
  const varUseCommand = getSignature(`useCommand`)
  const varUseCommands = getSignature(`useCommands`)
  const varCommandKey = getSignature('CommandKey')
  const varShorthandCommands = getSignature('commands')
  const varUseCommandFunctionNames = ((packageJson.contributes?.commands || []) as CommandType[]).map((c) => {
    const f = getSignature(convertCamelCase(getRightSection(c.command, -1)), extensionId, (_pre, _count) => convertCamelCase(getRightSection(c.command, -_count)))
    return {
      varUseCommandFunctionName: f,
      ...c,
    }
  })
  lines.push(
    '',
    ...commentBlock('Type union of all commands'),
  )
  if (!varUseCommandFunctionNames?.length) {
    lines.push(`export type ${varCommandKey} = never`)
  }
  else {
    lines.push(
      `export type ${varCommandKey} = `,
      ...varUseCommandFunctionNames.map(c =>
        `  | ${JSON.stringify(c.command)}`,
      ),
    )
  }

  lines.push(
    '',
    ...commentBlock(`Commands map registed by \`${extensionId}\``),
    `export const ${varShorthandCommands} = {`,
    ...varUseCommandFunctionNames
      .flatMap((c) => {
        return [
          ...commentBlock(`${c.title}\n@commandkey \`${c.command}\``, 2),
          `  ${c.varUseCommandFunctionName}: ${JSON.stringify(c.command)},`,
        ]
      }),
    `} satisfies Record<string, ${varCommandKey}> as Record<string, ${varCommandKey}>`,
  )

  // ========== Command Base ==========
  const varLoggerDefault = `${varDisplayName}??${varName}??${varExtensionId}`
  const varLoggerNameType = `${getSignature('LoggerNameType')}`
  lines.push(
    commentBlock('Register a command. See `vscode::commands.registerCommand`.').join('\n'),
    `export function ${varUseCommand}(commandFullKey: ${varCommandKey}, callback: (...args: any[]) => any): void {
  return useReactiveCommand(commandFullKey, callback)
}`,
    commentBlock('Register multiple commands. See `vscode::commands.registerCommand`.').join('\n'),
    `export function ${varUseCommands}(commands: Partial<Record<${varCommandKey}, (...args: any[]) => any>>): void {
  return useReactiveCommands(commands)
}`,
    `export type ${varLoggerNameType} = typeof ${varName} | typeof ${varDisplayName} | typeof ${varExtensionId}`,
    commentBlock('Creates a logger that writes to the output channel.').join('\n'),
    `export function ${getSignature('useLogger')}(loggerName: ${varLoggerNameType} = ${varLoggerDefault}, getPrefix?: ((type: string) => string) | null) {
    return useReactiveLogger(loggerName, { 'getPrefix': getPrefix })
}`,
    commentBlock('@reactive `window.createOutputChannel`').join('\n'),
    `export function ${getSignature('useOutputChannel')}(outputName: ${varLoggerNameType} = ${varLoggerDefault}) {
    return useReactiveOutputChannel(outputName)
}`,
  )

  lines.push(
    ...varUseCommandFunctionNames
      .flatMap((c) => {
        return [
          ``,
          ...commentBlock(`${c.title}
@commandkey \`${c.command}\``, 0),
          `export function useCommand${upperFirst(c.varUseCommandFunctionName)}(callback: (...args: any[]) => any) {`,
          `  return ${varUseCommand}(${varShorthandCommands}.${c.varUseCommandFunctionName}, callback)`,
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

  const sectionConfigDefaultKeyValue: string[] = []
  const sectionConfigConstExports: string[] = []
  const varConfigsDefaults = getSignature(`${convertCamelCase(name)}Defaults`)
  const varShorthandConfigs = getSignature('configs')
  const shorthandConfigs: string[] = []
  const varSectionConfigKey = getSignature('ConfigSecionKey')
  const varUseConfig = getSignature('useConfig')
  const varUseConfigObject = getSignature('useConfigObject')
  // 遍历所有section
  config.sectionActivedConfigs.forEach((sectionConfig, section) => {
    function removeSection(name: string): string {
      const sectionWithDot = `${section}.`
      if (name.startsWith(sectionWithDot)) {
        return name.slice(sectionWithDot.length)
      }
      return name
    }

    let varSectionConfigName
    let sectionComment
    if (section) {
      varSectionConfigName = getSignature(convertCamelCase(getRightSection(section, -1)), varConfigsDefaults, (_pre, count) => convertCamelCase(getRightSection(section, -count)))
      sectionComment = `${section}`
    }
    else {
      varSectionConfigName = getSignature('root')
      sectionComment = `virtual(Keys in the root)`
    }
    shorthandConfigs.push(`${varSectionConfigName}:${JSON.stringify(section)},`)
    const varSectionConfigInterfaceName = getSignature(`${upperFirst(varSectionConfigName)}`)

    const varName = {
      varSectionConfigExportConst: getSignature(`${varUseConfig}${varSectionConfigInterfaceName}`),
      varSectionConfigObjectExportConst: getSignature(`${varUseConfigObject}${varSectionConfigInterfaceName}`),
    }
    const example = sectionConfig[0]
    const exampleKey = removeSection(example[0])
    // section 默认值
    sectionConfigDefaultKeyValue.push(
      '',
      ...commentBlock(`Section defaults of \`${sectionComment}\``, 2),
      `  ${JSON.stringify(section)}: {`,
    )

    // section 导出对象
    sectionConfigConstExports.push(
      ...commentBlock([
        `ConfigObject of \`${sectionComment}\``,
        `@example`,
        `const oldVal = ${varName.varSectionConfigObjectExportConst}.${exampleKey} //get value `,
        // `${varName.useConfigObject}.${exampleKey} = oldVal // set value`,
        `${varName.varSectionConfigObjectExportConst}.$update("${exampleKey}", oldVal) //update value`,
      ].join('\n'),
      ),
      `export const ${varName.varSectionConfigObjectExportConst} =()=> ${varUseConfigObject}(${varShorthandConfigs}.${varSectionConfigName})`,
      ...commentBlock([
        `ToConfigRefs of \`${sectionComment}\``,
        `@example`,
        `const oldVal:${example[1].type} =${varName.varSectionConfigExportConst}.${exampleKey}.value //get value `,
        // `${varName.useConfig}.${exampleKey}.value = oldVal // set value`,
        // `//update value to ConfigurationTarget.Workspace/ConfigurationTarget.Global/ConfigurationTarget.WorkspaceFolder`,
        `${varName.varSectionConfigExportConst}.${exampleKey}.update(oldVal) //update value`,
      ].join('\n')),
      `export const ${varName.varSectionConfigExportConst} =()=> ${varUseConfig}(${varShorthandConfigs}.${varSectionConfigName})`,
    )
    // section 类型生成开始
    lines.push(``, ...commentBlock(`Section Type of \`${sectionComment}\``), `export interface ${varSectionConfigInterfaceName} {`)
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
      sectionConfigDefaultKeyValue.push(
        ...commentBlock([
          value.description,
        ].join('\n'), 4),
        `    ${JSON.stringify(removeSection(fullKey))}: ${defaultValFromSchema(value)},`,
      )
    })
    // section 类型结束
    lines.push('}')

    sectionConfigDefaultKeyValue.push(
      // `  } satisfies ${interfaceName},`,
      `  } satisfies ${varSectionConfigInterfaceName} as ${varSectionConfigInterfaceName},`,
      '',
    )
  })

  // const sectionNames = [...config.sectionActivedConfigs.keys()]
  lines.push(

    '',
    `const ${varConfigsDefaults} = {`,
    ...sectionConfigDefaultKeyValue,
    `}`,
    '',
    `export type ${varSectionConfigKey} = keyof typeof ${varConfigsDefaults}`,
    // `export type ${varSectionConfigKey} = ${sectionNames.map(s => JSON.stringify(s)).join('|')}`,
    '',
    `export const ${varShorthandConfigs} = {`,
    ...shorthandConfigs,
    `}  satisfies Record<string, ${varSectionConfigKey}>`,

    commentBlock('Define configurations of an extension. See `vscode::workspace.getConfiguration`.').join('\n'),
    `export function ${varUseConfig}<K extends ${varSectionConfigKey}>(section: K) {
  return defineConfigs<typeof ${varConfigsDefaults}[K]>(section, ${varConfigsDefaults}[section])
}`,
    commentBlock('Define configurations of an extension. See `vscode::workspace.getConfiguration`.').join('\n'),
    `export function ${varUseConfigObject}<K extends ${varSectionConfigKey}>(section: K) {
  return defineConfigObject<typeof ${varConfigsDefaults}[K]>(section, ${varConfigsDefaults}[section])
}
    `,
    ...sectionConfigConstExports,
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

const printer = ts.createPrinter({
  newLine: ts.NewLineKind.CarriageReturnLineFeed,
  removeComments: false,
  omitTrailingSemicolon: true,
  noEmitHelpers: false,
})

export function generate(packageJson: any, options: GenerateOptions = {}): {
  dts: string
  markdown: {
    commandsTable: string
    configsTable: string
    configsJson: string
  }
} {
  // 使用解析器生成AST
  const sourceFilets = ts.createSourceFile('abc.ts', generateDTS(packageJson, options), ts.ScriptTarget.Latest, true, ts.ScriptKind.TS)
  const md = generateMarkdown(packageJson)
  // const scourceFileMd = ts.createSourceFile('a.json', md.configsJson, ts.ScriptTarget.JSON, true, ts.ScriptKind.JSON)
  // md.configsJson = printer.printFile(scourceFileMd)
  return {
    dts: printer.printFile(sourceFilets), // generateDTS(packageJson, options),
    markdown: md,
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
