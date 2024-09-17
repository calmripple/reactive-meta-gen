import { defineExtension, watchEffect } from 'reactive-vscode'
import { window } from 'vscode'
import { useConfigObjectSample, useCommandUpdateDate } from './output/sample'

const { activate, deactivate } = defineExtension(() => {
  const sample = useConfigObjectSample()
  // another way to get the config value
  const _configValue = sample.date // get value

  watchEffect(() => {
    // watch value change
    window.showInformationMessage(`sampleConfigs.annotations.value:${sample.date}`)
  })
  useCommandUpdateDate(async () => {
    // update value to ConfigurationTarget.Workspace/ConfigurationTarget.Global/ConfigurationTarget.WorkspaceFolder
    sample.$update('date', Date.now().toLocaleString())
  })
},
)
export { activate, deactivate }
