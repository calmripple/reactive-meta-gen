/* eslint-disable */
// This file is generated by `reactive-meta-gen`. Do not modify manually.
// @see https://github.com/calmripple/reactive-meta-gen

// Meta info

import { defineConfigObject, defineConfigs, useCommand } from 'reactive-vscode'

export const publisher = "antfu"
export const name = "iconify"
export const version = "0.9.3"
export const displayName = "Iconify IntelliSense"
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
 * Commands map registed by `antfu.iconify`
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
 * Toggle Annotations
 * @value `iconify.toggle-annotations`
 */
export function useCommandToggleAnnotations(callback: (...args: any[]) => any) {
  useCommand(commands.toggleAnnotations, callback)
}
/**
 * Toggle In-place Mode
 * @value `iconify.toggle-inplace`
 */
export function useCommandToggleInplace(callback: (...args: any[]) => any) {
  useCommand(commands.toggleInplace, callback)
}
/**
 * Clear icon cache
 * @value `iconify.clear-cache`
 */
export function useCommandClearCache(callback: (...args: any[]) => any) {
  useCommand(commands.clearCache, callback)
}


/**
 * Config keys of `iconify`
 */
export interface Iconify {
  /**
   * Use icon graph to replace the icon name.
   * @default true
   */
  "inplace": boolean,
  /**
   * Enabled Iconify inline annotations
   * @default true
   */
  "annotations": boolean,
  /**
   * Position the icon before or after the icon name
   * @default "before"
   */
  "position": ("before" | "after"),
  /**
   * Icon color hex for inline displaying
   * @default "auto"
   */
  "color": string,
  /**
   * Delimiters for separating between collection id and icon id
   * @default [":","--","-","/"]
   */
  "delimiters": string[],
  /**
   * Prefixes for matching
   * @default ["","i-","~icons/"]
   */
  "prefixes": string[],
  /**
   * Suffixes for matching
   * @default ["","i-"]
   */
  "suffixes": string[],
  /**
   * Array of language IDs to enable annotations
   * @default ["javascript","javascriptreact","typescript","typescriptreact","vue","svelte","html","pug","json","yaml","markdown","mdx"]
   */
  "languageIds": string[],
  /**
   * Collection IDs to be included for detection
   * @default null
   */
  "includes": (("academicons" | "akar-icons" | "ant-design" | "arcticons" | "basil" | "bi" | "bitcoin-icons" | "bpmn" | "brandico" | "bx" | "bxl" | "bxs" | "bytesize" | "carbon" | "catppuccin" | "cbi" | "charm" | "ci" | "cib" | "cif" | "cil" | "circle-flags" | "circum" | "clarity" | "codicon" | "covid" | "cryptocurrency" | "cryptocurrency-color" | "dashicons" | "devicon" | "devicon-plain" | "ei" | "el" | "emojione" | "emojione-monotone" | "emojione-v1" | "entypo" | "entypo-social" | "eos-icons" | "ep" | "et" | "eva" | "f7" | "fa" | "fa-brands" | "fa-regular" | "fa-solid" | "fa6-brands" | "fa6-regular" | "fa6-solid" | "fad" | "fe" | "feather" | "file-icons" | "flag" | "flagpack" | "flat-color-icons" | "flat-ui" | "flowbite" | "fluent" | "fluent-emoji" | "fluent-emoji-flat" | "fluent-emoji-high-contrast" | "fluent-mdl2" | "fontelico" | "fontisto" | "formkit" | "foundation" | "fxemoji" | "gala" | "game-icons" | "geo" | "gg" | "gis" | "gravity-ui" | "gridicons" | "grommet-icons" | "guidance" | "healthicons" | "heroicons" | "heroicons-outline" | "heroicons-solid" | "hugeicons" | "humbleicons" | "ic" | "icomoon-free" | "icon-park" | "icon-park-outline" | "icon-park-solid" | "icon-park-twotone" | "iconamoon" | "iconoir" | "icons8" | "il" | "ion" | "iwwa" | "jam" | "la" | "lets-icons" | "line-md" | "logos" | "ls" | "lucide" | "mage" | "majesticons" | "maki" | "map" | "marketeq" | "material-symbols" | "material-symbols-light" | "mdi" | "mdi-light" | "medical-icon" | "memory" | "meteocons" | "mi" | "mingcute" | "mono-icons" | "mynaui" | "nimbus" | "nonicons" | "noto" | "noto-v1" | "octicon" | "oi" | "ooui" | "openmoji" | "oui" | "pajamas" | "pepicons" | "pepicons-pencil" | "pepicons-pop" | "pepicons-print" | "ph" | "pixelarticons" | "prime" | "ps" | "quill" | "radix-icons" | "raphael" | "ri" | "rivet-icons" | "si-glyph" | "simple-icons" | "simple-line-icons" | "skill-icons" | "solar" | "streamline" | "streamline-emojis" | "subway" | "svg-spinners" | "system-uicons" | "tabler" | "tdesign" | "teenyicons" | "token" | "token-branded" | "topcoat" | "twemoji" | "typcn" | "uil" | "uim" | "uis" | "uit" | "uiw" | "unjs" | "vaadin" | "vs" | "vscode-icons" | "websymbol" | "weui" | "whh" | "wi" | "wpf" | "zmdi" | "zondicons")[] | null),
  /**
   * Collection IDs to be excluded for detection
   * @default null
   */
  "excludes": (("academicons" | "akar-icons" | "ant-design" | "arcticons" | "basil" | "bi" | "bitcoin-icons" | "bpmn" | "brandico" | "bx" | "bxl" | "bxs" | "bytesize" | "carbon" | "catppuccin" | "cbi" | "charm" | "ci" | "cib" | "cif" | "cil" | "circle-flags" | "circum" | "clarity" | "codicon" | "covid" | "cryptocurrency" | "cryptocurrency-color" | "dashicons" | "devicon" | "devicon-plain" | "ei" | "el" | "emojione" | "emojione-monotone" | "emojione-v1" | "entypo" | "entypo-social" | "eos-icons" | "ep" | "et" | "eva" | "f7" | "fa" | "fa-brands" | "fa-regular" | "fa-solid" | "fa6-brands" | "fa6-regular" | "fa6-solid" | "fad" | "fe" | "feather" | "file-icons" | "flag" | "flagpack" | "flat-color-icons" | "flat-ui" | "flowbite" | "fluent" | "fluent-emoji" | "fluent-emoji-flat" | "fluent-emoji-high-contrast" | "fluent-mdl2" | "fontelico" | "fontisto" | "formkit" | "foundation" | "fxemoji" | "gala" | "game-icons" | "geo" | "gg" | "gis" | "gravity-ui" | "gridicons" | "grommet-icons" | "guidance" | "healthicons" | "heroicons" | "heroicons-outline" | "heroicons-solid" | "hugeicons" | "humbleicons" | "ic" | "icomoon-free" | "icon-park" | "icon-park-outline" | "icon-park-solid" | "icon-park-twotone" | "iconamoon" | "iconoir" | "icons8" | "il" | "ion" | "iwwa" | "jam" | "la" | "lets-icons" | "line-md" | "logos" | "ls" | "lucide" | "mage" | "majesticons" | "maki" | "map" | "marketeq" | "material-symbols" | "material-symbols-light" | "mdi" | "mdi-light" | "medical-icon" | "memory" | "meteocons" | "mi" | "mingcute" | "mono-icons" | "mynaui" | "nimbus" | "nonicons" | "noto" | "noto-v1" | "octicon" | "oi" | "ooui" | "openmoji" | "oui" | "pajamas" | "pepicons" | "pepicons-pencil" | "pepicons-pop" | "pepicons-print" | "ph" | "pixelarticons" | "prime" | "ps" | "quill" | "radix-icons" | "raphael" | "ri" | "rivet-icons" | "si-glyph" | "simple-icons" | "simple-line-icons" | "skill-icons" | "solar" | "streamline" | "streamline-emojis" | "subway" | "svg-spinners" | "system-uicons" | "tabler" | "tdesign" | "teenyicons" | "token" | "token-branded" | "topcoat" | "twemoji" | "typcn" | "uil" | "uim" | "uis" | "uit" | "uiw" | "unjs" | "vaadin" | "vs" | "vscode-icons" | "websymbol" | "weui" | "whh" | "wi" | "wpf" | "zmdi" | "zondicons")[] | null),
  /**
   * CDN entry of iconify icon-sets
   * @default "https://icones.js.org/collections"
   */
  "cdnEntry": string,
  /**
   * JSON paths for custom collection
   * @default []
   */
  "customCollectionJsonPaths": string[],
  /**
   * Collection IDs Map for collection name alias, e.g. { 'mc': 'mingcute' }
   * @default {}
   */
  "customCollectionIdsMap": Record<string, unknown>,
  /**
   * JSON paths for custom aliases
   * @default []
   */
  "customAliasesJsonPaths": string[],
  /**
   * Only use the icon aliases. Non aliased icons will be ignored.
   * @default false
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
    /**
     * Use icon graph to replace the icon name.
     */
    "inplace": true,
    /**
     * Enabled Iconify inline annotations
     */
    "annotations": true,
    /**
     * Position the icon before or after the icon name
     */
    "position": "before",
    /**
     * Icon color hex for inline displaying
     */
    "color": "auto",
    /**
     * Delimiters for separating between collection id and icon id
     */
    "delimiters": [":","--","-","/"],
    /**
     * Prefixes for matching
     */
    "prefixes": ["","i-","~icons/"],
    /**
     * Suffixes for matching
     */
    "suffixes": ["","i-"],
    /**
     * Array of language IDs to enable annotations
     */
    "languageIds": ["javascript","javascriptreact","typescript","typescriptreact","vue","svelte","html","pug","json","yaml","markdown","mdx"],
    /**
     * Collection IDs to be included for detection
     */
    "includes": null,
    /**
     * Collection IDs to be excluded for detection
     */
    "excludes": null,
    /**
     * CDN entry of iconify icon-sets
     */
    "cdnEntry": "https://icones.js.org/collections",
    /**
     * JSON paths for custom collection
     */
    "customCollectionJsonPaths": [],
    /**
     * Collection IDs Map for collection name alias, e.g. { 'mc': 'mingcute' }
     */
    "customCollectionIdsMap": {},
    /**
     * JSON paths for custom aliases
     */
    "customAliasesJsonPaths": [],
    /**
     * Only use the icon aliases. Non aliased icons will be ignored.
     */
    "customAliasesOnly": false,
  } satisfies Iconify,
}

/**
 * Reactive ConfigObject of `iconify`
 * @example
 * const configValue = useConfigObjectsIconify.inplace //get value 
 * useConfigObjectsIconify.inplace = true // set value
 * useConfigObjectsIconify.$update("inplace", !configValue, ConfigurationTarget.Workspace, true)
 */
export const useConfigObjectsIconify = defineConfigObject<Iconify>(
  _iconify.scope,
  _iconify.defaults
)
/**
 * Reactive ToConfigRefs of `iconify`
 * @example
 * let configValue:boolean =useConfigsIconifyConfigs.inplace.value //get value 
 * useConfigsIconify.inplace.value = true // set value
 * //update value to ConfigurationTarget.Workspace/ConfigurationTarget.Global/ConfigurationTarget.WorkspaceFolder
 * useConfigsIconify.inplace.update(true, ConfigurationTarget.WorkspaceFolder, true)
 */
export const useConfigsIconify = defineConfigs<Iconify>(
  _iconify.scope,
  _iconify.defaults
)
