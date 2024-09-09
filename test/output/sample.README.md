# sample

## Commands

| Command                     | Title                        |
| --------------------------- | ---------------------------- |
| `sample.toggle-annotations` | sample: Toggle Annotations   |
| `sample.toggle-inplace`     | sample: Toggle In-place Mode |
| `sample.clear-cache`        | sample: Clear icon cache     |

## Configuration Json

```json
{
  //{ 
    /**
     * Use icon graph to replace the icon name.
     * @key `sample.inplace`
     * @default `true`
     * @type `boolean`
     */
    'sample.inplace': boolean
    /**
     * Enabled sample inline annotations
     * @key `sample.annotations`
     * @default `true`
     * @type `boolean`
     */
    'sample.annotations': boolean
    /**
     * Position the icon before or after the icon name
     * @key `sample.position`
     * @default `"before"`
     * @type `string`
     */
    'sample.position': ("before" | "after")
    /**
     * Icon color hex for inline displaying
     * @key `sample.color`
     * @default `"auto"`
     * @type `string`
     */
    'sample.color': string
    /**
     * Delimiters for separating between collection id and icon id
     * @key `sample.delimiters`
     * @default `[":","--","-","/"]`
     * @type `array`
     */
    'sample.delimiters': (string | undefined)[]
    /**
     * Prefixes for matching
     * @key `sample.prefixes`
     * @default `["","i-","~icons/"]`
     * @type `array`
     */
    'sample.prefixes': (string | undefined)[]
    /**
     * Suffixes for matching
     * @key `sample.suffixes`
     * @default `["","i-"]`
     * @type `array`
     */
    'sample.suffixes': (string | undefined)[]
    /**
     * Array of language IDs to enable annotations
     * @key `sample.languageIds`
     * @default `["javascript","javascriptreact","typescript","typescriptreact","vue","svelte","html","pug","json","yaml"]`
     * @type `array`
     */
    'sample.languageIds': (string | undefined)[]
    /**
     * Collection IDs to be included for detection
     * @key `sample.includes`
     * @default `null`
     * @type `array`
     */
    'sample.includes': (("academicons" | "akar-icons" | "ant-design" | "arcticons" | "basil" | "bi" | "bitcoin-icons" | "bpmn" | "brandico" | "bx" | "bxl" | "bxs" | "bytesize" | "carbon" | "cbi" | "charm" | "ci" | "cib" | "cif" | "cil" | "circle-flags" | "circum" | "clarity" | "codicon" | "covid" | "cryptocurrency" | "cryptocurrency-color" | "dashicons" | "devicon" | "devicon-plain" | "ei" | "el" | "emojione" | "emojione-monotone" | "emojione-v1" | "entypo" | "entypo-social" | "eos-icons" | "ep" | "et" | "eva" | "f7" | "fa" | "fa-brands" | "fa-regular" | "fa-solid" | "fa6-brands" | "fa6-regular" | "fa6-solid" | "fad" | "fe" | "feather" | "file-icons" | "flag" | "flagpack" | "flat-color-icons" | "flat-ui" | "flowbite" | "fluent" | "fluent-emoji" | "fluent-emoji-flat" | "fluent-emoji-high-contrast" | "fluent-mdl2" | "fontelico" | "fontisto" | "formkit" | "foundation" | "fxemoji" | "gala" | "game-icons" | "geo" | "gg" | "gis" | "gravity-ui" | "gridicons" | "grommet-icons" | "guidance" | "healthicons" | "heroicons" | "heroicons-outline" | "heroicons-solid" | "humbleicons" | "ic" | "icomoon-free" | "icon-park" | "icon-park-outline" | "icon-park-solid" | "icon-park-twotone" | "iconamoon" | "iconoir" | "icons8" | "il" | "ion" | "iwwa" | "jam" | "la" | "lets-icons" | "line-md" | "logos" | "ls" | "lucide" | "mage" | "majesticons" | "maki" | "map" | "marketeq" | "material-symbols" | "material-symbols-light" | "mdi" | "mdi-light" | "medical-icon" | "memory" | "meteocons" | "mi" | "mingcute" | "mono-icons" | "mynaui" | "nimbus" | "nonicons" | "noto" | "noto-v1" | "octicon" | "oi" | "ooui" | "openmoji" | "oui" | "pajamas" | "pepicons" | "pepicons-pencil" | "pepicons-pop" | "pepicons-print" | "ph" | "pixelarticons" | "prime" | "ps" | "quill" | "radix-icons" | "raphael" | "ri" | "si-glyph" | "simple-icons" | "simple-line-icons" | "skill-icons" | "solar" | "streamline" | "streamline-emojis" | "subway" | "svg-spinners" | "system-uicons" | "tabler" | "tdesign" | "teenyicons" | "token" | "token-branded" | "topcoat" | "twemoji" | "typcn" | "uil" | "uim" | "uis" | "uit" | "uiw" | "unjs" | "vaadin" | "vs" | "vscode-icons" | "websymbol" | "whh" | "wi" | "wpf" | "zmdi" | "zondicons" | undefined)[] | null)
    /**
     * Collection IDs to be excluded for detection
     * @key `sample.excludes`
     * @default `null`
     * @type `array`
     */
    'sample.excludes': (("academicons" | "akar-icons" | "ant-design" | "arcticons" | "basil" | "bi" | "bitcoin-icons" | "bpmn" | "brandico" | "bx" | "bxl" | "bxs" | "bytesize" | "carbon" | "cbi" | "charm" | "ci" | "cib" | "cif" | "cil" | "circle-flags" | "circum" | "clarity" | "codicon" | "covid" | "cryptocurrency" | "cryptocurrency-color" | "dashicons" | "devicon" | "devicon-plain" | "ei" | "el" | "emojione" | "emojione-monotone" | "emojione-v1" | "entypo" | "entypo-social" | "eos-icons" | "ep" | "et" | "eva" | "f7" | "fa" | "fa-brands" | "fa-regular" | "fa-solid" | "fa6-brands" | "fa6-regular" | "fa6-solid" | "fad" | "fe" | "feather" | "file-icons" | "flag" | "flagpack" | "flat-color-icons" | "flat-ui" | "flowbite" | "fluent" | "fluent-emoji" | "fluent-emoji-flat" | "fluent-emoji-high-contrast" | "fluent-mdl2" | "fontelico" | "fontisto" | "formkit" | "foundation" | "fxemoji" | "gala" | "game-icons" | "geo" | "gg" | "gis" | "gravity-ui" | "gridicons" | "grommet-icons" | "guidance" | "healthicons" | "heroicons" | "heroicons-outline" | "heroicons-solid" | "humbleicons" | "ic" | "icomoon-free" | "icon-park" | "icon-park-outline" | "icon-park-solid" | "icon-park-twotone" | "iconamoon" | "iconoir" | "icons8" | "il" | "ion" | "iwwa" | "jam" | "la" | "lets-icons" | "line-md" | "logos" | "ls" | "lucide" | "mage" | "majesticons" | "maki" | "map" | "marketeq" | "material-symbols" | "material-symbols-light" | "mdi" | "mdi-light" | "medical-icon" | "memory" | "meteocons" | "mi" | "mingcute" | "mono-icons" | "mynaui" | "nimbus" | "nonicons" | "noto" | "noto-v1" | "octicon" | "oi" | "ooui" | "openmoji" | "oui" | "pajamas" | "pepicons" | "pepicons-pencil" | "pepicons-pop" | "pepicons-print" | "ph" | "pixelarticons" | "prime" | "ps" | "quill" | "radix-icons" | "raphael" | "ri" | "si-glyph" | "simple-icons" | "simple-line-icons" | "skill-icons" | "solar" | "streamline" | "streamline-emojis" | "subway" | "svg-spinners" | "system-uicons" | "tabler" | "tdesign" | "teenyicons" | "token" | "token-branded" | "topcoat" | "twemoji" | "typcn" | "uil" | "uim" | "uis" | "uit" | "uiw" | "unjs" | "vaadin" | "vs" | "vscode-icons" | "websymbol" | "whh" | "wi" | "wpf" | "zmdi" | "zondicons" | undefined)[] | null)
    /**
     * CDN entry of sample icon-sets
     * @key `sample.cdnEntry`
     * @default `"https://icones.js.org/collections"`
     * @type `string`
     */
    'sample.cdnEntry': string
    /**
     * JSON paths for custom collection
     * @key `sample.customCollectionJsonPaths`
     * @default `[]`
     * @type `array`
     */
    'sample.customCollectionJsonPaths': (string | undefined)[]
    /**
     * Collection IDs Map for collection name alias, e.g. { 'mc': 'mingcute' }
     * @key `sample.customCollectionIdsMap`
     * @default `{}`
     * @type `object`
     */
    'sample.customCollectionIdsMap': Record<string, unknown>
    /**
     * JSON paths for custom aliases
     * @key `sample.customAliasesJsonPaths`
     * @default `[]`
     * @type `array`
     */
    'sample.customAliasesJsonPaths': (string | undefined)[]
    /**
     * Only use the icon aliases. Non aliased icons will be ignored.
     * @key `sample.customAliasesOnly`
     * @default `false`
     * @type `boolean`
     */
    'sample.customAliasesOnly': boolean }
  //
  "0": See package.json,

}
```

## Configuration

| Key | Description | Type     | Default          |
| --- | ----------- | -------- | ---------------- |
| `0` |             | `object` | See package.json |