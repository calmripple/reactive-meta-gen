# xyz-configuration-array

## Commands

| Command                                  | Title                                     |
| ---------------------------------------- | ----------------------------------------- |
| `project-config.manualUpdate`            | Project Config Updater: Update config now |
| `project-config.remove-watch-dir`        | Project Config Updater: remove watch dir  |
| `project-config.add-watch-dir`           | Project Config Updater: add watch dir     |
| `extension.emeraldwalk.enableRunOnSave`  | Run On Save: Enable                       |
| `extension.emeraldwalk.disableRunOnSave` | Run On Save: Disable                      |

## Configuration Json

```json
{
  //{ 
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
    'xxx': boolean }
  //
  "0": See package.json,

  //{ 
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
    'isAsync': boolean }[] | undefined) } }
  //
  "1": See package.json,

}
```

## Configuration

| Key | Description | Type     | Default          |
| --- | ----------- | -------- | ---------------- |
| `0` |             | `object` | See package.json |
| `1` |             | `object` | See package.json |