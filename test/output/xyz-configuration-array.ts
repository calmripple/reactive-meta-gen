/* eslint-disable */
// This file is generated by `reactive-meta-gen`. Do not modify manually.
// @see https://github.com/calmripple/reactive-meta-gen
// Meta info
import { defineConfigObject, defineConfigs, useCommand as useReactiveCommand, useCommands as useReactiveCommands, useLogger as useReactiveLogger, useOutputChannel as useReactiveOutputChannel, useStatusBarItem, useDisposable, } from 'reactive-vscode';
import type { Nullable, UseStatusBarItemOptions } from 'reactive-vscode';
export const publisher = "cnjimbo";
export const name = "project-config";
export const version = "1.1.2";
export const displayName = "Project Config Updater";
export const description = "Export current settings to workspace config file ";
export const extensionId = "cnjimbo.project-config";
type Cache<T> = {
    exp: number | null;
    value: T;
    dispose: () => void;
};
const memoize = <TArgs extends any[], TResult>(cache: Map<string, Cache<TResult>>, func: (...args: TArgs) => TResult, keyFunc: ((...args: TArgs) => string) | null, ttl: number | null) => {
    return function callWithMemo(...args: any): TResult {
        const key = keyFunc ? keyFunc(...args) : JSON.stringify({ args });
        const existing = cache.get(key);
        if (existing !== undefined) {
            if (!existing.exp)
                return existing.value;
            if (existing.exp > new Date().getTime()) {
                return existing.value;
            }
        }
        const result = func(...args);
        const target: Cache<TResult> = {
            exp: ttl ? new Date().getTime() + ttl : null,
            value: result,
            dispose: () => {
                cache.delete(key);
            }
        };
        cache.set(key, target);
        useDisposable(target);
        return result;
    };
};
/**
 * Creates a memoized function. The returned function
 * will only execute the source function when no value
 * has previously been computed. If a ttl (milliseconds)
 * is given previously computed values will be checked
 * for expiration before being returned.
 */
export const memo = <TArgs extends any[], TResult>(func: (...args: TArgs) => TResult, options: {
    key?: (...args: TArgs) => string;
    ttl?: number;
} = {}) => {
    return memoize(new Map<string, Cache<TResult>>(), func, options.key ?? null, options.ttl ?? null) as (...args: TArgs) => TResult;
};
export interface CommandsInformation {
    /**
     *  category string by which the command is grouped in the UI
     */
    category?: string;
    /**
     * identifier of the command to execute
     */
    command: string;
    /**
     * title which the command is represented in the UI
     */
    title: string;
    enablement?: string;
    icon?: string;
    shortTitle?: string;
    commandShorthandName?: string;
}
/**
 * Type union of all commands
 */
export type Command = "base" | "manualUpdate" | "project-config.manualUpdate" | "project-config.remove-watch-dir" | "remove-watch-dir" | "project-config.add-watch-dir" | "extension.emeraldwalk.enableRunOnSave" | "extension.emeraldwalk.disableRunOnSave";
/**
 * Commands map registed by `cnjimbo.project-config`
 */
export const commands = {
    /**
     * Update config now
     * @command `base`
     */
    base: "base",
    /**
     * Update config now
     * @command `manualUpdate`
     */
    manualUpdate: "manualUpdate",
    /**
     * Update config now
     * @command `project-config.manualUpdate`
     */
    projectConfigManualUpdate: "project-config.manualUpdate",
    /**
     * Remove watch dir
     * @command `project-config.remove-watch-dir`
     */
    removeWatchDir: "project-config.remove-watch-dir",
    /**
     * Remove watch dir
     * @command `remove-watch-dir`
     */
    removeWatchDir1: "remove-watch-dir",
    /**
     * Add watch dir
     * @command `project-config.add-watch-dir`
     */
    addWatchDir: "project-config.add-watch-dir",
    /**
     * Run On Save: Enable
     * @command `extension.emeraldwalk.enableRunOnSave`
     */
    enableRunOnSave: "extension.emeraldwalk.enableRunOnSave",
    /**
     * Run On Save: Disable
     * @command `extension.emeraldwalk.disableRunOnSave`
     */
    disableRunOnSave: "extension.emeraldwalk.disableRunOnSave",
} satisfies Record<string, Command> as Record<string, Command>;
/**
 * Commands map registed by `cnjimbo.project-config`
 */
