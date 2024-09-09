// This file is generated by `reactive-meta-gen`. Do not modify manually.
// @see https://github.com/calmripple/reactive-meta-gen

// Meta info

import { defineConfigObject, defineConfigs } from 'reactive-vscode'

export const publisher = "cnjimbo"
export const name = "project-config"
export const version = "1.1.2"
export const displayName = "Project Config Updater"
export const description = "Export current settings to workspace config file "
export const extensionId = `${publisher}.${name}`

/**
 * Type union of all commands
 */
export type CommandKey = 
  | "project-config.manualUpdate"
  | "project-config.remove-watch-dir"
  | "project-config.add-watch-dir"
  | "extension.emeraldwalk.enableRunOnSave"
  | "extension.emeraldwalk.disableRunOnSave"

/**
 * Commands map registed by `cnjimbo.project-config`
 */
export const commands = {
  /**
   * Update config now
   * @value `project-config.manualUpdate`
   * @example
   * useCommand(commands.manualUpdate, async () => {
   *   //do actions or update config 
   * })
   */
  manualUpdate: "project-config.manualUpdate",
  /**
   * remove watch dir
   * @value `project-config.remove-watch-dir`
   * @example
   * useCommand(commands.removeWatchDir, async () => {
   *   //do actions or update config 
   * })
   */
  removeWatchDir: "project-config.remove-watch-dir",
  /**
   * add watch dir
   * @value `project-config.add-watch-dir`
   * @example
   * useCommand(commands.addWatchDir, async () => {
   *   //do actions or update config 
   * })
   */
  addWatchDir: "project-config.add-watch-dir",
  /**
   * Run On Save: Enable
   * @value `extension.emeraldwalk.enableRunOnSave`
   * @example
   * useCommand(commands.extensionEmeraldwalkEnableRunOnSave, async () => {
   *   //do actions or update config 
   * })
   */
  extensionEmeraldwalkEnableRunOnSave: "extension.emeraldwalk.enableRunOnSave",
  /**
   * Run On Save: Disable
   * @value `extension.emeraldwalk.disableRunOnSave`
   * @example
   * useCommand(commands.extensionEmeraldwalkDisableRunOnSave, async () => {
   *   //do actions or update config 
   * })
   */
  extensionEmeraldwalkDisableRunOnSave: "extension.emeraldwalk.disableRunOnSave",
} satisfies Record<string, CommandKey>

/**
 * Type union of Deprecated all configs
 */
export type DeprecatedConfigKey = 
  | "ww_should_not_show_up"

/**
 * Config keys of `project-config`
 */
export interface ProjectConfig {
  /**
   * The branch name of upstream repo
   * @key `project-config.fileNestingUpdater.upstreamBranch`
   * @default `"main"`
   * @type `string`
   */
  "fileNestingUpdater.upstreamBranch": string,
  /**
   * The upstream repo you want to update from
   * @key `project-config.fileNestingUpdater.upstreamRepo`
   * @default `"antfu/vscode-file-nesting-config"`
   * @type `string`
   */
  "fileNestingUpdater.upstreamRepo": string,
  /**
   * Enabled project-config inline annotations
   * @key `project-config.test.annotations`
   * @default `true`
   * @type `boolean`
   */
  "test.annotations": boolean,
  /**
   * Position the icon before or after the icon name
   * @key `project-config.test.position`
   * @default `"before"`
   * @type `string`
   */
  "test.position": ("after" | "before"),
}

/**
 * Scoped defaults of `project-config`
 */
const _projectConfig = {
/**
 * scope: `project-config`
 */
  scope: "project-config",
/**
 * Keys' defaults of `project-config`
 */
  defaults: {
    "fileNestingUpdater.upstreamBranch": "main",
    "fileNestingUpdater.upstreamRepo": "antfu/vscode-file-nesting-config",
    "test.annotations": true,
    "test.position": "before",
  } satisfies ProjectConfig,
}

/**
 * Reactive ConfigObject of `project-config`
 * @example
 * let configValue = projectConfigConfigObject.fileNestingUpdater.upstreamBranch //get value 
 * projectConfigConfigObject.fileNestingUpdater.upstreamBranch = true // set value
 * projectConfigConfigObject.$update("fileNestingUpdater.upstreamBranch", !configValue, ConfigurationTarget.Workspace, true)
 */
export const projectConfigConfigObject = defineConfigObject<ProjectConfig>(
  _projectConfig.scope,
  _projectConfig.defaults
)
/**
 * Reactive ToConfigRefs of `project-config`
 * @example
 * let configValue:string =projectConfigConfigs.fileNestingUpdater.upstreamBranch.value //get value 
 * projectConfigConfigs.fileNestingUpdater.upstreamBranch.value = "main" // set value
 * //update value to ConfigurationTarget.Workspace/ConfigurationTarget.Global/ConfigurationTarget.WorkspaceFolder
 * projectConfigConfigs.fileNestingUpdater.upstreamBranch.update(true, ConfigurationTarget.WorkspaceFolder, true)
 */
