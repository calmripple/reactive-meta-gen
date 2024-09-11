/* eslint-disable */
// This file is generated by `reactive-meta-gen`. Do not modify manually.
// @see https://github.com/calmripple/reactive-meta-gen

// Meta info

import { defineConfigObject, defineConfigs, useCommand } from 'reactive-vscode'

export const publisher = "calmripple"
export const name = "sample"
export const version = "0.8.1"
export const displayName = "sample IntelliSense"
export const description = "Intelligent sample previewing and searching for VS Code"
export const extensionId = `${publisher}.${name}`

/**
 * Type union of all commands
 */
export type CommandKey = 
  | "sample.toggle-annotations"
  | "sample.toggle-inplace"
  | "sample.clear-cache"

export function useCommandKey(commandFullKey: CommandKey, callback: (...args: any[]) => any): void {
  return useCommand(commandFullKey, callback)
}

/**
 * Toggle Annotations
 * @value `sample.toggle-annotations`
 */
export function useCommandToggleAnnotations(callback: (...args: any[]) => any) {
  return useCommandKey("sample.toggle-annotations", callback)
}

/**
 * Toggle In-place Mode
 * @value `sample.toggle-inplace`
 */
export function useCommandToggleInplace(callback: (...args: any[]) => any) {
  return useCommandKey("sample.toggle-inplace", callback)
}

/**
 * Clear icon cache
 * @value `sample.clear-cache`
 */
export function useCommandClearCache(callback: (...args: any[]) => any) {
  return useCommandKey("sample.clear-cache", callback)
}


/**
 * Section Type of `sample`
 */
