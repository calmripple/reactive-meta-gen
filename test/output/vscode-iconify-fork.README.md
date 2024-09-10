# vscode-iconify-fork

## Commands

| Command                      | Title                         |
| ---------------------------- | ----------------------------- |
| `iconify.toggle-annotations` | Iconify: Toggle Annotations   |
| `iconify.toggle-inplace`     | Iconify: Toggle In-place Mode |
| `iconify.clear-cache`        | Iconify: Clear icon cache     |

## Configuration Json

```json
{
  //`boolean`, Use icon graph to replace the icon name. 
  "iconify.inplace": true,

  //`boolean`, Enabled Iconify inline annotations 
  "iconify.annotations": true,

  //("before" | "after")
  //Position the icon before or after the icon name
  "iconify.position": "before",

  //`string`, Icon color hex for inline displaying 
  "iconify.color": "auto",

  //`string[]`, Delimiters for separating between collection id and icon id 
  "iconify.delimiters": [":","--","-","/"],

  //`string[]`, Prefixes for matching 
  "iconify.prefixes": ["","i-","~icons/"],

  //`string[]`, Suffixes for matching 
  "iconify.suffixes": ["","i-"],

  //`string[]`, Array of language IDs to enable annotations 
  "iconify.languageIds": ["javascript","javascriptreact","typescript","typescriptreact","vue","svelte","html","pug","json","yaml"],

  //(("academicons" | "akar-icons" | "ant-design" | "arcticons" | "basil" | "bi" | "bitcoin-icons" | "bpmn" | "brandico" | "bx" | "bxl" | "bxs" | "bytesize" | "carbon" | "cbi" | "charm" | "ci" | "cib" | "cif" | "cil" | "circle-flags" | "circum" | "clarity" | "codicon" | "covid" | "cryptocurrency" | "cryptocurrency-color" | "dashicons" | "devicon" | "devicon-plain" | "ei" | "el" | "emojione" | "emojione-monotone" | "emojione-v1" | "entypo" | "entypo-social" | "eos-icons" | "ep" | "et" | "eva" | "f7" | "fa" | "fa-brands" | "fa-regular" | "fa-solid" | "fa6-brands" | "fa6-regular" | "fa6-solid" | "fad" | "fe" | "feather" | "file-icons" | "flag" | "flagpack" | "flat-color-icons" | "flat-ui" | "flowbite" | "fluent" | "fluent-emoji" | "fluent-emoji-flat" | "fluent-emoji-high-contrast" | "fluent-mdl2" | "fontelico" | "fontisto" | "formkit" | "foundation" | "fxemoji" | "gala" | "game-icons" | "geo" | "gg" | "gis" | "gravity-ui" | "gridicons" | "grommet-icons" | "guidance" | "healthicons" | "heroicons" | "heroicons-outline" | "heroicons-solid" | "humbleicons" | "ic" | "icomoon-free" | "icon-park" | "icon-park-outline" | "icon-park-solid" | "icon-park-twotone" | "iconamoon" | "iconoir" | "icons8" | "il" | "ion" | "iwwa" | "jam" | "la" | "lets-icons" | "line-md" | "logos" | "ls" | "lucide" | "mage" | "majesticons" | "maki" | "map" | "marketeq" | "material-symbols" | "material-symbols-light" | "mdi" | "mdi-light" | "medical-icon" | "memory" | "meteocons" | "mi" | "mingcute" | "mono-icons" | "mynaui" | "nimbus" | "nonicons" | "noto" | "noto-v1" | "octicon" | "oi" | "ooui" | "openmoji" | "oui" | "pajamas" | "pepicons" | "pepicons-pencil" | "pepicons-pop" | "pepicons-print" | "ph" | "pixelarticons" | "prime" | "ps" | "quill" | "radix-icons" | "raphael" | "ri" | "si-glyph" | "simple-icons" | "simple-line-icons" | "skill-icons" | "solar" | "streamline" | "streamline-emojis" | "subway" | "svg-spinners" | "system-uicons" | "tabler" | "tdesign" | "teenyicons" | "token" | "token-branded" | "topcoat" | "twemoji" | "typcn" | "uil" | "uim" | "uis" | "uit" | "uiw" | "unjs" | "vaadin" | "vs" | "vscode-icons" | "websymbol" | "whh" | "wi" | "wpf" | "zmdi" | "zondicons")[] | null)
  //Collection IDs to be included for detection
  "iconify.includes": null,

  //(("academicons" | "akar-icons" | "ant-design" | "arcticons" | "basil" | "bi" | "bitcoin-icons" | "bpmn" | "brandico" | "bx" | "bxl" | "bxs" | "bytesize" | "carbon" | "cbi" | "charm" | "ci" | "cib" | "cif" | "cil" | "circle-flags" | "circum" | "clarity" | "codicon" | "covid" | "cryptocurrency" | "cryptocurrency-color" | "dashicons" | "devicon" | "devicon-plain" | "ei" | "el" | "emojione" | "emojione-monotone" | "emojione-v1" | "entypo" | "entypo-social" | "eos-icons" | "ep" | "et" | "eva" | "f7" | "fa" | "fa-brands" | "fa-regular" | "fa-solid" | "fa6-brands" | "fa6-regular" | "fa6-solid" | "fad" | "fe" | "feather" | "file-icons" | "flag" | "flagpack" | "flat-color-icons" | "flat-ui" | "flowbite" | "fluent" | "fluent-emoji" | "fluent-emoji-flat" | "fluent-emoji-high-contrast" | "fluent-mdl2" | "fontelico" | "fontisto" | "formkit" | "foundation" | "fxemoji" | "gala" | "game-icons" | "geo" | "gg" | "gis" | "gravity-ui" | "gridicons" | "grommet-icons" | "guidance" | "healthicons" | "heroicons" | "heroicons-outline" | "heroicons-solid" | "humbleicons" | "ic" | "icomoon-free" | "icon-park" | "icon-park-outline" | "icon-park-solid" | "icon-park-twotone" | "iconamoon" | "iconoir" | "icons8" | "il" | "ion" | "iwwa" | "jam" | "la" | "lets-icons" | "line-md" | "logos" | "ls" | "lucide" | "mage" | "majesticons" | "maki" | "map" | "marketeq" | "material-symbols" | "material-symbols-light" | "mdi" | "mdi-light" | "medical-icon" | "memory" | "meteocons" | "mi" | "mingcute" | "mono-icons" | "mynaui" | "nimbus" | "nonicons" | "noto" | "noto-v1" | "octicon" | "oi" | "ooui" | "openmoji" | "oui" | "pajamas" | "pepicons" | "pepicons-pencil" | "pepicons-pop" | "pepicons-print" | "ph" | "pixelarticons" | "prime" | "ps" | "quill" | "radix-icons" | "raphael" | "ri" | "si-glyph" | "simple-icons" | "simple-line-icons" | "skill-icons" | "solar" | "streamline" | "streamline-emojis" | "subway" | "svg-spinners" | "system-uicons" | "tabler" | "tdesign" | "teenyicons" | "token" | "token-branded" | "topcoat" | "twemoji" | "typcn" | "uil" | "uim" | "uis" | "uit" | "uiw" | "unjs" | "vaadin" | "vs" | "vscode-icons" | "websymbol" | "whh" | "wi" | "wpf" | "zmdi" | "zondicons")[] | null)
  //Collection IDs to be excluded for detection
  "iconify.excludes": null,

  //`string`, CDN entry of iconify icon-sets 
  "iconify.cdnEntry": "https://icones.js.org/collections",

  //`string[]`, JSON paths for custom collection 
  "iconify.customCollectionJsonPaths": [],

  //Record<string, unknown>
  //Collection IDs Map for collection name alias, e.g. { 'mc': 'mingcute' }
  "iconify.customCollectionIdsMap": {},

  //`string[]`, JSON paths for custom aliases 
  "iconify.customAliasesJsonPaths": [],

  //`boolean`, Only use the icon aliases. Non aliased icons will be ignored. 
  "iconify.customAliasesOnly": false,

}
```

