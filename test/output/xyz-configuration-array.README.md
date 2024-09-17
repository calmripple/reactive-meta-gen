# xyz-configuration-array

## Commands

| Command                                  | Title                                     |
| ---------------------------------------- | ----------------------------------------- |
| `base`                                   | Project Config Updater: Update config now |
| `manualUpdate`                           | Project Config Updater: Update config now |
| `project-config.manualUpdate`            | Project Config Updater: Update config now |
| `project-config.remove-watch-dir`        | Project Config Updater: remove watch dir  |
| `remove-watch-dir`                       | Project Config Updater: remove watch dir  |
| `project-config.add-watch-dir`           | Project Config Updater: add watch dir     |
| `extension.emeraldwalk.enableRunOnSave`  | Run On Save: Enable                       |
| `extension.emeraldwalk.disableRunOnSave` | Run On Save: Disable                      |

## Configuration Json

```json
{
  //The branch name of upstream repo
  "project-config.fileNestingUpdater.upstreamBranch": "main",

  //The upstream repo you want to update from
  "project-config.fileNestingUpdater.upstreamRepo": "antfu/vscode-file-nesting-config",

  //Enabled project-config inline annotations
  "project-config.test.annotations": true,

  //Position the icon before or after the icon name
  "project-config.test.position": "before",

  //Enabled project-config inline annotations
  "xxx": true,

  //Automatically clear the console on each save before running commands.
  "emeraldwalk.runonsave.autoClearConsole": false,

  //Shell to execute the command with (gets passed to child_process.exec as an options arg. e.g. child_process(cmd, { shell }).
  "emeraldwalk.runonsave.shell": ,

  //Delimiters for separating between collection id and icon id
  "emeraldwalk.runonsave.delimiters": [":","--","-","/"],

  //Delimiters for separating between collection id and icon id
  "emeraldwalk.runonsave.delimiters1": [":","--","-","/"],

  //
  "emeraldwalk.runonsave.commands": [],

}
```

## Configuration

| Key                                                | Description                                                                                                                 | Type      | Default                              |
| -------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------- | ------------------------------------ |
| `project-config.fileNestingUpdater.upstreamBranch` | The branch name of upstream repo                                                                                            | `string`  | `"main"`                             |
| `project-config.fileNestingUpdater.upstreamRepo`   | The upstream repo you want to update from                                                                                   | `string`  | `"antfu/vscode-file-nesting-config"` |
| `project-config.test.annotations`                  | Enabled project-config inline annotations                                                                                   | `boolean` | `true`                               |
| `project-config.test.position`                     | Position the icon before or after the icon name                                                                             | `string`  | `"before"`                           |
| `xxx`                                              | Enabled project-config inline annotations                                                                                   | `boolean` | `true`                               |
| `emeraldwalk.runonsave.autoClearConsole`           | Automatically clear the console on each save before running commands.                                                       | `boolean` | `false`                              |
| `emeraldwalk.runonsave.shell`                      | Shell to execute the command with (gets passed to child_process.exec as an options arg. e.g. child_process(cmd, { shell }). | `string`  | ``                                   |
| `emeraldwalk.runonsave.delimiters`                 | Delimiters for separating between collection id and icon id                                                                 | `array`   | `[":","--","-","/"]`                 |
| `emeraldwalk.runonsave.delimiters1`                | Delimiters for separating between collection id and icon id                                                                 | `array`   | `[":","--","-","/"]`                 |
| `emeraldwalk.runonsave.commands`                   |                                                                                                                             | `array`   | `[]`                                 |