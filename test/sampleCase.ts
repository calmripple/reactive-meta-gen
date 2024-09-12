import { defineExtension, watchEffect } from 'reactive-vscode'
import { window } from 'vscode'
import { configObjectSample, useCommandUpdateDate } from './output/sample'

const { activate, deactivate } = defineExtension(() => {
  // another way to get the config value
  const _configValue = configObjectSample.date // get value

  watchEffect(() => {
    // watch value change
    window.showInformationMessage(`sampleConfigs.annotations.value:${configObjectSample.date}`)
  })

  useCommandUpdateDate(async () => {
    // update value to ConfigurationTarget.Workspace/ConfigurationTarget.Global/ConfigurationTarget.WorkspaceFolder
    configObjectSample.$update('date', Date.now().toLocaleString())
  })
},
)

export { activate, deactivate }
