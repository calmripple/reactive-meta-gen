# vscode-smart-clicks

## Commands

| Command               | Title                 |
| --------------------- | --------------------- |
| `smartClicks.trigger` | Smart Clicks: Trigger |

## Configuration Json

```json
{
  //The interval between clicks in milliseconds.
  "smartClicks.clicksInterval": 600,

  //The delay after triggering the selection. To prevent conflicting with normal selection.
  "smartClicks.triggerDelay": 150,

  //Array of language IDs to enable html smartClicks
  "smartClicks.htmlLanguageIds": ["html","vue","svelte"],

  //Pair to inner content of brackets.

```js
▽
(foo, bar)
 └──────┘
```
  "smartClicks.rules.bracket-pair": true,

  //`-` to identifier.

```css
   ▽
foo-bar
└─────┘
```
  "smartClicks.rules.dash": true,

  //`=` to HTML attribute.

```html
          ▽
<div class="btn"></div>
     └─────────┘
```
  "smartClicks.rules.html-attr": true,

  //`<` to the entire element.

```html
▽
<div><div></div></div>
└────────────────────┘
```
  "smartClicks.rules.html-element": true,

  //Open and close tags of a HTML element.

```html
 ▽
<div><div></div></div>
 └─┘              └─┘
```
  "smartClicks.rules.html-tag-pair": true,

  //`=>` to arrow function.

```js
       ▽
(a, b) => a + b
└─────────────┘
```
  "smartClicks.rules.js-arrow-fn": true,

  //`=` to assignment.

```js
        ▽
const a = []
└──────────┘
```
  "smartClicks.rules.js-assign": true,

  //Blocks like `if`, `for`, `while`, etc. in JavaScript.

```js
▽
function () {     }
└─────────────────┘
```

```js
▽
import { ref } from 'vue'
└───────────────────────┘
```
  "smartClicks.rules.js-block": false,

  //`:` to the value.

```js
     ▽
{ foo: { bar } }
       └─────┘
```
  "smartClicks.rules.js-colon": true,

  //Matches JSX elements' start and end tags.

```jsx
  ▽
(<Flex.Item>Hi</Flex.Item>)
  └───────┘     └───────┘
```
  "smartClicks.rules.jsx-tag-pair": true,

}
```

## Configuration

| Key                               | Description                                                                                                                                                                 | Type      | Default                   |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ------------------------- |
| `smartClicks.clicksInterval`      | The interval between clicks in milliseconds.                                                                                                                                | `number`  | `600`                     |
| `smartClicks.triggerDelay`        | The delay after triggering the selection. To prevent conflicting with normal selection.                                                                                     | `number`  | `150`                     |
| `smartClicks.htmlLanguageIds`     | Array of language IDs to enable html smartClicks                                                                                                                            | `array`   | `["html","vue","svelte"]` |
| `smartClicks.rules.bracket-pair`  | Pair to inner content of brackets.

```js
▽
(foo, bar)
 └──────┘
```                                                                                                        | `boolean` | `true`                    |
| `smartClicks.rules.dash`          | `-` to identifier.

```css
   ▽
foo-bar
└─────┘
```                                                                                                                         | `boolean` | `true`                    |
| `smartClicks.rules.html-attr`     | `=` to HTML attribute.

```html
          ▽
<div class="btn"></div>
     └─────────┘
```                                                                                    | `boolean` | `true`                    |
| `smartClicks.rules.html-element`  | `<` to the entire element.

```html
▽
<div><div></div></div>
└────────────────────┘
```                                                                                     | `boolean` | `true`                    |
| `smartClicks.rules.html-tag-pair` | Open and close tags of a HTML element.

```html
 ▽
<div><div></div></div>
 └─┘              └─┘
```                                                                         | `boolean` | `true`                    |
| `smartClicks.rules.js-arrow-fn`   | `=>` to arrow function.

```js
       ▽
(a, b) => a + b
└─────────────┘
```                                                                                                 | `boolean` | `true`                    |
| `smartClicks.rules.js-assign`     | `=` to assignment.

```js
        ▽
const a = []
└──────────┘
```                                                                                                           | `boolean` | `true`                    |
| `smartClicks.rules.js-block`      | Blocks like `if`, `for`, `while`, etc. in JavaScript.

```js
▽
function () {     }
└─────────────────┘
```

```js
▽
import { ref } from 'vue'
└───────────────────────┘
``` | `boolean` | `false`                   |
| `smartClicks.rules.js-colon`      | `:` to the value.

```js
     ▽
{ foo: { bar } }
       └─────┘
```                                                                                                         | `boolean` | `true`                    |
| `smartClicks.rules.jsx-tag-pair`  | Matches JSX elements' start and end tags.

```jsx
  ▽
(<Flex.Item>Hi</Flex.Item>)
  └───────┘     └───────┘
```                                                             | `boolean` | `true`                    |