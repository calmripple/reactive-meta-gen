// This file is generated by `reactive-meta-gen`. Do not modify manually.
// @see https://github.com/calmripple/reactive-meta-gen

// Meta info

import { defineConfigObject, defineConfigs } from 'reactive-vscode'

export const publisher = "kvoon3"
export const name = "iconify-fork"
export const version = "0.8.1"
export const displayName = "Iconify IntelliSense Fork"
export const description = "Intelligent Iconify previewing and searching for VS Code"
export const extensionId = `${publisher}.${name}`

/**
 * Type union of all commands
 */
export type CommandKey = 
  | "iconify.toggle-annotations"
  | "iconify.toggle-inplace"
  | "iconify.clear-cache"

/**
 * Commands map registed by `kvoon3.iconify-fork`
 */
export const commands = {
  /**
   * Toggle Annotations
   * @value `iconify.toggle-annotations`
   * @example
   * useCommand(commands.toggleAnnotations, async () => {
   *   //do actions or update config 
   * })
   */
  toggleAnnotations: "iconify.toggle-annotations",
  /**
   * Toggle In-place Mode
   * @value `iconify.toggle-inplace`
   * @example
   * useCommand(commands.toggleInplace, async () => {
   *   //do actions or update config 
   * })
   */
  toggleInplace: "iconify.toggle-inplace",
  /**
   * Clear icon cache
   * @value `iconify.clear-cache`
   * @example
   * useCommand(commands.clearCache, async () => {
   *   //do actions or update config 
   * })
   */
  clearCache: "iconify.clear-cache",
} satisfies Record<string, CommandKey>

/**
 * Config keys of `iconify`
 */
