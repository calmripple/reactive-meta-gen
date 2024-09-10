/* eslint-disable */
// This file is generated by `reactive-meta-gen`. Do not modify manually.
// @see https://github.com/calmripple/reactive-meta-gen

// Meta info

import { defineConfigObject, defineConfigs, useCommand } from 'reactive-vscode'

export const publisher = "antfu"
export const name = "smart-clicks"
export const version = "0.2.1"
export const displayName = "Smart Clicks"
export const description = "Smart selection with double clicks"
export const extensionId = `${publisher}.${name}`

/**
 * Type union of all commands
 */
export type CommandKey = 
  | "smartClicks.trigger"

/**
 * Commands map registed by `antfu.smart-clicks`
 */
export const commands = {
  /**
   * Smart Clicks: Trigger
   * @value `smartClicks.trigger`
   * @example
   * useCommand(commands.trigger, async () => {
   *   //do actions or update config 
   * })
   */
  trigger: "smartClicks.trigger",
} satisfies Record<string, CommandKey>
/**
 * Smart Clicks: Trigger
 * @value `smartClicks.trigger`
 */
export function useCommandTrigger(callback: (...args: any[]) => any) {
  useCommand(commands.trigger, callback)
}


/**
 * Config keys of `smartClicks`
 */
export interface SmartClicks {
  /**
   * The interval between clicks in milliseconds.
   * @default 600
   */
  "clicksInterval": number,
  /**
   * The delay after triggering the selection. To prevent conflicting with normal selection.
   * @default 150
   */
  "triggerDelay": number,
  /**
   * Array of language IDs to enable html smartClicks
   * @default ["html","vue","svelte"]
   */
  "htmlLanguageIds": string[],
  /**
   * Rule toggles
   * @default { "bracket-pair": true, "dash": true, "html-attr": true, "html-element": true, "html-tag-pair": true, "js-arrow-fn": true, "js-assign": true, "js-block": false, "js-colon": true, "jsx-tag-pair": true }
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
    'bracket-pair': boolean
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
    'dash': boolean
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
    'html-attr': boolean
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
    'html-element': boolean
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
    'html-tag-pair': boolean
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
    'js-arrow-fn': boolean
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
    'js-assign': boolean
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
    'js-block': boolean
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
    'js-colon': boolean
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
    'jsx-tag-pair': boolean 
  },
}

/**
 * Scoped defaults of `smartClicks`
 */
const _smartClicks = {
  /**
   * scope: `smartClicks`
   */
  scope: "smartClicks",
  /**
   * Keys' defaults of `smartClicks`
   */
  defaults: {
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
    "htmlLanguageIds": ["html","vue","svelte"],
    /**
     * Rule toggles
     */
    "rules": { "bracket-pair": true, "dash": true, "html-attr": true, "html-element": true, "html-tag-pair": true, "js-arrow-fn": true, "js-assign": true, "js-block": false, "js-colon": true, "jsx-tag-pair": true },
  } satisfies SmartClicks,
}

/**
 * Reactive ConfigObject of `smartClicks`
 * @example
 * const configValue = useConfigObjectSmartClicks.clicksInterval //get value 
 * useConfigObjectSmartClicks.clicksInterval = true // set value
 * useConfigObjectSmartClicks.$update("clicksInterval", !configValue, ConfigurationTarget.Workspace, true)
 */
export const useConfigObjectSmartClicks = defineConfigObject<SmartClicks>(
  _smartClicks.scope,
  _smartClicks.defaults
)
/**
 * Reactive ToConfigRefs of `smartClicks`
 * @example
 * const configValue:number =useConfigsSmartClicks.clicksInterval.value //get value 
 * useConfigsSmartClicks.clicksInterval.value = 600 // set value
 * //update value to ConfigurationTarget.Workspace/ConfigurationTarget.Global/ConfigurationTarget.WorkspaceFolder
 * useConfigsSmartClicks.clicksInterval.update(true, ConfigurationTarget.WorkspaceFolder, true)
 */
export const useConfigsSmartClicks = defineConfigs<SmartClicks>(
  _smartClicks.scope,
  _smartClicks.defaults
)
