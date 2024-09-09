# vscode-smart-clicks

## Commands

| Command               | Title                 |
| --------------------- | --------------------- |
| `smartClicks.trigger` | Smart Clicks: Trigger |

## Configuration Json

```json
{
  //`number`, The interval between clicks in milliseconds. 
  "smartClicks.clicksInterval": 600,

  //`number`, The delay after triggering the selection. To prevent conflicting with normal selection. 
  "smartClicks.triggerDelay": 150,

  //(string | undefined)[]
  //Array of language IDs to enable html smartClicks
  "smartClicks.htmlLanguageIds": ["html","vue","svelte"],

  //{ 
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
    'jsx-tag-pair': boolean }
  //Rule toggles
  "smartClicks.rules": See package.json,

}
```

## Configuration

| Key                           | Description                                                                             | Type     | Default                   |
| ----------------------------- | --------------------------------------------------------------------------------------- | -------- | ------------------------- |
| `smartClicks.clicksInterval`  | The interval between clicks in milliseconds.                                            | `number` | `600`                     |
| `smartClicks.triggerDelay`    | The delay after triggering the selection. To prevent conflicting with normal selection. | `number` | `150`                     |
| `smartClicks.htmlLanguageIds` | Array of language IDs to enable html smartClicks                                        | `array`  | `["html","vue","svelte"]` |
| `smartClicks.rules`           | Rule toggles                                                                            | `object` | See package.json          |