export interface Sample {
  /**
   * Use icon graph to replace the icon name.
   */
  "inplace": boolean,
  /**
   * Enabled sample inline annotations
   */
  "annotations": boolean,
  /**
   * Position the icon before or after the icon name
   */
  "position": ("before" | "after"),
  /**
   * Icon color hex for inline displaying
   */
  "color": string,
  /**
   * Delimiters for separating between collection id and icon id
   */
  "delimiters": string[],
  /**
   * Prefixes for matching
   */
  "prefixes": string[],
  /**
   * Suffixes for matching
   */
  "suffixes": string[],
  /**
   * Array of language IDs to enable annotations
   */
  "languageIds": string[],
  /**
   * Collection IDs to be included for detection
   */
  "includes": (("academicons" | "akar-icons" | "ant-design" | "arcticons" | "basil" | "bi" | "bitcoin-icons" | "bpmn" | "brandico" | "bx" | "bxl" | "bxs" | "bytesize" | "carbon" | "cbi" | "charm" | "ci" | "cib" | "cif" | "cil" | "circle-flags" | "circum" | "clarity" | "codicon" | "covid" | "cryptocurrency" | "cryptocurrency-color" | "dashicons" | "devicon" | "devicon-plain" | "ei" | "el" | "emojione" | "emojione-monotone" | "emojione-v1" | "entypo" | "entypo-social" | "eos-icons" | "ep" | "et" | "eva" | "f7" | "fa" | "fa-brands" | "fa-regular" | "fa-solid" | "fa6-brands" | "fa6-regular" | "fa6-solid" | "fad" | "fe" | "feather" | "file-icons" | "flag" | "flagpack" | "flat-color-icons" | "flat-ui" | "flowbite" | "fluent" | "fluent-emoji" | "fluent-emoji-flat" | "fluent-emoji-high-contrast" | "fluent-mdl2" | "fontelico" | "fontisto" | "formkit" | "foundation" | "fxemoji" | "gala" | "game-icons" | "geo" | "gg" | "gis" | "gravity-ui" | "gridicons" | "grommet-icons" | "guidance" | "healthicons" | "heroicons" | "heroicons-outline" | "heroicons-solid" | "humbleicons" | "ic" | "icomoon-free" | "icon-park" | "icon-park-outline" | "icon-park-solid" | "icon-park-twotone" | "iconamoon" | "iconoir" | "icons8" | "il" | "ion" | "iwwa" | "jam" | "la" | "lets-icons" | "line-md" | "logos" | "ls" | "lucide" | "mage" | "majesticons" | "maki" | "map" | "marketeq" | "material-symbols" | "material-symbols-light" | "mdi" | "mdi-light" | "medical-icon" | "memory" | "meteocons" | "mi" | "mingcute" | "mono-icons" | "mynaui" | "nimbus" | "nonicons" | "noto" | "noto-v1" | "octicon" | "oi" | "ooui" | "openmoji" | "oui" | "pajamas" | "pepicons" | "pepicons-pencil" | "pepicons-pop" | "pepicons-print" | "ph" | "pixelarticons" | "prime" | "ps" | "quill" | "radix-icons" | "raphael" | "ri" | "si-glyph" | "simple-icons" | "simple-line-icons" | "skill-icons" | "solar" | "streamline" | "streamline-emojis" | "subway" | "svg-spinners" | "system-uicons" | "tabler" | "tdesign" | "teenyicons" | "token" | "token-branded" | "topcoat" | "twemoji" | "typcn" | "uil" | "uim" | "uis" | "uit" | "uiw" | "unjs" | "vaadin" | "vs" | "vscode-icons" | "websymbol" | "whh" | "wi" | "wpf" | "zmdi" | "zondicons")[] | null),
  /**
   * Collection IDs to be excluded for detection
   */
  "excludes": (("academicons" | "akar-icons" | "ant-design" | "arcticons" | "basil" | "bi" | "bitcoin-icons" | "bpmn" | "brandico" | "bx" | "bxl" | "bxs" | "bytesize" | "carbon" | "cbi" | "charm" | "ci" | "cib" | "cif" | "cil" | "circle-flags" | "circum" | "clarity" | "codicon" | "covid" | "cryptocurrency" | "cryptocurrency-color" | "dashicons" | "devicon" | "devicon-plain" | "ei" | "el" | "emojione" | "emojione-monotone" | "emojione-v1" | "entypo" | "entypo-social" | "eos-icons" | "ep" | "et" | "eva" | "f7" | "fa" | "fa-brands" | "fa-regular" | "fa-solid" | "fa6-brands" | "fa6-regular" | "fa6-solid" | "fad" | "fe" | "feather" | "file-icons" | "flag" | "flagpack" | "flat-color-icons" | "flat-ui" | "flowbite" | "fluent" | "fluent-emoji" | "fluent-emoji-flat" | "fluent-emoji-high-contrast" | "fluent-mdl2" | "fontelico" | "fontisto" | "formkit" | "foundation" | "fxemoji" | "gala" | "game-icons" | "geo" | "gg" | "gis" | "gravity-ui" | "gridicons" | "grommet-icons" | "guidance" | "healthicons" | "heroicons" | "heroicons-outline" | "heroicons-solid" | "humbleicons" | "ic" | "icomoon-free" | "icon-park" | "icon-park-outline" | "icon-park-solid" | "icon-park-twotone" | "iconamoon" | "iconoir" | "icons8" | "il" | "ion" | "iwwa" | "jam" | "la" | "lets-icons" | "line-md" | "logos" | "ls" | "lucide" | "mage" | "majesticons" | "maki" | "map" | "marketeq" | "material-symbols" | "material-symbols-light" | "mdi" | "mdi-light" | "medical-icon" | "memory" | "meteocons" | "mi" | "mingcute" | "mono-icons" | "mynaui" | "nimbus" | "nonicons" | "noto" | "noto-v1" | "octicon" | "oi" | "ooui" | "openmoji" | "oui" | "pajamas" | "pepicons" | "pepicons-pencil" | "pepicons-pop" | "pepicons-print" | "ph" | "pixelarticons" | "prime" | "ps" | "quill" | "radix-icons" | "raphael" | "ri" | "si-glyph" | "simple-icons" | "simple-line-icons" | "skill-icons" | "solar" | "streamline" | "streamline-emojis" | "subway" | "svg-spinners" | "system-uicons" | "tabler" | "tdesign" | "teenyicons" | "token" | "token-branded" | "topcoat" | "twemoji" | "typcn" | "uil" | "uim" | "uis" | "uit" | "uiw" | "unjs" | "vaadin" | "vs" | "vscode-icons" | "websymbol" | "whh" | "wi" | "wpf" | "zmdi" | "zondicons")[] | null),
  /**
   * CDN entry of sample icon-sets
   */
  "cdnEntry": string,
  /**
   * JSON paths for custom collection
   */
  "customCollectionJsonPaths": string[],
  /**
   * Collection IDs Map for collection name alias, e.g. { 'mc': 'mingcute' }
   */
  "customCollectionIdsMap": Record<string, unknown>,
  /**
   * JSON paths for custom aliases
   */
  "customAliasesJsonPaths": string[],
  /**
   * Only use the icon aliases. Non aliased icons will be ignored.
   */
  "customAliasesOnly": boolean,
}
const sampleConfig = {

  "sample": {
    /**
     * Use icon graph to replace the icon name.
     */
    "inplace": true,
    /**
     * Enabled sample inline annotations
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
    "languageIds": ["javascript","javascriptreact","typescript","typescriptreact","vue","svelte","html","pug","json","yaml"],
    /**
     * Collection IDs to be included for detection
     */
    "includes": null,
    /**
     * Collection IDs to be excluded for detection
     */
    "excludes": null,
    /**
     * CDN entry of sample icon-sets
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
  } satisfies Sample,

}
export type ConfigKey = "sample"

export function useConfig<K extends ConfigKey>(section: K) {
  return defineConfigs<typeof sampleConfig[K]>(section, sampleConfig[section])
}

export function useConfigObject<K extends ConfigKey>(section: K) {
  return defineConfigObject<typeof sampleConfig[K]>(section, sampleConfig[section])
}
    
/**
 * ConfigObject of `sample`
 * @example
 * const configValue = configObjectSample.inplace //get value 
 * configObjectSample.inplace = true // set value
 * configObjectSample.$update("inplace", !configValue, ConfigurationTarget.Workspace, true)
 */
export const configObjectSample = useConfigObject("sample")
/**
 * ToConfigRefs of `sample`
 * @example
 * const configValue:boolean =configSample.inplace.value //get value 
 * configSample.inplace.value = true // set value
 * //update value to ConfigurationTarget.Workspace/ConfigurationTarget.Global/ConfigurationTarget.WorkspaceFolder
 * configSample.inplace.update(true, ConfigurationTarget.WorkspaceFolder, true)
 */
export const configSample = useConfig("sample")
