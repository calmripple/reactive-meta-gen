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

  //`string[]`, Array of language IDs to enable html smartClicks 
  "smartClicks.htmlLanguageIds": ["html","vue","svelte"],

  //{ 'bracket-pair': boolean; 'dash': boolean; 'html-attr': boolean; 'html-element': boolean; 'html-tag-pair': boolean; 'js-arrow-fn': boolean; 'js-assign': boolean; 'js-block': boolean; 'js-colon': boolean; 'jsx-tag-pair': boolean }
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