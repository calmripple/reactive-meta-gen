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
  //`boolean`, Use icon graph to replace the icon name. 
  "sample.inplace": true,

  //`boolean`, Enabled sample inline annotations 
  "sample.annotations": true,

  //("before" | "after")
  //Position the icon before or after the icon name
  "sample.position": "before",

  //`string`, Icon color hex for inline displaying 
  "sample.color": "auto",

  //`string[]`, Delimiters for separating between collection id and icon id 
  "sample.delimiters": [":","--","-","/"],

  //`string[]`, Prefixes for matching 
  "sample.prefixes": ["","i-","~icons/"],

  //`string[]`, Suffixes for matching 
  "sample.suffixes": ["","i-"],

  //`string[]`, Array of language IDs to enable annotations 
  "sample.languageIds": ["javascript","javascriptreact","typescript","typescriptreact","vue","svelte","html","pug","json","yaml"],

  //(("academicons" | "akar-icons" | "ant-design" | "arcticons" | "basil" | "bi" | "bitcoin-icons" | "bpmn" | "brandico" | "bx" | "bxl" | "bxs" | "bytesize" | "carbon" | "cbi" | "charm" | "ci" | "cib" | "cif" | "cil" | "circle-flags" | "circum" | "clarity" | "codicon" | "covid" | "cryptocurrency" | "cryptocurrency-color" | "dashicons" | "devicon" | "devicon-plain" | "ei" | "el" | "emojione" | "emojione-monotone" | "emojione-v1" | "entypo" | "entypo-social" | "eos-icons" | "ep" | "et" | "eva" | "f7" | "fa" | "fa-brands" | "fa-regular" | "fa-solid" | "fa6-brands" | "fa6-regular" | "fa6-solid" | "fad" | "fe" | "feather" | "file-icons" | "flag" | "flagpack" | "flat-color-icons" | "flat-ui" | "flowbite" | "fluent" | "fluent-emoji" | "fluent-emoji-flat" | "fluent-emoji-high-contrast" | "fluent-mdl2" | "fontelico" | "fontisto" | "formkit" | "foundation" | "fxemoji" | "gala" | "game-icons" | "geo" | "gg" | "gis" | "gravity-ui" | "gridicons" | "grommet-icons" | "guidance" | "healthicons" | "heroicons" | "heroicons-outline" | "heroicons-solid" | "humbleicons" | "ic" | "icomoon-free" | "icon-park" | "icon-park-outline" | "icon-park-solid" | "icon-park-twotone" | "iconamoon" | "iconoir" | "icons8" | "il" | "ion" | "iwwa" | "jam" | "la" | "lets-icons" | "line-md" | "logos" | "ls" | "lucide" | "mage" | "majesticons" | "maki" | "map" | "marketeq" | "material-symbols" | "material-symbols-light" | "mdi" | "mdi-light" | "medical-icon" | "memory" | "meteocons" | "mi" | "mingcute" | "mono-icons" | "mynaui" | "nimbus" | "nonicons" | "noto" | "noto-v1" | "octicon" | "oi" | "ooui" | "openmoji" | "oui" | "pajamas" | "pepicons" | "pepicons-pencil" | "pepicons-pop" | "pepicons-print" | "ph" | "pixelarticons" | "prime" | "ps" | "quill" | "radix-icons" | "raphael" | "ri" | "si-glyph" | "simple-icons" | "simple-line-icons" | "skill-icons" | "solar" | "streamline" | "streamline-emojis" | "subway" | "svg-spinners" | "system-uicons" | "tabler" | "tdesign" | "teenyicons" | "token" | "token-branded" | "topcoat" | "twemoji" | "typcn" | "uil" | "uim" | "uis" | "uit" | "uiw" | "unjs" | "vaadin" | "vs" | "vscode-icons" | "websymbol" | "whh" | "wi" | "wpf" | "zmdi" | "zondicons")[] | null)
  //Collection IDs to be included for detection
  "sample.includes": null,

  //(("academicons" | "akar-icons" | "ant-design" | "arcticons" | "basil" | "bi" | "bitcoin-icons" | "bpmn" | "brandico" | "bx" | "bxl" | "bxs" | "bytesize" | "carbon" | "cbi" | "charm" | "ci" | "cib" | "cif" | "cil" | "circle-flags" | "circum" | "clarity" | "codicon" | "covid" | "cryptocurrency" | "cryptocurrency-color" | "dashicons" | "devicon" | "devicon-plain" | "ei" | "el" | "emojione" | "emojione-monotone" | "emojione-v1" | "entypo" | "entypo-social" | "eos-icons" | "ep" | "et" | "eva" | "f7" | "fa" | "fa-brands" | "fa-regular" | "fa-solid" | "fa6-brands" | "fa6-regular" | "fa6-solid" | "fad" | "fe" | "feather" | "file-icons" | "flag" | "flagpack" | "flat-color-icons" | "flat-ui" | "flowbite" | "fluent" | "fluent-emoji" | "fluent-emoji-flat" | "fluent-emoji-high-contrast" | "fluent-mdl2" | "fontelico" | "fontisto" | "formkit" | "foundation" | "fxemoji" | "gala" | "game-icons" | "geo" | "gg" | "gis" | "gravity-ui" | "gridicons" | "grommet-icons" | "guidance" | "healthicons" | "heroicons" | "heroicons-outline" | "heroicons-solid" | "humbleicons" | "ic" | "icomoon-free" | "icon-park" | "icon-park-outline" | "icon-park-solid" | "icon-park-twotone" | "iconamoon" | "iconoir" | "icons8" | "il" | "ion" | "iwwa" | "jam" | "la" | "lets-icons" | "line-md" | "logos" | "ls" | "lucide" | "mage" | "majesticons" | "maki" | "map" | "marketeq" | "material-symbols" | "material-symbols-light" | "mdi" | "mdi-light" | "medical-icon" | "memory" | "meteocons" | "mi" | "mingcute" | "mono-icons" | "mynaui" | "nimbus" | "nonicons" | "noto" | "noto-v1" | "octicon" | "oi" | "ooui" | "openmoji" | "oui" | "pajamas" | "pepicons" | "pepicons-pencil" | "pepicons-pop" | "pepicons-print" | "ph" | "pixelarticons" | "prime" | "ps" | "quill" | "radix-icons" | "raphael" | "ri" | "si-glyph" | "simple-icons" | "simple-line-icons" | "skill-icons" | "solar" | "streamline" | "streamline-emojis" | "subway" | "svg-spinners" | "system-uicons" | "tabler" | "tdesign" | "teenyicons" | "token" | "token-branded" | "topcoat" | "twemoji" | "typcn" | "uil" | "uim" | "uis" | "uit" | "uiw" | "unjs" | "vaadin" | "vs" | "vscode-icons" | "websymbol" | "whh" | "wi" | "wpf" | "zmdi" | "zondicons")[] | null)
  //Collection IDs to be excluded for detection
  "sample.excludes": null,

  //`string`, CDN entry of sample icon-sets 
  "sample.cdnEntry": "https://icones.js.org/collections",

  //`string[]`, JSON paths for custom collection 
  "sample.customCollectionJsonPaths": [],

  //Record<string, unknown>
  //Collection IDs Map for collection name alias, e.g. { 'mc': 'mingcute' }
  "sample.customCollectionIdsMap": {},

  //`string[]`, JSON paths for custom aliases 
  "sample.customAliasesJsonPaths": [],

  //`boolean`, Only use the icon aliases. Non aliased icons will be ignored. 
  "sample.customAliasesOnly": false,

}
```

## Configuration

| Key                                | Description                                                             | Type      | Default                                                                                                     |
| ---------------------------------- | ----------------------------------------------------------------------- | --------- | ----------------------------------------------------------------------------------------------------------- |
| `sample.inplace`                   | Use icon graph to replace the icon name.                                | `boolean` | `true`                                                                                                      |
| `sample.annotations`               | Enabled sample inline annotations                                       | `boolean` | `true`                                                                                                      |
| `sample.position`                  | Position the icon before or after the icon name                         | `string`  | `"before"`                                                                                                  |
| `sample.color`                     | Icon color hex for inline displaying                                    | `string`  | `"auto"`                                                                                                    |
| `sample.delimiters`                | Delimiters for separating between collection id and icon id             | `array`   | `[":","--","-","/"]`                                                                                        |
| `sample.prefixes`                  | Prefixes for matching                                                   | `array`   | `["","i-","~icons/"]`                                                                                       |
| `sample.suffixes`                  | Suffixes for matching                                                   | `array`   | `["","i-"]`                                                                                                 |
| `sample.languageIds`               | Array of language IDs to enable annotations                             | `array`   | `["javascript","javascriptreact","typescript","typescriptreact","vue","svelte","html","pug","json","yaml"]` |
| `sample.includes`                  | Collection IDs to be included for detection                             | `array`   | `null`                                                                                                      |
| `sample.excludes`                  | Collection IDs to be excluded for detection                             | `array`   | `null`                                                                                                      |
| `sample.cdnEntry`                  | CDN entry of sample icon-sets                                           | `string`  | `"https://icones.js.org/collections"`                                                                       |
| `sample.customCollectionJsonPaths` | JSON paths for custom collection                                        | `array`   | `[]`                                                                                                        |
| `sample.customCollectionIdsMap`    | Collection IDs Map for collection name alias, e.g. { 'mc': 'mingcute' } | `object`  | `{}`                                                                                                        |
| `sample.customAliasesJsonPaths`    | JSON paths for custom aliases                                           | `array`   | `[]`                                                                                                        |
| `sample.customAliasesOnly`         | Only use the icon aliases. Non aliased icons will be ignored.           | `boolean` | `false`                                                                                                     |