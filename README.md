# reactive-meta-gen

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

Generate `TypeScript` meta info with 'reactive-vscode' and Markdown tables for VS Code extension from package.json

> This was inspired by [vscode-ext-gen](https://github.com/antfu/vscode-ext-gen). I planed to submit a PR for this change, but after thought carefull, duo to the huge changes, I created a new cli tool for these features. Any way this idea is base on `antfu/vscoe-ext-gen`.

## Usage

Under the VS Code extension project root
<details>
  <summary>pnpm package manager</summary>

```bash
pnpx reactive-meta-gen
```
</details>
<details>
  <summary>npm package manager</summary>

```bash
npx reactive-meta-gen
```
</details>

## Continuous Update

1. Add following to `package.json`

```json
{
  "scripts": {

    "prepare": "pnpm run update",
    "update": "pnpx vscode-ext-gen ./package.json --readme ./README.md --output ./src/generated-meta.ts"
  }
}
```

2. We recommend using the [Run on Save](https://marketplace.visualstudio.com/items?itemName=emeraldwalk.RunOnSave) extension with the following config in your `.vscode/settings.json` or `.code-workspace` to always generate the meta file on save:

```json
{
  "emeraldwalk.runonsave": {
    "commands": [
      {
        "match": "package.json",
        "isAsync": true,
        "cmd": "npm run update"
      }
    ]
  }
}
```

## Examples

Generates `src/generated-meta.ts` file with the following content which syncs with your `package.json`:

```ts
export type CommandKey = 'sample.toggle-annotations' | 'sample.toggle-inplace' | 'sample.clear-cache' | 'sample.update-date'

export const useCommand = (commandFullKey: CommandKey, callback: (...args: any[]) => any): void => useReactiveCommand(commandFullKey, callback)

export const useCommands = (commands: Partial<Record<CommandKey, (...args: any[]) => any>>): void => useReactiveCommands(commands)

export type LoggerNameType = typeof name | typeof displayName | typeof extensionId

export const useLogger = (loggerName: LoggerNameType = displayName ?? name ?? extensionId, getPrefix?: ((type: string) => string) | null) => useReactiveLogger(loggerName, { getPrefix })

export const useCommandToggleAnnotations = (callback: (...args: any[]) => any) => useCommand(commands.toggleAnnotations, callback)

export const useConfig = <K extends ConfigSecionKey>(section: K) => defineConfigs<typeof sampleDefaults[K]>(section, sampleDefaults[section])

export const useConfigObject = <K extends ConfigSecionKey>(section: K) => defineConfigObject<typeof sampleDefaults[K]>(section, sampleDefaults[section])

export const useConfigObjectSample = () => useConfigObject(configs.sample)

export const useConfigSample = () => useConfig(configs.sample)
```

On usage:

```ts
import { defineExtension, watchEffect } from 'reactive-vscode'
import { window } from 'vscode'
import { useCommandUpdateDate, useConfigObjectSample } from './generated-meta'

const { activate, deactivate } = defineExtension(() => {
  const sample = useConfigObjectSample()
  // another way to get the config value
  const _configValue = sample.date // get value

  watchEffect(() => {
    // watch value change
    window.showInformationMessage(`sampleConfigs.annotations.value:${sample.date}`)
  })
  useCommandUpdateDate(async () => {
    // update value to ConfigurationTarget.Workspace/ConfigurationTarget.Global/ConfigurationTarget.WorkspaceFolder
    sample.$update('date', Date.now().toLocaleString())
  })
},
)
export { activate, deactivate }
```

For a full example, check [this file](./test/sampleCase.ts)

## Generate Docs

Add comments `<!-- commands -->` and `<!-- configs -->` and `<!-- configsJson -->` as the slots in your README.md:

```md
# Your Extension

## Commands

<!-- commands -->
<!-- commands -->

## Configurations

<!-- configs -->
<!-- configs -->

## Configurations Json

<!-- configsJson -->
<!-- configsJson -->
```

They will be replaced with the generated tables when you run `npx reactive-meta-gen`.

## Sponsors

<p align="center">

# Waiting for your support!
  <!-- <a href="https://cdn.jsdelivr.net/gh/cnjimbo/static/sponsors.svg">
    <img src='https://cdn.jsdelivr.net/gh/cnjimbo/static/sponsors.svg'/>
  </a> -->
</p>

## License

[MIT](./LICENSE) License © 2023-PRESENT [Calm Ripple](https://github.com/open-dmsrs)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/reactive-meta-gen?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/reactive-meta-gen
[npm-downloads-src]: https://img.shields.io/npm/dm/reactive-meta-gen?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/reactive-meta-gen
[bundle-src]: https://img.shields.io/bundlephobia/minzip/reactive-meta-gen?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=reactive-meta-gen
[license-src]: https://img.shields.io/npm/l/reactive-meta-gen?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/open-dmsrs/reactive-meta-gen/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/reactive-meta-gen
