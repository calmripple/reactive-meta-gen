// This file is generated by `reactive-meta-gen`. Do not modify manually.
// @see https://github.com/calmripple/reactive-meta-gen

// Meta info

import { defineConfigObject, defineConfigs } from 'reactive-vscode'

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
 * Config keys of `smartClicks`
 */
export interface SmartClicks {
  /**
   * The interval between clicks in milliseconds.
   * @key `smartClicks.clicksInterval`
   * @default `600`
   * @type `number`
   */
  "clicksInterval": number,
  /**
   * The delay after triggering the selection. To prevent conflicting with normal selection.
   * @key `smartClicks.triggerDelay`
   * @default `150`
   * @type `number`
   */
  "triggerDelay": number,
  /**
   * Array of language IDs to enable html smartClicks
   * @key `smartClicks.htmlLanguageIds`
   * @default `["html","vue","svelte"]`
   * @type `array`
   */
  "htmlLanguageIds": (string | undefined)[],
  /**
   * Rule toggles
   * @key `smartClicks.rules`
   * @default `{ "bracket-pair": true, "dash": true, "html-attr": true, "html-element": true, "html-tag-pair": true, "js-arrow-fn": true, "js-assign": true, "js-block": false, "js-colon": true, "jsx-tag-pair": true }`
   * @type `object`
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
     * @key `bracket-pair`
     * @default `true`
     * @type `boolean`
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
     * @key `dash`
     * @default `true`
     * @type `boolean`
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
     * @key `html-attr`
     * @default `true`
     * @type `boolean`
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
     * @key `html-element`
     * @default `true`
     * @type `boolean`
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
     * @key `html-tag-pair`
     * @default `true`
     * @type `boolean`
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
     * @key `js-arrow-fn`
     * @default `true`
     * @type `boolean`
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
     * @key `js-assign`
     * @default `true`
     * @type `boolean`
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
     * @key `js-block`
     * @default `false`
     * @type `boolean`
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
     * @key `js-colon`
     * @default `true`
     * @type `boolean`
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
     * @key `jsx-tag-pair`
     * @default `true`
     * @type `boolean`
     */
    'jsx-tag-pair': boolean },
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
    "clicksInterval": 600,
    "triggerDelay": 150,
    "htmlLanguageIds": ["html","vue","svelte"],
    "rules": { "bracket-pair": true, "dash": true, "html-attr": true, "html-element": true, "html-tag-pair": true, "js-arrow-fn": true, "js-assign": true, "js-block": false, "js-colon": true, "jsx-tag-pair": true },
  } satisfies SmartClicks,
}

/**
 * Reactive ConfigObject of `smartClicks`
 * @example
 * let configValue = smartClicksConfigObject.clicksInterval //get value 
 * smartClicksConfigObject.clicksInterval = true // set value
 * smartClicksConfigObject.$update("clicksInterval", !configValue, ConfigurationTarget.Workspace, true)
 */
export const smartClicksConfigObject = defineConfigObject<SmartClicks>(
  _smartClicks.scope,
  _smartClicks.defaults
)
/**
 * Reactive ToConfigRefs of `smartClicks`
 * @example
 * let configValue:number =smartClicksConfigs.clicksInterval.value //get value 
 * smartClicksConfigs.clicksInterval.value = 600 // set value
 * //update value to ConfigurationTarget.Workspace/ConfigurationTarget.Global/ConfigurationTarget.WorkspaceFolder
 * smartClicksConfigs.clicksInterval.update(true, ConfigurationTarget.WorkspaceFolder, true)
 */
export const smartClicksConfigs = defineConfigs<SmartClicks>(
  _smartClicks.scope,
  _smartClicks.defaults
)