export interface Iconify {
  /**
   * Use icon graph to replace the icon name.
   * @key `iconify.inplace`
   * @default `true`
   * @type `boolean`
   */
  "inplace": boolean,
  /**
   * Enabled Iconify inline annotations
   * @key `iconify.annotations`
   * @default `true`
   * @type `boolean`
   */
  "annotations": boolean,
  /**
   * Position the icon before or after the icon name
   * @key `iconify.position`
   * @default `"before"`
   * @type `string`
   */
  "position": ("before" | "after"),
  /**
   * Icon color hex for inline displaying
   * @key `iconify.color`
   * @default `"auto"`
   * @type `string`
   */
  "color": string,
  /**
   * Delimiters for separating between collection id and icon id
   * @key `iconify.delimiters`
   * @default `[":","--","-","/"]`
   * @type `array`
   */
  "delimiters": (string | undefined)[],
  /**
   * Prefixes for matching
   * @key `iconify.prefixes`
   * @default `["","i-","~icons/"]`
   * @type `array`
   */
  "prefixes": (string | undefined)[],
  /**
   * Suffixes for matching
   * @key `iconify.suffixes`
   * @default `["","i-"]`
   * @type `array`
   */
  "suffixes": (string | undefined)[],
  /**
   * Array of language IDs to enable annotations
   * @key `iconify.languageIds`
   * @default `["javascript","javascriptreact","typescript","typescriptreact","vue","svelte","html","pug","json","yaml"]`
   * @type `array`
   */
  "languageIds": (string | undefined)[],
  /**
   * Collection IDs to be included for detection
   * @key `iconify.includes`
   * @default `null`
   * @type `array`
   */
  "includes": ("academicons" | "akar-icons" | "ant-design" | "arcticons" | "basil" | "bi" | "bitcoin-icons" | "bpmn" | "brandico" | "bx" | "bxl" | "bxs" | "bytesize" | "carbon" | "cbi" | "charm" | "ci" | "cib" | "cif" | "cil" | "circle-flags" | "circum" | "clarity" | "codicon" | "covid" | "cryptocurrency" | "cryptocurrency-color" | "dashicons" | "devicon" | "devicon-plain" | "ei" | "el" | "emojione" | "emojione-monotone" | "emojione-v1" | "entypo" | "entypo-social" | "eos-icons" | "ep" | "et" | "eva" | "f7" | "fa" | "fa-brands" | "fa-regular" | "fa-solid" | "fa6-brands" | "fa6-regular" | "fa6-solid" | "fad" | "fe" | "feather" | "file-icons" | "flag" | "flagpack" | "flat-color-icons" | "flat-ui" | "flowbite" | "fluent" | "fluent-emoji" | "fluent-emoji-flat" | "fluent-emoji-high-contrast" | "fluent-mdl2" | "fontelico" | "fontisto" | "formkit" | "foundation" | "fxemoji" | "gala" | "game-icons" | "geo" | "gg" | "gis" | "gravity-ui" | "gridicons" | "grommet-icons" | "guidance" | "healthicons" | "heroicons" | "heroicons-outline" | "heroicons-solid" | "humbleicons" | "ic" | "icomoon-free" | "icon-park" | "icon-park-outline" | "icon-park-solid" | "icon-park-twotone" | "iconamoon" | "iconoir" | "icons8" | "il" | "ion" | "iwwa" | "jam" | "la" | "lets-icons" | "line-md" | "logos" | "ls" | "lucide" | "mage" | "majesticons" | "maki" | "map" | "marketeq" | "material-symbols" | "material-symbols-light" | "mdi" | "mdi-light" | "medical-icon" | "memory" | "meteocons" | "mi" | "mingcute" | "mono-icons" | "mynaui" | "nimbus" | "nonicons" | "noto" | "noto-v1" | "octicon" | "oi" | "ooui" | "openmoji" | "oui" | "pajamas" | "pepicons" | "pepicons-pencil" | "pepicons-pop" | "pepicons-print" | "ph" | "pixelarticons" | "prime" | "ps" | "quill" | "radix-icons" | "raphael" | "ri" | "si-glyph" | "simple-icons" | "simple-line-icons" | "skill-icons" | "solar" | "streamline" | "streamline-emojis" | "subway" | "svg-spinners" | "system-uicons" | "tabler" | "tdesign" | "teenyicons" | "token" | "token-branded" | "topcoat" | "twemoji" | "typcn" | "uil" | "uim" | "uis" | "uit" | "uiw" | "unjs" | "vaadin" | "vs" | "vscode-icons" | "websymbol" | "whh" | "wi" | "wpf" | "zmdi" | "zondicons" | undefined)[],
  /**
   * Collection IDs to be excluded for detection
   * @key `iconify.excludes`
   * @default `null`
   * @type `array`
   */
  "excludes": ("academicons" | "akar-icons" | "ant-design" | "arcticons" | "basil" | "bi" | "bitcoin-icons" | "bpmn" | "brandico" | "bx" | "bxl" | "bxs" | "bytesize" | "carbon" | "cbi" | "charm" | "ci" | "cib" | "cif" | "cil" | "circle-flags" | "circum" | "clarity" | "codicon" | "covid" | "cryptocurrency" | "cryptocurrency-color" | "dashicons" | "devicon" | "devicon-plain" | "ei" | "el" | "emojione" | "emojione-monotone" | "emojione-v1" | "entypo" | "entypo-social" | "eos-icons" | "ep" | "et" | "eva" | "f7" | "fa" | "fa-brands" | "fa-regular" | "fa-solid" | "fa6-brands" | "fa6-regular" | "fa6-solid" | "fad" | "fe" | "feather" | "file-icons" | "flag" | "flagpack" | "flat-color-icons" | "flat-ui" | "flowbite" | "fluent" | "fluent-emoji" | "fluent-emoji-flat" | "fluent-emoji-high-contrast" | "fluent-mdl2" | "fontelico" | "fontisto" | "formkit" | "foundation" | "fxemoji" | "gala" | "game-icons" | "geo" | "gg" | "gis" | "gravity-ui" | "gridicons" | "grommet-icons" | "guidance" | "healthicons" | "heroicons" | "heroicons-outline" | "heroicons-solid" | "humbleicons" | "ic" | "icomoon-free" | "icon-park" | "icon-park-outline" | "icon-park-solid" | "icon-park-twotone" | "iconamoon" | "iconoir" | "icons8" | "il" | "ion" | "iwwa" | "jam" | "la" | "lets-icons" | "line-md" | "logos" | "ls" | "lucide" | "mage" | "majesticons" | "maki" | "map" | "marketeq" | "material-symbols" | "material-symbols-light" | "mdi" | "mdi-light" | "medical-icon" | "memory" | "meteocons" | "mi" | "mingcute" | "mono-icons" | "mynaui" | "nimbus" | "nonicons" | "noto" | "noto-v1" | "octicon" | "oi" | "ooui" | "openmoji" | "oui" | "pajamas" | "pepicons" | "pepicons-pencil" | "pepicons-pop" | "pepicons-print" | "ph" | "pixelarticons" | "prime" | "ps" | "quill" | "radix-icons" | "raphael" | "ri" | "si-glyph" | "simple-icons" | "simple-line-icons" | "skill-icons" | "solar" | "streamline" | "streamline-emojis" | "subway" | "svg-spinners" | "system-uicons" | "tabler" | "tdesign" | "teenyicons" | "token" | "token-branded" | "topcoat" | "twemoji" | "typcn" | "uil" | "uim" | "uis" | "uit" | "uiw" | "unjs" | "vaadin" | "vs" | "vscode-icons" | "websymbol" | "whh" | "wi" | "wpf" | "zmdi" | "zondicons" | undefined)[],
  /**
   * CDN entry of iconify icon-sets
   * @key `iconify.cdnEntry`
   * @default `"https://icones.js.org/collections"`
   * @type `string`
   */
  "cdnEntry": string,
  /**
   * JSON paths for custom collection
   * @key `iconify.customCollectionJsonPaths`
   * @default `[]`
   * @type `array`
   */
  "customCollectionJsonPaths": (string | undefined)[],
  /**
   * Collection IDs Map for collection name alias, e.g. { 'mc': 'mingcute' }
   * @key `iconify.customCollectionIdsMap`
   * @default `{}`
   * @type `object`
   */
  "customCollectionIdsMap": Record<string, unknown>,
  /**
   * JSON paths for custom aliases
   * @key `iconify.customAliasesJsonPaths`
   * @default `[]`
   * @type `array`
   */
  "customAliasesJsonPaths": (string | undefined)[],
  /**
   * Only use the icon aliases. Non aliased icons will be ignored.
   * @key `iconify.customAliasesOnly`
   * @default `false`
   * @type `boolean`
   */
  "customAliasesOnly": boolean,
}

