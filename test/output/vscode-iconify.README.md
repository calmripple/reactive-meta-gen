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
  //Use icon graph to replace the icon name.
  "iconify.inplace": true,

  //Enabled Iconify inline annotations
  "iconify.annotations": true,

  //Position the icon before or after the icon name
  "iconify.position": "before",

  //Icon color hex for inline displaying
  "iconify.color": "auto",

  //Delimiters for separating between collection id and icon id
  "iconify.delimiters": [":","--","-","/"],

  //Prefixes for matching
  "iconify.prefixes": ["","i-","~icons/"],

  //Suffixes for matching
  "iconify.suffixes": ["","i-"],

  //Array of language IDs to enable annotations
  "iconify.languageIds": ["javascript","javascriptreact","typescript","typescriptreact","vue","svelte","html","pug","json","yaml","markdown","mdx"],

  //Collection IDs to be included for detection
  "iconify.includes": null,

  //Collection IDs to be excluded for detection
  "iconify.excludes": null,

  //CDN entry of iconify icon-sets
  "iconify.cdnEntry": "https://icones.js.org/collections",

  //JSON paths for custom collection
  "iconify.customCollectionJsonPaths": [],

  //Collection IDs Map for collection name alias, e.g. { 'mc': 'mingcute' }
  "iconify.customCollectionIdsMap": {},

  //JSON paths for custom aliases
  "iconify.customAliasesJsonPaths": [],

  //Only use the icon aliases. Non aliased icons will be ignored.
  "iconify.customAliasesOnly": false,

}
```

## Configuration

| Key                                 | Description                                                             | Type      | Default                                                                                                                      |
| ----------------------------------- | ----------------------------------------------------------------------- | --------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `iconify.inplace`                   | Use icon graph to replace the icon name.                                | `boolean` | `true`                                                                                                                       |
| `iconify.annotations`               | Enabled Iconify inline annotations                                      | `boolean` | `true`                                                                                                                       |
| `iconify.position`                  | Position the icon before or after the icon name                         | `string`  | `"before"`                                                                                                                   |
| `iconify.color`                     | Icon color hex for inline displaying                                    | `string`  | `"auto"`                                                                                                                     |
| `iconify.delimiters`                | Delimiters for separating between collection id and icon id             | `array`   | `[":","--","-","/"]`                                                                                                         |
| `iconify.prefixes`                  | Prefixes for matching                                                   | `array`   | `["","i-","~icons/"]`                                                                                                        |
| `iconify.suffixes`                  | Suffixes for matching                                                   | `array`   | `["","i-"]`                                                                                                                  |
| `iconify.languageIds`               | Array of language IDs to enable annotations                             | `array`   | `["javascript","javascriptreact","typescript","typescriptreact","vue","svelte","html","pug","json","yaml","markdown","mdx"]` |
| `iconify.includes`                  | Collection IDs to be included for detection                             | `array`   | `null`                                                                                                                       |
| `iconify.excludes`                  | Collection IDs to be excluded for detection                             | `array`   | `null`                                                                                                                       |
| `iconify.cdnEntry`                  | CDN entry of iconify icon-sets                                          | `string`  | `"https://icones.js.org/collections"`                                                                                        |
| `iconify.customCollectionJsonPaths` | JSON paths for custom collection                                        | `array`   | `[]`                                                                                                                         |
| `iconify.customCollectionIdsMap`    | Collection IDs Map for collection name alias, e.g. { 'mc': 'mingcute' } | `object`  | `{}`                                                                                                                         |
| `iconify.customAliasesJsonPaths`    | JSON paths for custom aliases                                           | `array`   | `[]`                                                                                                                         |
| `iconify.customAliasesOnly`         | Only use the icon aliases. Non aliased icons will be ignored.           | `boolean` | `false`                                                                                                                      |