export const projectConfigConfigs = defineConfigs<ProjectConfig>(
  _projectConfig.scope,
  _projectConfig.defaults
)

/**
 * Config keys of `project-config.fileNestingUpdater`
 */
export interface FileNestingUpdater {
  /**
   * The branch name of upstream repo
   * @key `project-config.fileNestingUpdater.upstreamBranch`
   * @default `"main"`
   * @type `string`
   */
  "upstreamBranch": string,
  /**
   * The upstream repo you want to update from
   * @key `project-config.fileNestingUpdater.upstreamRepo`
   * @default `"antfu/vscode-file-nesting-config"`
   * @type `string`
   */
  "upstreamRepo": string,
}

/**
 * Scoped defaults of `project-config.fileNestingUpdater`
 */
const _fileNestingUpdater = {
/**
 * scope: `project-config.fileNestingUpdater`
 */
  scope: "project-config.fileNestingUpdater",
/**
 * Keys' defaults of `project-config.fileNestingUpdater`
 */
  defaults: {
    "upstreamBranch": "main",
    "upstreamRepo": "antfu/vscode-file-nesting-config",
  } satisfies FileNestingUpdater,
}

/**
 * Reactive ConfigObject of `project-config.fileNestingUpdater`
 * @example
 * let configValue = fileNestingUpdaterConfigObject.upstreamBranch //get value 
 * fileNestingUpdaterConfigObject.upstreamBranch = true // set value
 * fileNestingUpdaterConfigObject.$update("upstreamBranch", !configValue, ConfigurationTarget.Workspace, true)
 */
export const fileNestingUpdaterConfigObject = defineConfigObject<FileNestingUpdater>(
  _fileNestingUpdater.scope,
  _fileNestingUpdater.defaults
)
/**
 * Reactive ToConfigRefs of `project-config.fileNestingUpdater`
 * @example
 * let configValue:string =fileNestingUpdaterConfigs.upstreamBranch.value //get value 
 * fileNestingUpdaterConfigs.upstreamBranch.value = "main" // set value
 * //update value to ConfigurationTarget.Workspace/ConfigurationTarget.Global/ConfigurationTarget.WorkspaceFolder
 * fileNestingUpdaterConfigs.upstreamBranch.update(true, ConfigurationTarget.WorkspaceFolder, true)
 */
export const fileNestingUpdaterConfigs = defineConfigs<FileNestingUpdater>(
  _fileNestingUpdater.scope,
  _fileNestingUpdater.defaults
)

/**
 * Config keys of `project-config.test`
 */
export interface Test {
  /**
   * Enabled project-config inline annotations
   * @key `project-config.test.annotations`
   * @default `true`
   * @type `boolean`
   */
  "annotations": boolean,
  /**
   * Position the icon before or after the icon name
   * @key `project-config.test.position`
   * @default `"before"`
   * @type `string`
   */
  "position": ("after" | "before"),
}

/**
 * Scoped defaults of `project-config.test`
 */
const _test = {
/**
 * scope: `project-config.test`
 */
  scope: "project-config.test",
/**
 * Keys' defaults of `project-config.test`
 */
  defaults: {
    "annotations": true,
    "position": "before",
  } satisfies Test,
}

/**
 * Reactive ConfigObject of `project-config.test`
 * @example
 * let configValue = testConfigObject.annotations //get value 
 * testConfigObject.annotations = true // set value
 * testConfigObject.$update("annotations", !configValue, ConfigurationTarget.Workspace, true)
 */
export const testConfigObject = defineConfigObject<Test>(
  _test.scope,
  _test.defaults
)
/**
 * Reactive ToConfigRefs of `project-config.test`
 * @example
 * let configValue:boolean =testConfigs.annotations.value //get value 
 * testConfigs.annotations.value = true // set value
 * //update value to ConfigurationTarget.Workspace/ConfigurationTarget.Global/ConfigurationTarget.WorkspaceFolder
 * testConfigs.annotations.update(true, ConfigurationTarget.WorkspaceFolder, true)
 */
export const testConfigs = defineConfigs<Test>(
  _test.scope,
  _test.defaults
)

/**
 * Config keys of `virtual(Keys in the root)`
 */
export interface Root {
  /**
   * Enabled project-config inline annotations
   * @key `xxx`
   * @default `true`
   * @type `boolean`
   */
  "xxx": boolean,
}

/**
 * Scoped defaults of `virtual(Keys in the root)`
 */
const _root = {
/**
 * scope: `virtual(Keys in the root)`
 */
  scope: "",
/**
 * Keys' defaults of `virtual(Keys in the root)`
 */
  defaults: {
    "xxx": true,
  } satisfies Root,
}