/**
 * Scoped defaults of `iconify`
 */
const _iconify = {
/**
 * scope: `iconify`
 */
  scope: "iconify",
/**
 * Keys' defaults of `iconify`
 */
  defaults: {
    "inplace": true,
    "annotations": true,
    "position": "before",
    "color": "auto",
    "delimiters": [":","--","-","/"],
    "prefixes": ["","i-","~icons/"],
    "suffixes": ["","i-"],
    "languageIds": ["javascript","javascriptreact","typescript","typescriptreact","vue","svelte","html","pug","json","yaml"],
    "includes": null,
    "excludes": null,
    "cdnEntry": "https://icones.js.org/collections",
    "customCollectionJsonPaths": [],
    "customCollectionIdsMap": {},
    "customAliasesJsonPaths": [],
    "customAliasesOnly": false,
  } satisfies Iconify,
}

/**
 * Reactive ConfigObject of `iconify`
 * @example
 * let configValue = iconifyConfigObject.inplace //get value 
 * iconifyConfigObject.inplace = true // set value
 * iconifyConfigObject.$update("inplace", !configValue, ConfigurationTarget.Workspace, true)
 */
export const iconifyConfigObject = defineConfigObject<Iconify>(
  _iconify.scope,
  _iconify.defaults
)
/**
 * Reactive ToConfigRefs of `iconify`
 * @example
 * let configValue:boolean =iconifyConfigs.inplace.value //get value 
 * iconifyConfigs.inplace.value = true // set value
 * //update value to ConfigurationTarget.Workspace/ConfigurationTarget.Global/ConfigurationTarget.WorkspaceFolder
 * iconifyConfigs.inplace.update(true, ConfigurationTarget.WorkspaceFolder, true)
 */
export const iconifyConfigs = defineConfigs<Iconify>(
  _iconify.scope,
  _iconify.defaults
)
