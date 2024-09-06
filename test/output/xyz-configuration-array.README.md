# xyz-configuration-array

## Commands

| Command                           | Title                                     |
| --------------------------------- | ----------------------------------------- |
| `project-config.manualUpdate`     | Project Config Updater: Update config now |
| `project-config.remove-watch-dir` | Project Config Updater: remove watch dir  |
| `project-config.add-watch-dir`    | Project Config Updater: add watch dir     |

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

  //`boolean`, Enabled project-config inline annotations 
  "project-config2.test.annotations": true,

  //`boolean`, Enabled project-config inline annotations 
  "yyyy": true,

}
```

## Configuration

| Key                                                | Description                                     | Type      | Default                              |
| -------------------------------------------------- | ----------------------------------------------- | --------- | ------------------------------------ |
| `project-config.fileNestingUpdater.upstreamBranch` | The branch name of upstream repo                | `string`  | `"main"`                             |
| `project-config.fileNestingUpdater.upstreamRepo`   | The upstream repo you want to update from       | `string`  | `"antfu/vscode-file-nesting-config"` |
| `project-config.test.annotations`                  | Enabled project-config inline annotations       | `boolean` | `true`                               |
| `project-config.test.position`                     | Position the icon before or after the icon name | `string`  | `"before"`                           |
| `xxx`                                              | Enabled project-config inline annotations       | `boolean` | `true`                               |
| `project-config2.test.annotations`                 | Enabled project-config inline annotations       | `boolean` | `true`                               |
| `yyyy`                                             | Enabled project-config inline annotations       | `boolean` | `true`                               |