/* eslint-disable */
// This file is generated by `reactive-meta-gen`. Do not modify manually.
// @see https://github.com/calmripple/reactive-meta-gen
// Meta info
import { defineConfigObject, defineConfigs, useCommand as useReactiveCommand, useCommands as useReactiveCommands, useLogger as useReactiveLogger, useOutputChannel as useReactiveOutputChannel, } from 'reactive-vscode';
export const publisher = "antfu";
export const name = "smart-clicks";
export const version = "0.2.1";
export const displayName = "Smart Clicks";
export const description = "Smart selection with double clicks";
export const extensionId = "antfu.smart-clicks";
/**
 * Type union of all commands
 */
export type CommandKey = "smartClicks.trigger";
/**
 * Commands map registed by `antfu.smart-clicks`
 */
export const commands = {
    /**
     * Smart Clicks: Trigger
     * @commandkey `smartClicks.trigger`
     */
    useCommandTrigger: "smartClicks.trigger",
} satisfies Record<string, CommandKey>;
/**
 * Register a command. See `vscode::commands.registerCommand`.
 */
export function useCommand(commandFullKey: CommandKey, callback: (...args: any[]) => any): void {
    return useReactiveCommand(commandFullKey, callback);
}
/**
 * Register multiple commands. See `vscode::commands.registerCommand`.
 */
export function useCommands(commands: Partial<Record<CommandKey, (...args: any[]) => any>>): void {
    return useReactiveCommands(commands);
}
export type LoggerNameType = typeof name | typeof displayName | typeof extensionId;
/**
 * Creates a logger that writes to the output channel.
 */
export function useLogger(loggerName: LoggerNameType = displayName ?? name ?? extensionId, getPrefix?: ((type: string) => string) | null) {
    return useReactiveLogger(loggerName, { 'getPrefix': getPrefix });
}
/**
 * @reactive `window.createOutputChannel`
 */
export function useOutputChannel(outputName: LoggerNameType = displayName ?? name ?? extensionId) {
    return useReactiveOutputChannel(outputName);
}
/**
 * Smart Clicks: Trigger
 * @commandkey Register a command `smartClicks.trigger`
 */
export const useCommandTrigger = (callback: (...args: any[]) => any) => useCommand(commands.useCommandTrigger, callback);
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
     * Section defaults of `smartClicks`
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
export type ConfigSecionKey = keyof typeof smartClicksDefaults;
export const configs = {
    smartClicks: "smartClicks",
} satisfies Record<string, ConfigSecionKey>;
/**
 * Define configurations of an extension. See `vscode::workspace.getConfiguration`.
 */
export function useConfig<K extends ConfigSecionKey>(section: K) {
    return defineConfigs<typeof smartClicksDefaults[K]>(section, smartClicksDefaults[section]);
}
/**
 * Define configurations of an extension. See `vscode::workspace.getConfiguration`.
 */
export function useConfigObject<K extends ConfigSecionKey>(section: K) {
    return defineConfigObject<typeof smartClicksDefaults[K]>(section, smartClicksDefaults[section]);
}
/**
 * ConfigObject of `smartClicks`
 * @example
 * const oldVal = useConfigObjectSmartClicks.clicksInterval //get value
 * useConfigObjectSmartClicks.$update("clicksInterval", oldVal) //update value
 */
export const useConfigObjectSmartClicks = () => useConfigObject(configs.smartClicks);
/**
 * ToConfigRefs of `smartClicks`
 * @example
 * const oldVal:number =useConfigSmartClicks.clicksInterval.value //get value
 * useConfigSmartClicks.clicksInterval.update(oldVal) //update value
 */
export const useConfigSmartClicks = () => useConfig(configs.smartClicks);
