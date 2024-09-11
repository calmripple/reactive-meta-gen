declare interface GenerateOptions {
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

declare interface ConfigurationProperty {
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

declare interface CommandType {
  category?: string
  command: string
  title: string
}