export const commandsInformation = {
    /**
     * Update config now
     * @command `base`
     */
    "base": { "commandShorthandName": "base", "category": "Project Config Updater", "command": "base", "title": "Update config now" },
    /**
     * Update config now
     * @command `manualUpdate`
     */
    "manualUpdate": { "commandShorthandName": "manualUpdate", "category": "Project Config Updater", "command": "manualUpdate", "title": "Update config now" },
    /**
     * Update config now
     * @command `project-config.manualUpdate`
     */
    "project-config.manualUpdate": { "commandShorthandName": "projectConfigManualUpdate", "category": "Project Config Updater", "command": "project-config.manualUpdate", "title": "Update config now" },
    /**
     * Remove watch dir
     * @command `project-config.remove-watch-dir`
     */
    "project-config.remove-watch-dir": { "commandShorthandName": "removeWatchDir", "category": "Project Config Updater", "command": "project-config.remove-watch-dir", "title": "remove watch dir" },
    /**
     * Remove watch dir
     * @command `remove-watch-dir`
     */
    "remove-watch-dir": { "commandShorthandName": "removeWatchDir1", "category": "Project Config Updater", "command": "remove-watch-dir", "title": "remove watch dir" },
    /**
     * Add watch dir
     * @command `project-config.add-watch-dir`
     */
    "project-config.add-watch-dir": { "commandShorthandName": "addWatchDir", "category": "Project Config Updater", "command": "project-config.add-watch-dir", "title": "add watch dir" },
    /**
     * Run On Save: Enable
     * @command `extension.emeraldwalk.enableRunOnSave`
     */
    "extension.emeraldwalk.enableRunOnSave": { "commandShorthandName": "enableRunOnSave", "command": "extension.emeraldwalk.enableRunOnSave", "title": "Run On Save: Enable" },
    /**
     * Run On Save: Disable
     * @command `extension.emeraldwalk.disableRunOnSave`
     */
    "extension.emeraldwalk.disableRunOnSave": { "commandShorthandName": "disableRunOnSave", "command": "extension.emeraldwalk.disableRunOnSave", "title": "Run On Save: Disable" },
} satisfies Record<Command, CommandsInformation> as Record<Command, CommandsInformation>;
/**
 * Register a command. See `vscode::commands.registerCommand`.
 */
export const useCommand = (commandFullKey: Command, callback: (...args: any[]) => any): void => useReactiveCommand(commandFullKey, callback);
/**
 * Register multiple commands. See `vscode::commands.registerCommand`.
 */
export const useCommands = (commands: Partial<Record<Command, (...args: any[]) => any>>): void => useReactiveCommands(commands);
/**
 * Name type of Logger and OutputChannel
 */
export type LoggerName = typeof name | typeof displayName | typeof extensionId;
/**
 * Creates a logger that writes to the output channel.
 */
export const useLogger = (loggerName: LoggerName = displayName ?? name ?? extensionId, getPrefix?: ((type: string) => string) | null) => useReactiveLogger(loggerName, { 'getPrefix': getPrefix });
/**
 * @reactive `window.createOutputChannel`
 */
export const useOutputChannel = (outputName: LoggerName = displayName ?? name ?? extensionId) => useReactiveOutputChannel(outputName);
export const putRight = (target: Nullable<string>, curr: string) => target ? ''.concat(curr).concat(target) : curr;
export const putLeft = (target: Nullable<string>, curr: string) => target ? ''.concat(target).concat(curr) : curr;
/**
 * Create a statusBarItem with a commmand id
 */
export const useStatusBarItemFromCommand = memo((command: Command) => {
    const cmd = commandsInformation[command];
    return useStatusBarItem({
        id: cmd.commandShorthandName,
        command: cmd.command,
        name: cmd.command,
        text: putLeft(cmd.icon, cmd.shortTitle ?? cmd.title ?? cmd.commandShorthandName),
        tooltip: putLeft(cmd.category, ":").concat(cmd.title ?? cmd.shortTitle ?? cmd.commandShorthandName)
    });
});
/**
 * Create a option of statusBarItem with a commmand id
 */
