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
 * Config keys of `virtual(Keys in the root)`
 */
export interface Root {
  /**
   * 
   * @key `0`
   * @default `{ "project-config.fileNestingUpdater.upstreamBranch": "main", "project-config.fileNestingUpdater.upstreamRepo": "antfu/vscode-file-nesting-config", "project-config.test.annotations": true, "project-config.test.position": "before", "ww_should_not_show_up": true, "xxx": true }`
   * @type `object`
   */
  "0": { 
    /**
     * The branch name of upstream repo
     * @key `project-config.fileNestingUpdater.upstreamBranch`
     * @default `"main"`
     * @type `string`
     */
    'project-config.fileNestingUpdater.upstreamBranch': string
    /**
     * The upstream repo you want to update from
     * @key `project-config.fileNestingUpdater.upstreamRepo`
     * @default `"antfu/vscode-file-nesting-config"`
     * @type `string`
     */
    'project-config.fileNestingUpdater.upstreamRepo': string
    /**
     * Enabled project-config inline annotations
     * @key `project-config.test.annotations`
     * @default `true`
     * @type `boolean`
     */
    'project-config.test.annotations': boolean
    /**
     * Position the icon before or after the icon name
     * @key `project-config.test.position`
     * @default `"before"`
     * @type `string`
     */
    'project-config.test.position': ("after" | "before")
    /**
     * Enabled project-config inline annotations
     * @key `ww_should_not_show_up`
     * @default `true`
     * @type `undefined`
     */
    'ww_should_not_show_up': unknown
    /**
     * Enabled project-config inline annotations
     * @key `xxx`
     * @default `true`
     * @type `boolean`
     */
    'xxx': boolean },
  /**
   * 
   * @key `1`
   * @default `{ "emeraldwalk.runonsave": { "autoClearConsole": false, "shell": undefined, "delimiters": [":","--","-","/"], "delimiters1": [":","--","-","/"], "commands": undefined } }`
   * @type `object`
   */
  "1": { 
    /**
     * 
     * @key `emeraldwalk.runonsave`
     * @default `{ "autoClearConsole": false, "shell": undefined, "delimiters": [":","--","-","/"], "delimiters1": [":","--","-","/"], "commands": undefined }`
     * @type `object`
     */
    'emeraldwalk.runonsave': { 
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
    'isAsync': boolean }[] | undefined) } },
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
    "0": { "project-config.fileNestingUpdater.upstreamBranch": "main", "project-config.fileNestingUpdater.upstreamRepo": "antfu/vscode-file-nesting-config", "project-config.test.annotations": true, "project-config.test.position": "before", "ww_should_not_show_up": true, "xxx": true },
    "1": { "emeraldwalk.runonsave": { "autoClearConsole": false, "shell": undefined, "delimiters": [":","--","-","/"], "delimiters1": [":","--","-","/"], "commands": undefined } },
  } satisfies Root,
}

/**
 * Reactive ConfigObject of `virtual(Keys in the root)`
 * @example
 * let configValue = rootConfigObject.0 //get value 
 * rootConfigObject.0 = true // set value
 * rootConfigObject.$update("0", !configValue, ConfigurationTarget.Workspace, true)
 */
export const rootConfigObject = defineConfigObject<Root>(
  _root.scope,
  _root.defaults
)
/**
 * Reactive ToConfigRefs of `virtual(Keys in the root)`
 * @example
 * let configValue:object =rootConfigs.0.value //get value 
 * rootConfigs.0.value = { "project-config.fileNestingUpdater.upstreamBranch": "main", "project-config.fileNestingUpdater.upstreamRepo": "antfu/vscode-file-nesting-config", "project-config.test.annotations": true, "project-config.test.position": "before", "ww_should_not_show_up": true, "xxx": true } // set value
 * //update value to ConfigurationTarget.Workspace/ConfigurationTarget.Global/ConfigurationTarget.WorkspaceFolder
 * rootConfigs.0.update(true, ConfigurationTarget.WorkspaceFolder, true)
 */
export const rootConfigs = defineConfigs<Root>(
  _root.scope,
  _root.defaults
)
