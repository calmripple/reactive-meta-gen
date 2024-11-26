import type { CommandType, ConfigurationProperty, GenerateOptions } from './types'
import * as _ from 'radash'
import * as ts from 'typescript'
import { getConfigInfo, upperFirst } from './util'
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
          let jsonComment: string | undefined = description(value) // value.description ?? value.markdownDescription ?? value.markdownEnumDescriptions?.join(',') ?? undefined
          jsonComment = jsonComment ? `  //${upperFirst(jsonComment)}` : undefined
          return [
            jsonComment,
            `  "${key}": ${defaultVal.length < MAX_TABLE_COL_CHAR ? `${defaultVal}` : 'See package.json'},`,
          ].filter(v => v !== undefined && v !== null)
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

export function generateDTS(packageJson: any, options: GenerateOptions): string {
  const extensionId = `${packageJson.publisher}.${packageJson.name}`
  // const _publisher = packageJson.publisher
  const signatures = _.memo((_domain: string) => new Set<string>())

  function defineDynamic(signature: string, domain: string = extensionId, converter: (preSignature: string) => string, attemptShorten = false): string {
    let tempSign
    if (!attemptShorten) {
      tempSign = converter(signature)
      if (!signatures(domain).has(tempSign)) {
        signatures(domain).add(tempSign)
        return tempSign
      }
      throw new Error(`Can't found available signature related '${signature}' with disable 'autoFindAvailable'' , make sure claim it only onece.`)
    }

    const parts = signature.split('.').filter(l => l)
    let tryCount = parts.length - 1
    while (tryCount > -1) {
      tempSign = converter(parts.slice(tryCount, parts.length).join('.'))
      if (!signatures(domain).has(tempSign)) {
        signatures(domain).add(tempSign)
        return tempSign
      }
      tryCount--
    }

    tryCount = 0
    while (tryCount++ < 100) {
      tempSign = converter(`${parts[0]}`).concat(`${tryCount}`)
      if (!signatures(domain).has(tempSign)) {
        signatures(domain).add(tempSign)
        return tempSign
      }
    }

    throw new Error(`Can't found available signature related '${signature}' after trying ${tryCount} times.`)
  }
  function defineOrigin(signatures: string[], domain: string = extensionId): string[] {
    return signatures.map(signature => defineDynamic(signature, domain, v => v, false))
  }
  function upperCamelCase(signature: string, domain: string = extensionId, attemptShorten = true) {
    return defineDynamic(signature, domain, v => upperFirst(_.camel(v)), attemptShorten)
  }
  // eslint-disable-next-line unused-imports/no-unused-vars
  function upperCamelCases(signatures: string[], domain: string = extensionId, attemptShorten = true): string[] {
    return signatures.map(signature => upperCamelCase(signature, domain, attemptShorten))
  }
  function lowerCamelCase(signature: string, domain: string = extensionId, attemptShorten = true): string {
    return defineDynamic(signature, domain, v => _.camel(v), attemptShorten)
  }
  function lowerCamelCases(signatures: string[], domain: string = extensionId, attemptShorten = true): string[] {
    return signatures.map(signature => lowerCamelCase(signature, domain, attemptShorten))
  }
  let {
    header = true,
    namespace = false,
    redundant = false,
  } = options
  const config = getConfigInfo(packageJson, redundant)
  let lines: string[] = []
  let examples: string[] = []

  const [defineConfigObject, defineConfigs, useStatusBarItem, useDisposable, Nullable, UseStatusBarItemOptions]
    = defineOrigin(['defineConfigObject', 'defineConfigs', 'useStatusBarItem', 'useDisposable', 'Nullable', 'UseStatusBarItemOptions'])
  const [varUseInternalCommands, varUseInternalCommand, varUseInternalLogger, varUseInternalOutputChannel]
    = defineOrigin(['useReactiveCommands', 'useReactiveCommand', 'useReactiveLogger', 'useReactiveOutputChannel'])

  lines.push('// Meta info')
  lines.push(
    `import { ${defineConfigObject},
    ${defineConfigs},
    useCommand as ${varUseInternalCommand},
    useCommands as ${varUseInternalCommands},
    useLogger as ${varUseInternalLogger},
    useOutputChannel as ${varUseInternalOutputChannel},    
    ${useStatusBarItem},
    ${useDisposable},
    } from 'reactive-vscode'`,
    `import type { ${Nullable},${UseStatusBarItemOptions} } from 'reactive-vscode'`,
  )

  const varPublisher = lowerCamelCase(`publisher`)
  lines.push(
    `export const ${varPublisher} = ${packageJson.publisher ? JSON.stringify(packageJson.publisher) : 'undefined'}`,
  )
  const [varName, varversion, varDisplayName, vardescription, varExtensionId] = defineOrigin([`name`, `version`, `displayName`, `description`, `extensionId`])
  lines.push(
    `export const ${varName} = ${packageJson.name ? JSON.stringify(packageJson.name) : 'undefined'}`,
    `export const ${varversion} = ${packageJson.version ? JSON.stringify(packageJson.version) : 'undefined'}`,
    `export const ${varDisplayName} = ${packageJson.displayName ? JSON.stringify(packageJson.displayName) : 'undefined'}`,
    `export const ${vardescription} = ${packageJson.description ? JSON.stringify(packageJson.description) : 'undefined'}`,
    `export const ${varExtensionId} = "${extensionId}"`,
  )
  const [varTypeCache, varMemoize, varMemo, varTypeCommandsInformation] = defineOrigin(['Cache', 'memoize', 'memo', 'CommandsInformation'])

  const staticCode = ` 

type ${varTypeCache}<T> = {
    exp: number | null;
    value: T;
    dispose: () => void;
}

const ${varMemoize} = <TArgs extends any[], TResult>(
    cache: Map<string, ${varTypeCache}<TResult>>,
    func: (...args: TArgs) => TResult,
    keyFunc: ((...args: TArgs) => string) | null,
    ttl: number | null
) => {
    return function callWithMemo(...args: any): TResult {
        const key = keyFunc ? keyFunc(...args) : JSON.stringify({ args });
        const existing = cache.get(key);
        if (existing !== undefined) {
            if (!existing.exp)
                return existing.value;
            if (existing.exp > new Date().getTime()) {
                return existing.value;
            }
        }
        const result = func(...args);
        const target: ${varTypeCache}<TResult> = {
            exp: ttl ? new Date().getTime() + ttl : null,
            value: result,
            dispose: () => {
                cache.delete(key)
            }
        }
        cache.set(key, target);
        useDisposable(target);
        return result;
    };
}

/**
 * Creates a memoized function. The returned function
 * will only execute the source function when no value
 * has previously been computed. If a ttl (milliseconds)
 * is given previously computed values will be checked
 * for expiration before being returned.
 */
export const ${varMemo} = <TArgs extends any[], TResult>(
    func: (...args: TArgs) => TResult,
    options: {
        key?: (...args: TArgs) => string
        ttl?: number
    } = {}
) => {
    return ${varMemoize}(new Map<string, ${varTypeCache}<TResult>>(), func, options.key ?? null, options.ttl ?? null) as (
        ...args: TArgs
    ) => TResult
}
    
export interface ${varTypeCommandsInformation} {
  /**
   *  category string by which the command is grouped in the UI
   */
  category?: string
  /**
   * identifier of the command to execute
   */
  command: string
  /**
   * title which the command is represented in the UI
   */
  title: string,
  enablement?: string,
  icon?: string,
  shortTitle?: string,
  commandShorthandName?: string
}
`

  lines.push(staticCode)
  // ========== Commands ==========
  const [varUseCommand, varUseCommands, varTypeCommand, varShorthandCommands, varCommandsInformation]
    = defineOrigin([`useCommand`, `useCommands`, 'Command', 'commands', 'commandsInformation'])

  const varCommandShorthandNames = ((packageJson.contributes?.commands || []) as CommandType[]).map((c) => {
    const f = lowerCamelCase(c.command, extensionId)
    return {
      commandShorthandName: f,
      ...c,
    } as CommandType
  })
  lines.push(
    ...commentBlock('Type union of all commands'),
  )
  if (!varCommandShorthandNames?.length) {
    lines.push(`export type ${varTypeCommand} = never`)
  }
  else {
    lines.push(
      `export type ${varTypeCommand} = `,
      ...varCommandShorthandNames.map(c =>
        `  | ${JSON.stringify(c.command)}`,
      ),
    )
  }

  lines.push(
    ...commentBlock(`Commands map registed by \`${extensionId}\``),
    `export const ${varShorthandCommands} = {`,
    ...varCommandShorthandNames
      .flatMap((c) => {
        return [
          ...commentBlock(`${c.title}\n@command \`${c.command}\``, 2),
          `  ${c.commandShorthandName}: ${JSON.stringify(c.command)},`,
        ]
      }),
    `} satisfies Record<string, ${varTypeCommand}> as Record<string, ${varTypeCommand}>`,
  )

  lines.push(
    ...commentBlock(`Commands map registed by \`${extensionId}\``),
    `export const ${varCommandsInformation} = {`,
    ...varCommandShorthandNames
      .flatMap((c) => {
        const propName = c.command
        const val = c
        return [
          ...commentBlock(`${c.title}\n@command \`${c.command}\``, 2),
          `  "${propName}": ${JSON.stringify(val)},`,
        ]
      }),
    `} satisfies Record<${varTypeCommand}, ${varTypeCommandsInformation}> as Record<${varTypeCommand}, ${varTypeCommandsInformation}> `,
  )

  // ========== Command Base ==========
  const varLoggerDefault = `${varDisplayName}??${varName}??${varExtensionId}`

  const [putLeft, putRight, varStatusBarItemOption, varUseStatusBarItemFromCommand, varTypeLoggerName]
    = defineOrigin(['putLeft', 'putRight', 'statusBarItemOption', 'useStatusBarItemFromCommand', 'LoggerName'])

  lines.push(
    ...commentBlock('Register a command. See `vscode::commands.registerCommand`.'),
    `export const ${varUseCommand} = (commandFullKey: ${varTypeCommand}, callback: (...args: any[]) => any): void => ${varUseInternalCommand}(commandFullKey, callback)`,
    ...commentBlock('Register multiple commands. See `vscode::commands.registerCommand`.'),
    `export const ${varUseCommands} = (commands: Partial<Record<${varTypeCommand}, (...args: any[]) => any>>): void => ${varUseInternalCommands}(commands)`,
    ...commentBlock('name type of Logger and OutputChannel'),
    `export type ${varTypeLoggerName} = typeof ${varName} | typeof ${varDisplayName} | typeof ${varExtensionId}`,
    ...commentBlock('Creates a logger that writes to the output channel.'),
    `export const ${lowerCamelCase('useLogger')}=(loggerName: ${varTypeLoggerName} = ${varLoggerDefault}, getPrefix?: ((type: string) => string) | null) =>${varUseInternalLogger}(loggerName, { 'getPrefix': getPrefix })`,
    ...commentBlock('@reactive `window.createOutputChannel`'),
    `export const ${lowerCamelCase('useOutputChannel')}=(outputName: ${varTypeLoggerName} = ${varLoggerDefault}) =>${varUseInternalOutputChannel}(outputName)`,
    `export const ${putRight} = (target: Nullable<string>, curr: string) => target ? ''.concat(curr).concat(target) : curr`,
    `export const ${putLeft} = (target: Nullable<string>, curr: string) => target ? ''.concat(target).concat(curr) : curr`,
    ...commentBlock('Create a statusBarItem with a commmand id'),
    `export const ${varUseStatusBarItemFromCommand} = ${varMemo}((command: ${varTypeCommand}) => {
      const cmd = ${varCommandsInformation}[command]
      return ${useStatusBarItem}({
          id: cmd.commandShorthandName,
          command: cmd.command,
          name: cmd.command,
          text: ${putLeft}(cmd.icon, cmd.shortTitle ?? cmd.title ?? cmd.commandShorthandName),
          tooltip: ${putLeft}(cmd.category, ":").concat(cmd.title ?? cmd.shortTitle ?? cmd.commandShorthandName)
      });
    })`,
    ...commentBlock('Create a option of statusBarItem with a commmand id'),
    `
    export const ${varStatusBarItemOption} = (command: ${varTypeCommand}):${UseStatusBarItemOptions}  => {
        const cmd = ${varCommandsInformation}[command];
        return {
            id: cmd.commandShorthandName,
            command: cmd.command,
            name: cmd.command,
            text: putLeft(cmd.icon, cmd.shortTitle ?? cmd.title ?? cmd.commandShorthandName),
            tooltip: putLeft(cmd.category, ":").concat(cmd.title ?? cmd.shortTitle ?? cmd.commandShorthandName)
        }  ;
    };
    `,
  )

  lines.push(
    ...varCommandShorthandNames
      .flatMap((c) => {
        const varUseCommandShorthandName = lowerCamelCase(`${varUseCommand}.${c.commandShorthandName}`)
        return [
          ...commentBlock(`${c.title}
          @command Register a command \`${c.command}\``),
          `export const ${varUseCommandShorthandName}=(callback: (...args: any[]) => any) => ${varUseCommand}(${varShorthandCommands}.${c.commandShorthandName}, callback)`,
        ]
      }),
  )
  // ========== Configs ==========

  if (config.deprecatedKeys.length) {
    lines.push(
      ...commentBlock('Type union of Deprecated all configs'),
    )
    lines.push(
      `export type ${upperCamelCase('DeprecatedConfigKey')} = `,
      ...config.deprecatedKeys.map(c =>
        `  | "${c}"`,
      ),
    )
  }

  const configurationDefaults_KeyValue: string[] = []
  const sectionConfigConstExports: string[] = []
  const varConfigs_KeyValue: string[] = []

  const [varConfigsDefaults, varConfigs, varUseConfig, varUseConfigObject]
    = lowerCamelCases([`configs.${extensionId}.defaults`, 'configs', 'useConfig', 'useConfigObject'])
  const varTypeSectionames = upperCamelCase('SectionName')

  // 遍历所有section
  config.activedSectionConfigs.forEach((sectionConfig, section) => {
    function removeSection(name: string): string {
      const sectionWithDot = `${section}.`
      if (name.startsWith(sectionWithDot)) {
        return name.slice(sectionWithDot.length)
      }
      return name
    }

    let varSectionShorthand
    let sectionComment
    if (section) {
      varSectionShorthand = lowerCamelCase(section, varConfigsDefaults)
      sectionComment = `${section}`
    }
    else {
      varSectionShorthand = lowerCamelCase('root')
      sectionComment = `virtual(Keys in the root)`
    }
    varConfigs_KeyValue.push(`${varSectionShorthand}:${JSON.stringify(section)},`)
    const varTypeSectionName = upperCamelCase(`${varSectionShorthand}`)

    const varName = {
      varUseConfigSection: lowerCamelCase(`${varUseConfig}${varTypeSectionName}`),
      varUseConfigObjectSection: lowerCamelCase(`${varUseConfigObject}${varTypeSectionName}`),
    }
    const example = sectionConfig[0]
    const exampleKey = removeSection(example[0])
    // section 默认值
    configurationDefaults_KeyValue.push(
      ...commentBlock(`Config defaults of \`${sectionComment}\``, 2),
      `  ${JSON.stringify(section)}: {`,
    )

    // section 导出对象
    sectionConfigConstExports.push(
      ...commentBlock([`ConfigObject<${varTypeSectionName}> of \`${sectionComment}\``]),
      `export const ${varName.varUseConfigObjectSection} =()=> ${varUseConfigObject}(${varConfigs}.${varSectionShorthand})`,
      ...commentBlock(`ToConfigRefs<${varTypeSectionName}> of \`${sectionComment}\``,
      ),
      `export const ${varName.varUseConfigSection} =()=> ${varUseConfig}(${varConfigs}.${varSectionShorthand})`,
    )

    examples = [...exampleBlock([
      `// Import reference`,
      `import { ConfigurationTarget } from 'vscode'`,
      `import * as meta from './generated/meta'`,
    ]), ...exampleBlock([
      `//ConfigObject<${varTypeSectionName}> of \`${sectionComment}\``,
      `//@example ${varSectionShorthand}`,
      `const ${varSectionShorthand} = meta.${varName.varUseConfigObjectSection}()`,
      `const oldVal:${example[1].type} = ${varSectionShorthand}.${exampleKey} //get value `,
      // `${varName.useConfigObject}.${exampleKey} = oldVal // set value`,
      `${varSectionShorthand}.$update("${exampleKey}", oldVal, ConfigurationTarget.Global) //update value`,
    ]), ...exampleBlock([
      `//ToConfigRefs<${varTypeSectionName}> of \`${sectionComment}\``,
      `//@example ${varSectionShorthand}`,
      `const ${varSectionShorthand} = meta.${varName.varUseConfigSection}()`,
      `const oldVal:${example[1].type} = ${varSectionShorthand}.${exampleKey}.value //get value `,
      // `${varName.useConfig}.${exampleKey}.value = oldVal // set value`,
      // `//update value to ConfigurationTarget.Workspace/ConfigurationTarget.Global/ConfigurationTarget.WorkspaceFolder`,
      `${varSectionShorthand}.${exampleKey}.update(oldVal, ConfigurationTarget.Global) //update value`,
    ])]

    // section 类型生成开始
    lines.push(
      ...commentBlock(`Section Type of \`${sectionComment}\``),
      `export interface ${varTypeSectionName} {`,
    )
    // 遍历section 下所有 短key的默认值
    sectionConfig.forEach(([fullKey, value]) => {
      const defaultValue = defaultValFromSchema(value)
      const sectionKeyComments = commentBlock([
        description(value),
        // `@key \`${fullKey}\``,
        // `@default ${defaultValue}`,
        // `@type \`${value.type}\``,
      ], 2)
      // 生成当前section所有key类型
      lines.push(
        ...sectionKeyComments,
        `  ${JSON.stringify(removeSection(fullKey))}${defaultValue === undefined ? '?' : ''}: ${typeFromSchema(value, false)},`,
      )
      // 当前section下所有key的默认值
      configurationDefaults_KeyValue.push(
        ...sectionKeyComments,
        `  ${JSON.stringify(removeSection(fullKey))}: ${defaultValFromSchema(value)},`,
      )
    })
    // section 类型结束
    lines.push('}')

    configurationDefaults_KeyValue.push(
      `  } satisfies ${varTypeSectionName} as ${varTypeSectionName},`,

    )
  })

  lines.push(
    `const ${varConfigsDefaults} = {`,
    ...configurationDefaults_KeyValue,
    `}`,
    ...commentBlock('List of section names.'),
    `export type ${varTypeSectionames} = keyof typeof ${varConfigsDefaults}`,
    ...commentBlock('Shorthand of config section name.'),
    `export const ${varConfigs} = {`,
    ...varConfigs_KeyValue,
    `}  satisfies Record<string, ${varTypeSectionames}>`,

    ...commentBlock('Define configurations of an extension. See `vscode::workspace.getConfiguration`.'),
    `export const ${varUseConfig} =${varMemo}(<Section extends ${varTypeSectionames}>(section: Section)=>  defineConfigs<typeof ${varConfigsDefaults}[Section]>(section, ${varConfigsDefaults}[section]))`,
    ...commentBlock('Define configurations of an extension. See `vscode::workspace.getConfiguration`.'),
    `export const ${varUseConfigObject}=${varMemo}(<Section extends ${varTypeSectionames}>(section: Section)=>defineConfigObject<typeof ${varConfigsDefaults}[Section]>(section, ${varConfigsDefaults}[section]))`,
    ...sectionConfigConstExports,
  )
  // config.virtualActivedSectionConfigs.forEach((values, section) => {
  //   lines.push(
  //     `export type ${getIdentifier(upperFirst(convertCamelCase(section)))}= ${values.map(v => '"'.concat(v[0]).concat('"')).join('|')}  ;
  //     `,
  //   )
  // })

  // ========== Namespace ==========

  if (namespace) {
    if (namespace === true)
      namespace = 'ExtensionMeta'

    lines = lines.map(line => line ? `  ${line} ` : line)
    lines.unshift(
      ...commentBlock(`Extension Meta for \`${extensionId}\``, 0),
      `export namespace ${namespace} {`,
    )
    lines.push(
      '}',

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
      )
    }
  }
  lines.push(...examples)
  return lines.join('\n')
}

