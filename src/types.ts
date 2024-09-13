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
  type?: string | string[]
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

export interface CommandType {
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
  title: string

  // funcName: string | undefined
}