## Configuration

| Key                                 | Description                                                             | Type      | Default                                                                                                     |
| ----------------------------------- | ----------------------------------------------------------------------- | --------- | ----------------------------------------------------------------------------------------------------------- |
| `iconify.inplace`                   | Use icon graph to replace the icon name.                                | `boolean` | `true`                                                                                                      |
| `iconify.annotations`               | Enabled Iconify inline annotations                                      | `boolean` | `true`                                                                                                      |
| `iconify.position`                  | Position the icon before or after the icon name                         | `string`  | `"before"`                                                                                                  |
| `iconify.color`                     | Icon color hex for inline displaying                                    | `string`  | `"auto"`                                                                                                    |
| `iconify.delimiters`                | Delimiters for separating between collection id and icon id             | `array`   | `[":","--","-","/"]`                                                                                        |
| `iconify.prefixes`                  | Prefixes for matching                                                   | `array`   | `["","i-","~icons/"]`                                                                                       |
| `iconify.suffixes`                  | Suffixes for matching                                                   | `array`   | `["","i-"]`                                                                                                 |
| `iconify.languageIds`               | Array of language IDs to enable annotations                             | `array`   | `["javascript","javascriptreact","typescript","typescriptreact","vue","svelte","html","pug","json","yaml"]` |
| `iconify.includes`                  | Collection IDs to be included for detection                             | `array`   | `null`                                                                                                      |
| `iconify.excludes`                  | Collection IDs to be excluded for detection                             | `array`   | `null`                                                                                                      |
| `iconify.cdnEntry`                  | CDN entry of iconify icon-sets                                          | `string`  | `"https://icones.js.org/collections"`                                                                       |
| `iconify.customCollectionJsonPaths` | JSON paths for custom collection                                        | `array`   | `[]`                                                                                                        |
| `iconify.customCollectionIdsMap`    | Collection IDs Map for collection name alias, e.g. { 'mc': 'mingcute' } | `object`  | `{}`                                                                                                        |
| `iconify.customAliasesJsonPaths`    | JSON paths for custom aliases                                           | `array`   | `[]`                                                                                                        |
| `iconify.customAliasesOnly`         | Only use the icon aliases. Non aliased icons will be ignored.           | `boolean` | `false`                                                                                                     |