const printer = ts.createPrinter({
  newLine: ts.NewLineKind.LineFeed,
  removeComments: false,
  omitTrailingSemicolon: true,
  noEmitHelpers: false,
})

export function generate(packageJson: any, options: GenerateOptions) {
  // 使用解析器生成AST
  const sourceFileTS = generateDTS(packageJson, options)
  const formatedSourceFileTS = ts.createSourceFile('abc.ts', sourceFileTS, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS)
  const md = generateMarkdown(packageJson)
  return {
    dts: printer.printFile(formatedSourceFileTS), // sourceFileTS,// generateDTS(packageJson, options),
    markdown: md,
  }
}

function description(value: ConfigurationProperty) {
  return value.description
    ?? value.markdownDescription
    ?? value.enumDescriptions?.join('\n')
    ?? value.markdownEnumDescriptions?.join('\n')
    ?? value.deprecationMessage
    ?? value.markdownDeprecationMessage ?? ''
}
function commentBlock(text?: string | string[], padding = 0): string[] {
  const _text = block(text)
  if (_text?.length === 0)
    return []
  const indent = ' '.repeat(padding)
  return [
    `${indent}/**`,
    ..._text.map(l => `${indent} * ${l}`),
    `${indent} */`,
  ]
}
function exampleBlock(text?: string | string[], padding = 0): string[] {
  const _text = block(text)
  if (_text?.length === 0)
    return []
  const indent = ' '.repeat(padding)
  return [
    `${indent}/**`,
    ..._text.map(l => `${indent}${l}`),
    `${indent} */`,
  ]
}
function block(text?: string | string[]) {
  let _text: string[]
  if (!text) {
    return []
  }
  else if (_.isArray(text)) {
    _text = text.flatMap(l => l.split(/\n/g))
  }
  else {
    _text = text.split(/\n/g)
  }
  _text = _text.filter(l => l).map(l => l.trim())
  _text[0] = upperFirst(_text[0])
  return _text
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
                description(value),
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

export function defaultValFromSchema(schema: ConfigurationProperty): string | undefined | Array<unknown> {
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
    return JSON.stringify([])// undefined
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
