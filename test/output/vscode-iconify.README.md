# vscode-iconify

## Commands

| Command                      | Title                         |
| ---------------------------- | ----------------------------- |
| `iconify.toggle-annotations` | Iconify: Toggle Annotations   |
| `iconify.toggle-inplace`     | Iconify: Toggle In-place Mode |
| `iconify.clear-cache`        | Iconify: Clear icon cache     |

## Configuration Json

```json
{
  //{ 
    /**
     * Use icon graph to replace the icon name.
     * @key `iconify.inplace`
     * @default `true`
     * @type `boolean`
     */
    'iconify.inplace': boolean
    /**
     * Enabled Iconify inline annotations
     * @key `iconify.annotations`
     * @default `true`
     * @type `boolean`
     */
    'iconify.annotations': boolean
    /**
     * Position the icon before or after the icon name
     * @key `iconify.position`
     * @default `"before"`
     * @type `string`
     */
    'iconify.position': ("before" | "after")
    /**
     * Icon color hex for inline displaying
     * @key `iconify.color`
     * @default `"auto"`
     * @type `string`
     */
    'iconify.color': string
    /**
     * Delimiters for separating between collection id and icon id
     * @key `iconify.delimiters`
     * @default `[":","--","-","/"]`
     * @type `array`
     */
    'iconify.delimiters': (string | undefined)[]
    /**
     * Prefixes for matching
     * @key `iconify.prefixes`
     * @default `["","i-","~icons/"]`
     * @type `array`
     */
    'iconify.prefixes': (string | undefined)[]
    /**
     * Suffixes for matching
     * @key `iconify.suffixes`
     * @default `["","i-"]`
     * @type `array`
     */
    'iconify.suffixes': (string | undefined)[]
    /**
     * Array of language IDs to enable annotations
     * @key `iconify.languageIds`
     * @default `["javascript","javascriptreact","typescript","typescriptreact","vue","svelte","html","pug","json","yaml","markdown","mdx"]`
     * @type `array`
     */
    'iconify.languageIds': (string | undefined)[]
    /**
     * Collection IDs to be included for detection
     * @key `iconify.includes`
     * @default `null`
     * @type `array`
     */
    'iconify.includes': (("academicons" | "akar-icons" | "ant-design" | "arcticons" | "basil" | "bi" | "bitcoin-icons" | "bpmn" | "brandico" | "bx" | "bxl" | "bxs" | "bytesize" | "carbon" | "catppuccin" | "cbi" | "charm" | "ci" | "cib" | "cif" | "cil" | "circle-flags" | "circum" | "clarity" | "codicon" | "covid" | "cryptocurrency" | "cryptocurrency-color" | "dashicons" | "devicon" | "devicon-plain" | "ei" | "el" | "emojione" | "emojione-monotone" | "emojione-v1" | "entypo" | "entypo-social" | "eos-icons" | "ep" | "et" | "eva" | "f7" | "fa" | "fa-brands" | "fa-regular" | "fa-solid" | "fa6-brands" | "fa6-regular" | "fa6-solid" | "fad" | "fe" | "feather" | "file-icons" | "flag" | "flagpack" | "flat-color-icons" | "flat-ui" | "flowbite" | "fluent" | "fluent-emoji" | "fluent-emoji-flat" | "fluent-emoji-high-contrast" | "fluent-mdl2" | "fontelico" | "fontisto" | "formkit" | "foundation" | "fxemoji" | "gala" | "game-icons" | "geo" | "gg" | "gis" | "gravity-ui" | "gridicons" | "grommet-icons" | "guidance" | "healthicons" | "heroicons" | "heroicons-outline" | "heroicons-solid" | "hugeicons" | "humbleicons" | "ic" | "icomoon-free" | "icon-park" | "icon-park-outline" | "icon-park-solid" | "icon-park-twotone" | "iconamoon" | "iconoir" | "icons8" | "il" | "ion" | "iwwa" | "jam" | "la" | "lets-icons" | "line-md" | "logos" | "ls" | "lucide" | "mage" | "majesticons" | "maki" | "map" | "marketeq" | "material-symbols" | "material-symbols-light" | "mdi" | "mdi-light" | "medical-icon" | "memory" | "meteocons" | "mi" | "mingcute" | "mono-icons" | "mynaui" | "nimbus" | "nonicons" | "noto" | "noto-v1" | "octicon" | "oi" | "ooui" | "openmoji" | "oui" | "pajamas" | "pepicons" | "pepicons-pencil" | "pepicons-pop" | "pepicons-print" | "ph" | "pixelarticons" | "prime" | "ps" | "quill" | "radix-icons" | "raphael" | "ri" | "rivet-icons" | "si-glyph" | "simple-icons" | "simple-line-icons" | "skill-icons" | "solar" | "streamline" | "streamline-emojis" | "subway" | "svg-spinners" | "system-uicons" | "tabler" | "tdesign" | "teenyicons" | "token" | "token-branded" | "topcoat" | "twemoji" | "typcn" | "uil" | "uim" | "uis" | "uit" | "uiw" | "unjs" | "vaadin" | "vs" | "vscode-icons" | "websymbol" | "weui" | "whh" | "wi" | "wpf" | "zmdi" | "zondicons" | undefined)[] | null)
    /**
     * Collection IDs to be excluded for detection
     * @key `iconify.excludes`
     * @default `null`
     * @type `array`
     */
    'iconify.excludes': (("academicons" | "akar-icons" | "ant-design" | "arcticons" | "basil" | "bi" | "bitcoin-icons" | "bpmn" | "brandico" | "bx" | "bxl" | "bxs" | "bytesize" | "carbon" | "catppuccin" | "cbi" | "charm" | "ci" | "cib" | "cif" | "cil" | "circle-flags" | "circum" | "clarity" | "codicon" | "covid" | "cryptocurrency" | "cryptocurrency-color" | "dashicons" | "devicon" | "devicon-plain" | "ei" | "el" | "emojione" | "emojione-monotone" | "emojione-v1" | "entypo" | "entypo-social" | "eos-icons" | "ep" | "et" | "eva" | "f7" | "fa" | "fa-brands" | "fa-regular" | "fa-solid" | "fa6-brands" | "fa6-regular" | "fa6-solid" | "fad" | "fe" | "feather" | "file-icons" | "flag" | "flagpack" | "flat-color-icons" | "flat-ui" | "flowbite" | "fluent" | "fluent-emoji" | "fluent-emoji-flat" | "fluent-emoji-high-contrast" | "fluent-mdl2" | "fontelico" | "fontisto" | "formkit" | "foundation" | "fxemoji" | "gala" | "game-icons" | "geo" | "gg" | "gis" | "gravity-ui" | "gridicons" | "grommet-icons" | "guidance" | "healthicons" | "heroicons" | "heroicons-outline" | "heroicons-solid" | "hugeicons" | "humbleicons" | "ic" | "icomoon-free" | "icon-park" | "icon-park-outline" | "icon-park-solid" | "icon-park-twotone" | "iconamoon" | "iconoir" | "icons8" | "il" | "ion" | "iwwa" | "jam" | "la" | "lets-icons" | "line-md" | "logos" | "ls" | "lucide" | "mage" | "majesticons" | "maki" | "map" | "marketeq" | "material-symbols" | "material-symbols-light" | "mdi" | "mdi-light" | "medical-icon" | "memory" | "meteocons" | "mi" | "mingcute" | "mono-icons" | "mynaui" | "nimbus" | "nonicons" | "noto" | "noto-v1" | "octicon" | "oi" | "ooui" | "openmoji" | "oui" | "pajamas" | "pepicons" | "pepicons-pencil" | "pepicons-pop" | "pepicons-print" | "ph" | "pixelarticons" | "prime" | "ps" | "quill" | "radix-icons" | "raphael" | "ri" | "rivet-icons" | "si-glyph" | "simple-icons" | "simple-line-icons" | "skill-icons" | "solar" | "streamline" | "streamline-emojis" | "subway" | "svg-spinners" | "system-uicons" | "tabler" | "tdesign" | "teenyicons" | "token" | "token-branded" | "topcoat" | "twemoji" | "typcn" | "uil" | "uim" | "uis" | "uit" | "uiw" | "unjs" | "vaadin" | "vs" | "vscode-icons" | "websymbol" | "weui" | "whh" | "wi" | "wpf" | "zmdi" | "zondicons" | undefined)[] | null)
    /**
     * CDN entry of iconify icon-sets
     * @key `iconify.cdnEntry`
     * @default `"https://icones.js.org/collections"`
     * @type `string`
     */
    'iconify.cdnEntry': string
    /**
     * JSON paths for custom collection
     * @key `iconify.customCollectionJsonPaths`
     * @default `[]`
     * @type `array`
     */
    'iconify.customCollectionJsonPaths': (string | undefined)[]
    /**
     * Collection IDs Map for collection name alias, e.g. { 'mc': 'mingcute' }
     * @key `iconify.customCollectionIdsMap`
     * @default `{}`
     * @type `object`
     */
    'iconify.customCollectionIdsMap': Record<string, unknown>
    /**
     * JSON paths for custom aliases
     * @key `iconify.customAliasesJsonPaths`
     * @default `[]`
     * @type `array`
     */
    'iconify.customAliasesJsonPaths': (string | undefined)[]
    /**
     * Only use the icon aliases. Non aliased icons will be ignored.
     * @key `iconify.customAliasesOnly`
     * @default `false`
     * @type `boolean`
     */
    'iconify.customAliasesOnly': boolean }
  //
  "0": See package.json,

}
```

## Configuration

| Key | Description | Type     | Default          |
| --- | ----------- | -------- | ---------------- |
| `0` |             | `object` | See package.json |