/**
 * Reactive ConfigObject of `virtual(Keys in the root)`
 * @example
 * let configValue = rootConfigObject.xxx //get value 
 * rootConfigObject.xxx = true // set value
 * rootConfigObject.$update("xxx", !configValue, ConfigurationTarget.Workspace, true)
 */
export const rootConfigObject = defineConfigObject<Root>(
  _root.scope,
  _root.defaults
)
/**
 * Reactive ToConfigRefs of `virtual(Keys in the root)`
 * @example
 * let configValue:boolean =rootConfigs.xxx.value //get value 
 * rootConfigs.xxx.value = true // set value
 * //update value to ConfigurationTarget.Workspace/ConfigurationTarget.Global/ConfigurationTarget.WorkspaceFolder
 * rootConfigs.xxx.update(true, ConfigurationTarget.WorkspaceFolder, true)
 */
export const rootConfigs = defineConfigs<Root>(
  _root.scope,
  _root.defaults
)

/**
 * Config keys of `emeraldwalk`
 */
export interface Emeraldwalk {
  /**
   * 
   * @key `emeraldwalk.runonsave`
   * @default `{ "autoClearConsole": false, "shell": undefined, "delimiters": [":","--","-","/"], "delimiters1": [":","--","-","/"], "commands": undefined }`
   * @type `object`
   */
  "runonsave": { 
    /**
     * Automatically clear the console on each save before running commands.
     * @key `autoClearConsole`
     * @default `false`
     * @type `boolean`
     */
    'autoClearConsole': boolean
    /**
     * Shell to execute the command with (gets passed to child_process.exec as an options arg. e.g. child_process(cmd, { shell }).
     * @key `shell`
     * @default `undefined`
     * @type `string`
     */
    'shell'?: (string | undefined)
    /**
     * Delimiters for separating between collection id and icon id
     * @key `delimiters`
     * @default `[":","--","-","/"]`
     * @type `array`
     */
    'delimiters': (string | undefined)[]
    /**
     * Delimiters for separating between collection id and icon id
     * @key `delimiters1`
     * @default `[":","--","-","/"]`
     * @type `array`
     */
    'delimiters1': (string | undefined)[]
    /**
     * 
     * @key `commands`
     * @default `undefined`
     * @type `array`
     */
    'commands'?: ({ 
    /**
     * Regex for matching files to run commands on 
     * 
     * NOTE: This is a regex and not a file path spce, so backslashes have to be escaped. They also have to be escaped in json strings, so you may have to double escape them in certain cases such as targetting contents of folders.
     * 
     * e.g.
     * "match": "some\\\\directory\\\\.*"
     * @key `match`
     * @default `".*"`
     * @type `string`
     */
    'match': string
    /**
     * Regex for matching files *not* to run commands on.
     * @key `notMatch`
     * @default `".*"`
     * @type `string`
     */
    'notMatch': string
    /**
     * Command to execute on save.
     * @key `cmd`
     * @default `"echo ${file}"`
     * @type `string`
     */
    'cmd': string
    /**
     * Run command asynchronously.
     * @key `isAsync`
     * @default `false`
     * @type `boolean`
     */
    'isAsync': boolean }[] | undefined) },
}

/**
 * Scoped defaults of `emeraldwalk`
 */
const _emeraldwalk = {
/**
 * scope: `emeraldwalk`
 */
  scope: "emeraldwalk",
/**
 * Keys' defaults of `emeraldwalk`
 */
  defaults: {
    "runonsave": { "autoClearConsole": false, "shell": undefined, "delimiters": [":","--","-","/"], "delimiters1": [":","--","-","/"], "commands": undefined },
  } satisfies Emeraldwalk,
}

/**
 * Reactive ConfigObject of `emeraldwalk`
 * @example
 * let configValue = emeraldwalkConfigObject.runonsave //get value 
 * emeraldwalkConfigObject.runonsave = true // set value
 * emeraldwalkConfigObject.$update("runonsave", !configValue, ConfigurationTarget.Workspace, true)
 */
export const emeraldwalkConfigObject = defineConfigObject<Emeraldwalk>(
  _emeraldwalk.scope,
  _emeraldwalk.defaults
)
/**
 * Reactive ToConfigRefs of `emeraldwalk`
 * @example
 * let configValue:object =emeraldwalkConfigs.runonsave.value //get value 
 * emeraldwalkConfigs.runonsave.value = { "autoClearConsole": false, "shell": undefined, "delimiters": [":","--","-","/"], "delimiters1": [":","--","-","/"], "commands": undefined } // set value
 * //update value to ConfigurationTarget.Workspace/ConfigurationTarget.Global/ConfigurationTarget.WorkspaceFolder
 * emeraldwalkConfigs.runonsave.update(true, ConfigurationTarget.WorkspaceFolder, true)
 */
export const emeraldwalkConfigs = defineConfigs<Emeraldwalk>(
  _emeraldwalk.scope,
  _emeraldwalk.defaults
)
