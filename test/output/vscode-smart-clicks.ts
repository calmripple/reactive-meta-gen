/* eslint-disable */
// This file is generated by `reactive-meta-gen`. Do not modify manually.
// @see https://github.com/calmripple/reactive-meta-gen
// Meta info
import { defineConfigObject, defineConfigs, useCommand as useReactiveCommand, useCommands as useReactiveCommands, useLogger as useReactiveLogger, useOutputChannel as useReactiveOutputChannel, useStatusBarItem, useDisposable, } from 'reactive-vscode';
import type { Nullable } from 'reactive-vscode';
export const publisher = "antfu";
export const name = "smart-clicks";
export const version = "0.2.1";
export const displayName = "Smart Clicks";
export const description = "Smart selection with double clicks";
export const extensionId = "antfu.smart-clicks";
type Cache<T> = Record<string, {
    exp: number | null;
    value: T;
    dispose: () => void;
}>;
const memoize = <TArgs extends any[], TResult>(cache: Cache<TResult>, func: (...args: TArgs) => TResult, keyFunc: ((...args: TArgs) => string) | null, ttl: number | null) => {
    return function callWithMemo(...args: any): TResult {
        const key = keyFunc ? keyFunc(...args) : JSON.stringify({ args });
        const existing = cache[key];
        if (existing !== undefined) {
            if (!existing.exp)
                return existing.value;
            if (existing.exp > new Date().getTime()) {
                return existing.value;
            }
        }
        const result = func(...args);
        cache[key] = {
            exp: ttl ? new Date().getTime() + ttl : null,
            value: result,
            dispose: () => {
                delete cache[key];
            }
        };
        useDisposable(cache[key]);
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
    return memoize({}, func, options.key ?? null, options.ttl ?? null) as (...args: TArgs) => TResult;
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
export type Command = "smartClicks.trigger";
/**
 * Commands map registed by `antfu.smart-clicks`
 */
export const commands = {
    /**
     * Smart Clicks: Trigger
     * @command `smartClicks.trigger`
     */
    trigger: "smartClicks.trigger",
} satisfies Record<string, Command> as Record<string, Command>;
/**
 * Commands map registed by `antfu.smart-clicks`
 */
export const commandsInformation = {
    /**
     * Smart Clicks: Trigger
     * @command `smartClicks.trigger`
     */
    "smartClicks.trigger": { "commandShorthandName": "trigger", "title": "Smart Clicks: Trigger", "command": "smartClicks.trigger" },
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
export const useStatusBarItemFromCommand = memo((commandKey: Command) => {
    const cmd = commandsInformation[commandKey];
    return useStatusBarItem({
        id: cmd.commandShorthandName,
        command: cmd.command,
        name: cmd.command,
        text: putLeft(cmd.icon, cmd.shortTitle ?? cmd.title ?? cmd.commandShorthandName),
        tooltip: putLeft(cmd.category, ":").concat(cmd.title ?? cmd.shortTitle ?? cmd.commandShorthandName)
    });
});
/**
 * Smart Clicks: Trigger
 * @command Register a command `smartClicks.trigger`
 */
export const useCommandTrigger = (callback: (...args: any[]) => any) => useCommand(commands.trigger, callback);
/**
 * Section Type of `smartClicks`
 */
export interface SmartClicks {
    /**
     * The interval between clicks in milliseconds.
     */
    "clicksInterval": number;
    /**
     * The delay after triggering the selection. To prevent conflicting with normal selection.
     */
    "triggerDelay": number;
    /**
     * Array of language IDs to enable html smartClicks
     */
    "htmlLanguageIds": string[];
    /**
     * Rule toggles
     */
    "rules": {
        /**
       * Pair to inner content of brackets.
       *
       * ```js
       * ▽
       * (foo, bar)
       *  └──────┘
       * ```
       * @default `true`
       */
        'bracket-pair': boolean;
        /**
         * `-` to identifier.
         *
         * ```css
         *    ▽
         * foo-bar
         * └─────┘
         * ```
         * @default `true`
         */
        'dash': boolean;
        /**
         * `=` to HTML attribute.
         *
         * ```html
         *           ▽
         * <div class="btn"></div>
         *      └─────────┘
         * ```
         * @default `true`
         */
        'html-attr': boolean;
        /**
         * `<` to the entire element.
         *
         * ```html
         * ▽
         * <div><div></div></div>
         * └────────────────────┘
         * ```
         * @default `true`
         */
        'html-element': boolean;
        /**
         * Open and close tags of a HTML element.
         *
         * ```html
         *  ▽
         * <div><div></div></div>
         *  └─┘              └─┘
         * ```
         * @default `true`
         */
        'html-tag-pair': boolean;
        /**
         * `=>` to arrow function.
         *
         * ```js
         *        ▽
         * (a, b) => a + b
         * └─────────────┘
         * ```
         * @default `true`
         */
        'js-arrow-fn': boolean;
        /**
         * `=` to assignment.
         *
         * ```js
         *         ▽
         * const a = []
         * └──────────┘
         * ```
         * @default `true`
         */
        'js-assign': boolean;
        /**
         * Blocks like `if`, `for`, `while`, etc. in JavaScript.
         *
         * ```js
         * ▽
         * function () {     }
         * └─────────────────┘
         * ```
         *
         * ```js
         * ▽
         * import { ref } from 'vue'
         * └───────────────────────┘
         * ```
         * @default `false`
         */
        'js-block': boolean;
        /**
         * `:` to the value.
         *
         * ```js
         *      ▽
         * { foo: { bar } }
         *        └─────┘
         * ```
         * @default `true`
         */
        'js-colon': boolean;
        /**
         * Matches JSX elements' start and end tags.
         *
         * ```jsx
         *   ▽
         * (<Flex.Item>Hi</Flex.Item>)
         *   └───────┘     └───────┘
         * ```
         * @default `true`
         */
        'jsx-tag-pair': boolean;
    };
}
const smartClicksDefaults = {
    /**
     * Config defaults of `smartClicks`
     */
    "smartClicks": {
        /**
         * The interval between clicks in milliseconds.
         */
        "clicksInterval": 600,
        /**
         * The delay after triggering the selection. To prevent conflicting with normal selection.
         */
        "triggerDelay": 150,
        /**
         * Array of language IDs to enable html smartClicks
         */
        "htmlLanguageIds": ["html", "vue", "svelte"],
        /**
         * Rule toggles
         */
        "rules": { "bracket-pair": true, "dash": true, "html-attr": true, "html-element": true, "html-tag-pair": true, "js-arrow-fn": true, "js-assign": true, "js-block": false, "js-colon": true, "jsx-tag-pair": true },
    } satisfies SmartClicks as SmartClicks,
};
export type ConfigurationSection = keyof typeof smartClicksDefaults;
/**
 * Shorthand of config section name.
 */
export const configs = {
    smartClicks: "smartClicks",
} satisfies Record<string, ConfigurationSection>;
/**
 * Define configurations of an extension. See `vscode::workspace.getConfiguration`.
 */
export const useConfig = memo(<Section extends ConfigurationSection>(section: Section) => defineConfigs<typeof smartClicksDefaults[Section]>(section, smartClicksDefaults[section]));
/**
 * Define configurations of an extension. See `vscode::workspace.getConfiguration`.
 */
export const useConfigObject = memo(<Section extends ConfigurationSection>(section: Section) => defineConfigObject<typeof smartClicksDefaults[Section]>(section, smartClicksDefaults[section]));
/**
 * ConfigObject of `smartClicks`
 */
export const useConfigObjectSmartClicks = () => useConfigObject(configs.smartClicks);
/**
 * ToConfigRefs of `smartClicks`
 */
export const useConfigSmartClicks = () => useConfig(configs.smartClicks);
