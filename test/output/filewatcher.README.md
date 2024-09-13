# filewatcher

## Commands

| Command                        | Title                      |
| ------------------------------ | -------------------------- |
| `extension.enableFileWatcher`  | File Watcher: Enable       |
| `extension.disableFileWatcher` | File Watcher: Disable      |
| `extension.focusIntoOutput`    | File Watcher: Focus Output |

## Configuration Json

```json
{
  //Automatically clear the console on each save before running commands.
  "filewatcher.autoClearConsole": false,

  //Common shell to execute the command with (gets passed to child_process.exec as an options arg. e.g. child_process(cmd, { shell }).
  "filewatcher.shell": ,

  //Returns the status bar to its normal position (after receiving a 'Success' or 'Error' status) after a some time.
  "filewatcher.isClearStatusBar": false,

  //The time after which the status returns to normal. Only works if isClearStatusBar === true. Default is 5000ms
  "filewatcher.statusBarDelay": 5000,

  //Launches event handlers of the same name with the appropriate pattern 'match' or 'notMatch' (e.g. onFileChange and onFolderChange) in synchronous or asynchronous mode.
  "filewatcher.isSyncRunEvents": false,

  //Color for success message in the status bar. Default: dark: '#25E028', light: '#18CE1B', highContrast: '#0DC610'
  "filewatcher.successTextColor": ,

  //Color for run message in the status bar. Default: dark: '#00FFFB', light: '#02D4D1', highContrast: '#03D2CE'
  "filewatcher.runTextColor": ,

  //array of commands
  "filewatcher.commands": ,

}
```

## Configuration

| Key                            | Description                                                                                                                                                             | Type      | Default |
| ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ------- |
| `filewatcher.autoClearConsole` | Automatically clear the console on each save before running commands.                                                                                                   | `boolean` | `false` |
| `filewatcher.shell`            | Common shell to execute the command with (gets passed to child_process.exec as an options arg. e.g. child_process(cmd, { shell }).                                      | `string`  | ``      |
| `filewatcher.isClearStatusBar` | Returns the status bar to its normal position (after receiving a 'Success' or 'Error' status) after a some time.                                                        | `boolean` | `false` |
| `filewatcher.statusBarDelay`   | The time after which the status returns to normal. Only works if isClearStatusBar === true. Default is 5000ms                                                           | `number`  | `5000`  |
| `filewatcher.isSyncRunEvents`  | Launches event handlers of the same name with the appropriate pattern 'match' or 'notMatch' (e.g. onFileChange and onFolderChange) in synchronous or asynchronous mode. | `boolean` | `false` |
| `filewatcher.successTextColor` | Color for success message in the status bar. Default: dark: '#25E028', light: '#18CE1B', highContrast: '#0DC610'                                                        | `string`  | ``      |
| `filewatcher.runTextColor`     | Color for run message in the status bar. Default: dark: '#00FFFB', light: '#02D4D1', highContrast: '#03D2CE'                                                            | `string`  | ``      |
| `filewatcher.commands`         | array of commands                                                                                                                                                       | `array`   | ``      |