export const statusBarItemOption = (command: Command): UseStatusBarItemOptions => {
    const cmd = commandsInformation[command];
    return {
        id: cmd.commandShorthandName,
        command: cmd.command,
        name: cmd.command,
        text: putLeft(cmd.icon, cmd.shortTitle ?? cmd.title ?? cmd.commandShorthandName),
        tooltip: putLeft(cmd.category, ":").concat(cmd.title ?? cmd.shortTitle ?? cmd.commandShorthandName)
    };
};
/**
 * Update config now
 * @command Register a command `base`
 */
export const useCommandBase = (callback: (...args: any[]) => any) => useCommand(commands.base, callback);
/**
 * Update config now
 * @command Register a command `manualUpdate`
 */
export const useCommandManualUpdate = (callback: (...args: any[]) => any) => useCommand(commands.manualUpdate, callback);
/**
 * Update config now
 * @command Register a command `project-config.manualUpdate`
 */
export const useCommandProjectConfigManualUpdate = (callback: (...args: any[]) => any) => useCommand(commands.projectConfigManualUpdate, callback);
/**
 * Remove watch dir
 * @command Register a command `project-config.remove-watch-dir`
 */
export const useCommandRemoveWatchDir = (callback: (...args: any[]) => any) => useCommand(commands.removeWatchDir, callback);
/**
 * Remove watch dir
 * @command Register a command `remove-watch-dir`
 */
export const useCommandRemoveWatchDir1 = (callback: (...args: any[]) => any) => useCommand(commands.removeWatchDir1, callback);
/**
 * Add watch dir
 * @command Register a command `project-config.add-watch-dir`
 */
export const useCommandAddWatchDir = (callback: (...args: any[]) => any) => useCommand(commands.addWatchDir, callback);
/**
 * Run On Save: Enable
 * @command Register a command `extension.emeraldwalk.enableRunOnSave`
 */
export const useCommandEnableRunOnSave = (callback: (...args: any[]) => any) => useCommand(commands.enableRunOnSave, callback);
/**
 * Run On Save: Disable
 * @command Register a command `extension.emeraldwalk.disableRunOnSave`
 */
export const useCommandDisableRunOnSave = (callback: (...args: any[]) => any) => useCommand(commands.disableRunOnSave, callback);
/**
 * Type union of Deprecated all configs
 */
export type DeprecatedConfigKey = "ww_should_not_show_up";
/**
 * Section Type of `project-config.fileNestingUpdater`
 */
export interface FileNestingUpdater {
    /**
     * The branch name of upstream repo
     */
    "upstreamBranch": string;
    /**
     * The upstream repo you want to update from
     */
    "upstreamRepo": string;
}
/**
 * Section Type of `project-config.test`
 */
export interface Test {
    /**
     * Enabled project-config inline annotations
     */
    "annotations": boolean;
    /**
     * Position the icon before or after the icon name
     */
    "position": ("after" | "before");
}
/**
 * Section Type of `virtual(Keys in the root)`
 */
export interface Root {
    /**
     * Enabled project-config inline annotations
     */
    "xxx": boolean;
}
/**
 * Section Type of `emeraldwalk`
 */
