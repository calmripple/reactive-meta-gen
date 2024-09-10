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
  //`string`, The branch name of upstream repo 
  "project-config.fileNestingUpdater.upstreamBranch": "main",

  //`string`, The upstream repo you want to update from 
  "project-config.fileNestingUpdater.upstreamRepo": "antfu/vscode-file-nesting-config",

  //`boolean`, Enabled project-config inline annotations 
  "project-config.test.annotations": true,

  //("after" | "before")
  //Position the icon before or after the icon name
  "project-config.test.position": "before",

  //`boolean`, Enabled project-config inline annotations 
  "xxx": true,

  //{
/**
   * Automatically clear the console on each save before running commands.
   * @default `false`
   */
  'autoClearConsole': boolean
  /**
   * Shell to execute the command with (gets passed to child_process.exec as an options arg. e.g. child_process(cmd, { shell }).
   * @default `undefined`
   */
  'shell'?: (string | undefined)
  /**
   * Delimiters for separating between collection id and icon id
   * @default `[":","--","-","/"]`
   */
  'delimiters': (string | undefined)[]
  /**
   * Delimiters for separating between collection id and icon id
   * @default `[":","--","-","/"]`
   */
  'delimiters1': (string | undefined)[]
  /**
   * 
   * @default `undefined`
   */
  'commands'?: ({
        /**
       * Regex for matching files to run commands on 
       * 
       * NOTE: This is a regex and not a file path spce, so backslashes have to be escaped. They also have to be escaped in json strings, so you may have to double escape them in certain cases such as targetting contents of folders.
       * 
       * e.g.
       * "match": "some\\\\directory\\\\.*"
       * @default `".*"`
       */
      'match': string
      /**
       * Regex for matching files *not* to run commands on.
       * @default `".*"`
       */
      'notMatch': string
      /**
       * Command to execute on save.
       * @default `"echo ${file}"`
       */
      'cmd': string
      /**
       * Run command asynchronously.
       * @default `false`
       */
      'isAsync': boolean }[] | undefined) }
  //
  "emeraldwalk.runonsave": { "autoClearConsole": false, "shell": undefined, "delimiters": [":","--","-","/"], "delimiters1": [":","--","-","/"], "commands": undefined },

}
```

## Configuration

| Key                                                | Description                                     | Type      | Default                                                                                                                                         |
| -------------------------------------------------- | ----------------------------------------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `project-config.fileNestingUpdater.upstreamBranch` | The branch name of upstream repo                | `string`  | `"main"`                                                                                                                                        |
| `project-config.fileNestingUpdater.upstreamRepo`   | The upstream repo you want to update from       | `string`  | `"antfu/vscode-file-nesting-config"`                                                                                                            |
| `project-config.test.annotations`                  | Enabled project-config inline annotations       | `boolean` | `true`                                                                                                                                          |
| `project-config.test.position`                     | Position the icon before or after the icon name | `string`  | `"before"`                                                                                                                                      |
| `xxx`                                              | Enabled project-config inline annotations       | `boolean` | `true`                                                                                                                                          |
| `emeraldwalk.runonsave`                            |                                                 | `object`  | `{ "autoClearConsole": false, "shell": undefined, "delimiters": [":","--","-","/"], "delimiters1": [":","--","-","/"], "commands": undefined }` |