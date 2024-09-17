/* eslint-disable */
// This file is generated by `reactive-meta-gen`. Do not modify manually.
// @see https://github.com/calmripple/reactive-meta-gen
// Meta info
import { defineConfigObject, defineConfigs, useCommand as useReactiveCommand, useCommands as useReactiveCommands, useLogger as useReactiveLogger, useOutputChannel as useReactiveOutputChannel, } from 'reactive-vscode';
export const publisher = "cnjimbo";
export const name = "project-config";
export const version = "1.1.2";
export const displayName = "Project Config Updater";
export const description = "Export current settings to workspace config file ";
export const extensionId = "cnjimbo.project-config";
/**
 * Type union of all commands
 */
export type CommandKey = "base" | "manualUpdate" | "project-config.manualUpdate" | "project-config.remove-watch-dir" | "remove-watch-dir" | "project-config.add-watch-dir" | "extension.emeraldwalk.enableRunOnSave" | "extension.emeraldwalk.disableRunOnSave";
/**
 * Commands map registed by `cnjimbo.project-config`
 */
export const commands = {
    /**
     * Update config now
     * @commandkey `base`
     */
    base: "base",
    /**
     * Update config now
     * @commandkey `manualUpdate`
     */
    manualUpdate: "manualUpdate",
    /**
     * Update config now
     * @commandkey `project-config.manualUpdate`
     */
    projectConfigManualUpdate: "project-config.manualUpdate",
    /**
     * remove watch dir
     * @commandkey `project-config.remove-watch-dir`
     */
    removeWatchDir: "project-config.remove-watch-dir",
    /**
     * remove watch dir
     * @commandkey `remove-watch-dir`
     */
    removeWatchDir_2: "remove-watch-dir",
    /**
     * add watch dir
     * @commandkey `project-config.add-watch-dir`
     */
    addWatchDir: "project-config.add-watch-dir",
    /**
     * Run On Save: Enable
     * @commandkey `extension.emeraldwalk.enableRunOnSave`
     */
    enableRunOnSave: "extension.emeraldwalk.enableRunOnSave",
    /**
     * Run On Save: Disable
     * @commandkey `extension.emeraldwalk.disableRunOnSave`
     */
    disableRunOnSave: "extension.emeraldwalk.disableRunOnSave",
} satisfies Record<string, CommandKey>;
/**
 * Register a command. See `vscode::commands.registerCommand`.
 */
export const useCommand = (commandFullKey: CommandKey, callback: (...args: any[]) => any): void => useReactiveCommand(commandFullKey, callback);
/**
 * Register multiple commands. See `vscode::commands.registerCommand`.
 */
export const useCommands = (commands: Partial<Record<CommandKey, (...args: any[]) => any>>): void => useReactiveCommands(commands);
/**
 * name type of Logger and OutputChannel
 */
export type LoggerNameType = typeof name | typeof displayName | typeof extensionId;
/**
 * Creates a logger that writes to the output channel.
 */
export const useLogger = (loggerName: LoggerNameType = displayName ?? name ?? extensionId, getPrefix?: ((type: string) => string) | null) => useReactiveLogger(loggerName, { 'getPrefix': getPrefix });
/**
 * @reactive `window.createOutputChannel`
 */
export const useOutputChannel = (outputName: LoggerNameType = displayName ?? name ?? extensionId) => useReactiveOutputChannel(outputName);
/**
 * Update config now
 * @commandkey Register a command `base`
 */
export const useCommandBase = (callback: (...args: any[]) => any) => useCommand(commands.base, callback);
/**
 * Update config now
 * @commandkey Register a command `manualUpdate`
 */
export const useCommandManualUpdate = (callback: (...args: any[]) => any) => useCommand(commands.manualUpdate, callback);
/**
 * Update config now
 * @commandkey Register a command `project-config.manualUpdate`
 */
export const useCommandProjectConfigManualUpdate = (callback: (...args: any[]) => any) => useCommand(commands.projectConfigManualUpdate, callback);
/**
 * remove watch dir
 * @commandkey Register a command `project-config.remove-watch-dir`
 */
export const useCommandRemoveWatchDir = (callback: (...args: any[]) => any) => useCommand(commands.removeWatchDir, callback);
/**
 * remove watch dir
 * @commandkey Register a command `remove-watch-dir`
 */
export const useCommandRemoveWatchDir2 = (callback: (...args: any[]) => any) => useCommand(commands.removeWatchDir_2, callback);
/**
 * add watch dir
 * @commandkey Register a command `project-config.add-watch-dir`
 */
export const useCommandAddWatchDir = (callback: (...args: any[]) => any) => useCommand(commands.addWatchDir, callback);
/**
 * Run On Save: Enable
 * @commandkey Register a command `extension.emeraldwalk.enableRunOnSave`
 */
