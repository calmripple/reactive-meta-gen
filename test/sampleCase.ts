import { defineExtension, watchEffect } from 'reactive-vscode'
import { window } from 'vscode'
import {
  useCommandUpdateDate,
  useConfigObjectEmeraldwalk,
} from './output/sample'

const { activate, deactivate } = defineExtension(() => {
  const sample = useConfigObjectEmeraldwalk()
  // another way to get the config value
  const _configValue = sample.runonsave // get value
  watchEffect(() => {
    window.showErrorMessage(`sampleConfigs.shell.value:${_configValue.autoClearConsole}`)
    // watch value change
    window.showInformationMessage(`sampleConfigs.annotations.value:${_configValue.autoClearConsole}`)
  })
  useCommandUpdateDate(async () => {
    // update value to ConfigurationTarget.Workspace/ConfigurationTarget.Global/ConfigurationTarget.WorkspaceFolder
    sample.$update('runonsave', _configValue)
  })
},
)
export { activate, deactivate }
