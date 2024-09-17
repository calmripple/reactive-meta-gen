import { defineExtension, watchEffect } from 'reactive-vscode'
import { window } from 'vscode'
import {
  useConfigObjectRunonsave,
  useCommandUpdateDate,
  useConfigObjectInnerObject,
} from './output/sample'

const { activate, deactivate } = defineExtension(() => {
  const sample = useConfigObjectRunonsave()
  // another way to get the config value
  const _configValue = sample.shell // get value
  const inner = useConfigObjectInnerObject()
  watchEffect(() => {
    window.showErrorMessage(`sampleConfigs.shell.value:${inner.cmd}`)
    // watch value change
    window.showInformationMessage(`sampleConfigs.annotations.value:${sample.shell}`)
  })
  useCommandUpdateDate(async () => {
    // update value to ConfigurationTarget.Workspace/ConfigurationTarget.Global/ConfigurationTarget.WorkspaceFolder
    sample.$update('shell', Date.now().toLocaleString())
  })
},
)
export { activate, deactivate }