export const useCommandEnableRunOnSave = (callback: (...args: any[]) => any) => useCommand(commands.enableRunOnSave, callback);
/**
 * Run On Save: Disable
 * @commandkey Register a command `extension.emeraldwalk.disableRunOnSave`
 */
export const useCommandDisableRunOnSave = (callback: (...args: any[]) => any) => useCommand(commands.disableRunOnSave, callback);
/**
 * Type union of Deprecated all configs
 */
export type DeprecatedConfigKey = "ww_should_not_show_up";
/**
 * Section Type of `project-config`
 */
export interface ProjectConfig {
    /**
     * The branch name of upstream repo
     */
    "fileNestingUpdater.upstreamBranch": string;
    /**
     * The upstream repo you want to update from
     */
    "fileNestingUpdater.upstreamRepo": string;
    /**
     * Enabled project-config inline annotations
     */
    "test.annotations": boolean;
    /**
     * Position the icon before or after the icon name
     */
    "test.position": ("after" | "before");
}
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
     * Automatically clear the console on each save before running commands.
     */
    "runonsave.autoClearConsole": boolean;
    /**
     * Shell to execute the command with (gets passed to child_process.exec as an options arg. e.g. child_process(cmd, { shell }).
     */
    "runonsave.shell"?: (string | undefined);
    /**
     * Delimiters for separating between collection id and icon id
     */
    "runonsave.delimiters": string[];
    /**
     * Delimiters for separating between collection id and icon id
     */
    "runonsave.delimiters1": string[];
    "runonsave.commands": ({
        /**
     * Regex for matching files to run commands on
     *
     * NOTE: This is a regex and not a file path spce, so backslashes have to be escaped. They also have to be escaped in json strings, so you may have to double escape them in certain cases such as targetting contents of folders.
     *
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
    }[] | undefined);
}
/**
 * Section Type of `emeraldwalk.runonsave`
 */
export interface Runonsave {
    /**
     * Automatically clear the console on each save before running commands.
     */
    "autoClearConsole": boolean;
    /**
     * Shell to execute the command with (gets passed to child_process.exec as an options arg. e.g. child_process(cmd, { shell }).
     */
    "shell"?: (string | undefined);
    /**
     * Delimiters for separating between collection id and icon id
     */
    "delimiters": string[];
    /**
     * Delimiters for separating between collection id and icon id
     */
    "delimiters1": string[];
    "commands": ({
        /**
     * Regex for matching files to run commands on
     *
     * NOTE: This is a regex and not a file path spce, so backslashes have to be escaped. They also have to be escaped in json strings, so you may have to double escape them in certain cases such as targetting contents of folders.
     *
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
    }[] | undefined);
}
const projectConfigDefaults = {
    /**
     * Config defaults of `project-config`
     */
    "project-config": {
        /**
         * The branch name of upstream repo
         */
        "fileNestingUpdater.upstreamBranch": "main",
        /**
         * The upstream repo you want to update from
         */
        "fileNestingUpdater.upstreamRepo": "antfu/vscode-file-nesting-config",
        /**
         * Enabled project-config inline annotations
         */
        "test.annotations": true,
        /**
         * Position the icon before or after the icon name
         */
        "test.position": "before",
    } satisfies ProjectConfig as ProjectConfig,
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
         * Automatically clear the console on each save before running commands.
         */
        "runonsave.autoClearConsole": false,
        /**
         * Shell to execute the command with (gets passed to child_process.exec as an options arg. e.g. child_process(cmd, { shell }).
         */
        "runonsave.shell": undefined,
        /**
         * Delimiters for separating between collection id and icon id
         */
        "runonsave.delimiters": [":", "--", "-", "/"],
        /**
         * Delimiters for separating between collection id and icon id
         */
        "runonsave.delimiters1": [":", "--", "-", "/"],
        "runonsave.commands": [],
    } satisfies Emeraldwalk as Emeraldwalk,
    /**
     * Config defaults of `emeraldwalk.runonsave`
     */
    "emeraldwalk.runonsave": {
        /**
         * Automatically clear the console on each save before running commands.
         */
        "autoClearConsole": false,
        /**
         * Shell to execute the command with (gets passed to child_process.exec as an options arg. e.g. child_process(cmd, { shell }).
         */
        "shell": undefined,
        /**
         * Delimiters for separating between collection id and icon id
         */
        "delimiters": [":", "--", "-", "/"],
        /**
         * Delimiters for separating between collection id and icon id
         */
        "delimiters1": [":", "--", "-", "/"],
        "commands": [],
    } satisfies Runonsave as Runonsave,
};
export type ConfigSecionKey = keyof typeof projectConfigDefaults;
/**
 * Shorthand of config section name.
 */
export const configs = {
    projectConfig: "project-config",
    fileNestingUpdater: "project-config.fileNestingUpdater",
    test: "project-config.test",
    root: "",
    emeraldwalk: "emeraldwalk",
    runonsave: "emeraldwalk.runonsave",
} satisfies Record<string, ConfigSecionKey>;
/**
 * Define configurations of an extension. See `vscode::workspace.getConfiguration`.
 */
export const useConfig = <K extends ConfigSecionKey>(section: K) => defineConfigs<typeof projectConfigDefaults[K]>(section, projectConfigDefaults[section]);
/**
 * Define configurations of an extension. See `vscode::workspace.getConfiguration`.
 */
export const useConfigObject = <K extends ConfigSecionKey>(section: K) => defineConfigObject<typeof projectConfigDefaults[K]>(section, projectConfigDefaults[section]);
/**
 * ConfigObject of `project-config`
 * @example
 * const projectConfig = useConfigObjectProjectConfig()
 * const oldVal:string = projectConfig.fileNestingUpdater.upstreamBranch //get value
 * projectConfig.$update("fileNestingUpdater.upstreamBranch", oldVal) //update value
 */
export const useConfigObjectProjectConfig = () => useConfigObject(configs.projectConfig);
/**
 * ToConfigRefs of `project-config`
 * @example
 * const projectConfig = useConfigProjectConfig()
 * const oldVal:string = projectConfig.fileNestingUpdater.upstreamBranch.value //get value
 * projectConfig.fileNestingUpdater.upstreamBranch.update(oldVal) //update value
 */
export const useConfigProjectConfig = () => useConfig(configs.projectConfig);
/**
 * ConfigObject of `project-config.fileNestingUpdater`
 * @example
 * const fileNestingUpdater = useConfigObjectFileNestingUpdater()
 * const oldVal:string = fileNestingUpdater.upstreamBranch //get value
 * fileNestingUpdater.$update("upstreamBranch", oldVal) //update value
 */
export const useConfigObjectFileNestingUpdater = () => useConfigObject(configs.fileNestingUpdater);
/**
 * ToConfigRefs of `project-config.fileNestingUpdater`
 * @example
 * const fileNestingUpdater = useConfigFileNestingUpdater()
 * const oldVal:string = fileNestingUpdater.upstreamBranch.value //get value
 * fileNestingUpdater.upstreamBranch.update(oldVal) //update value
 */
export const useConfigFileNestingUpdater = () => useConfig(configs.fileNestingUpdater);
/**
 * ConfigObject of `project-config.test`
 * @example
 * const test = useConfigObjectTest()
 * const oldVal:boolean = test.annotations //get value
 * test.$update("annotations", oldVal) //update value
 */
export const useConfigObjectTest = () => useConfigObject(configs.test);
/**
 * ToConfigRefs of `project-config.test`
 * @example
 * const test = useConfigTest()
 * const oldVal:boolean = test.annotations.value //get value
 * test.annotations.update(oldVal) //update value
 */
export const useConfigTest = () => useConfig(configs.test);
/**
 * ConfigObject of `virtual(Keys in the root)`
 * @example
 * const root = useConfigObjectRoot()
 * const oldVal:boolean = root.xxx //get value
 * root.$update("xxx", oldVal) //update value
 */
export const useConfigObjectRoot = () => useConfigObject(configs.root);
/**
 * ToConfigRefs of `virtual(Keys in the root)`
 * @example
 * const root = useConfigRoot()
 * const oldVal:boolean = root.xxx.value //get value
 * root.xxx.update(oldVal) //update value
 */
export const useConfigRoot = () => useConfig(configs.root);
/**
 * ConfigObject of `emeraldwalk`
 * @example
 * const emeraldwalk = useConfigObjectEmeraldwalk()
 * const oldVal:boolean = emeraldwalk.runonsave.autoClearConsole //get value
 * emeraldwalk.$update("runonsave.autoClearConsole", oldVal) //update value
 */
export const useConfigObjectEmeraldwalk = () => useConfigObject(configs.emeraldwalk);
/**
 * ToConfigRefs of `emeraldwalk`
 * @example
 * const emeraldwalk = useConfigEmeraldwalk()
 * const oldVal:boolean = emeraldwalk.runonsave.autoClearConsole.value //get value
 * emeraldwalk.runonsave.autoClearConsole.update(oldVal) //update value
 */
export const useConfigEmeraldwalk = () => useConfig(configs.emeraldwalk);
/**
 * ConfigObject of `emeraldwalk.runonsave`
 * @example
 * const runonsave = useConfigObjectRunonsave()
 * const oldVal:boolean = runonsave.autoClearConsole //get value
 * runonsave.$update("autoClearConsole", oldVal) //update value
 */
export const useConfigObjectRunonsave = () => useConfigObject(configs.runonsave);
/**
 * ToConfigRefs of `emeraldwalk.runonsave`
 * @example
 * const runonsave = useConfigRunonsave()
 * const oldVal:boolean = runonsave.autoClearConsole.value //get value
 * runonsave.autoClearConsole.update(oldVal) //update value
 */
export const useConfigRunonsave = () => useConfig(configs.runonsave);