export interface Emeraldwalk {
    /**
     * Description of emeraldwalk.runonsave.
     */
    "runonsave": {
        /**
       * Automatically clear the console on each save before running commands.
       * @default `false`
       */
        'autoClearConsole': boolean;
        /**
         * Shell to execute the command with (gets passed to child_process.exec as an options arg. e.g. child_process(cmd, { shell }).
         * @default `undefined`
         */
        'shell'?: string;
        /**
         * Delimiters for separating between collection id and icon id
         * @default `[":","--","-","/"]`
         */
        'delimiters': string[];
        /**
         * Delimiters for separating between collection id and icon id
         * @default `[":","--","-","/"]`
         */
        'delimiters1': string[];
        /**
         * @default `[]`
         */
        'commands': {
            /**
       * Regex for matching files to run commands on
       * NOTE: This is a regex and not a file path spce, so backslashes have to be escaped. They also have to be escaped in json strings, so you may have to double escape them in certain cases such as targetting contents of folders.
       * e.g.
       * "match": "some\\\\directory\\\\.*"
       * @default `".*"`
       */
            'match': string;
            /**
             * Regex for matching files *not* to run commands on.
             * @default `".*"`
             */
            'notMatch': string;
            /**
             * Command to execute on save.
             * @default `"echo ${file}"`
             */
            'cmd': string;
            /**
             * Run command asynchronously.
             * @default `false`
             */
            'isAsync': boolean;
        }[];
    };
}
const defaults = {
    /**
     * Config defaults of `project-config.fileNestingUpdater`
     */
    "project-config.fileNestingUpdater": {
        /**
         * The branch name of upstream repo
         */
        "upstreamBranch": "main",
        /**
         * The upstream repo you want to update from
         */
        "upstreamRepo": "antfu/vscode-file-nesting-config",
    } satisfies FileNestingUpdater as FileNestingUpdater,
    /**
     * Config defaults of `project-config.test`
     */
    "project-config.test": {
        /**
         * Enabled project-config inline annotations
         */
        "annotations": true,
        /**
         * Position the icon before or after the icon name
         */
        "position": "before",
    } satisfies Test as Test,
    /**
     * Config defaults of `virtual(Keys in the root)`
     */
    "": {
        /**
         * Enabled project-config inline annotations
         */
        "xxx": true,
    } satisfies Root as Root,
    /**
     * Config defaults of `emeraldwalk`
     */
    "emeraldwalk": {
        /**
         * Description of emeraldwalk.runonsave.
         */
        "runonsave": { "autoClearConsole": false, "shell": undefined, "delimiters": [":", "--", "-", "/"], "delimiters1": [":", "--", "-", "/"], "commands": [] },
    } satisfies Emeraldwalk as Emeraldwalk,
};
/**
 * List of section names.
 */
export type SectionName = keyof typeof defaults;
/**
 * Shorthand of config section name.
 */
export const configs = {
    fileNestingUpdater: "project-config.fileNestingUpdater",
    test: "project-config.test",
    root: "",
    emeraldwalk: "emeraldwalk",
} satisfies Record<string, SectionName>;
/**
 * Define configurations of an extension. See `vscode::workspace.getConfiguration`.
 */
export const useConfig = memo(<Section extends SectionName>(section: Section) => defineConfigs<typeof defaults[Section]>(section, defaults[section]));
/**
 * Define configurations of an extension. See `vscode::workspace.getConfiguration`.
 */
export const useConfigObject = memo(<Section extends SectionName>(section: Section) => defineConfigObject<typeof defaults[Section]>(section, defaults[section]));
/**
 * ConfigObject<FileNestingUpdater> of `project-config.fileNestingUpdater`
 */
export const useConfigObjectFileNestingUpdater = () => useConfigObject(configs.fileNestingUpdater);
/**
 * ToConfigRefs<FileNestingUpdater> of `project-config.fileNestingUpdater`
 */
export const useConfigFileNestingUpdater = () => useConfig(configs.fileNestingUpdater);
/**
 * ConfigObject<Test> of `project-config.test`
 */
export const useConfigObjectTest = () => useConfigObject(configs.test);
/**
 * ToConfigRefs<Test> of `project-config.test`
 */
export const useConfigTest = () => useConfig(configs.test);
/**
 * ConfigObject<Root> of `virtual(Keys in the root)`
 */
export const useConfigObjectRoot = () => useConfigObject(configs.root);
/**
 * ToConfigRefs<Root> of `virtual(Keys in the root)`
 */
export const useConfigRoot = () => useConfig(configs.root);
/**
 * ConfigObject<Emeraldwalk> of `emeraldwalk`
 */
export const useConfigObjectEmeraldwalk = () => useConfigObject(configs.emeraldwalk);
/**
 * ToConfigRefs<Emeraldwalk> of `emeraldwalk`
 */
export const useConfigEmeraldwalk = () => useConfig(configs.emeraldwalk);
/**
// Import reference
import { ConfigurationTarget } from 'vscode'
import * as meta from './generated/meta'
 */
/**
//ConfigObject<Emeraldwalk> of `emeraldwalk`
//@example emeraldwalk
const emeraldwalk = meta.useConfigObjectEmeraldwalk()
const oldVal:object = emeraldwalk.runonsave //get value
emeraldwalk.$update("runonsave", oldVal, ConfigurationTarget.Global) //update value
 */
/**
//ToConfigRefs<Emeraldwalk> of `emeraldwalk`
//@example emeraldwalk
const emeraldwalk = meta.useConfigEmeraldwalk()
const oldVal:object = emeraldwalk.runonsave.value //get value
emeraldwalk.runonsave.update(oldVal, ConfigurationTarget.Global) //update value
 */ 
