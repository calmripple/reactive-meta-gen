import { defineExtension, watchEffect } from 'reactive-vscode'
import { window } from 'vscode'
import { configObjectSample, configSample, useCommandToggleAnnotations } from './output/sample'

const { activate, deactivate } = defineExtension(
  () => {
    watchEffect(() => {
      // watch value change
      window.showInformationMessage(`sampleConfigs.annotations.value:${configSample.annotations.value}`)
    })
    useCommandToggleAnnotations(async () => {
      // update value to ConfigurationTarget.Workspace/ConfigurationTarget.Global/ConfigurationTarget.WorkspaceFolder
      configSample.annotations.update(!configSample.annotations.value)
    })

    // another way to get the config value
    const configValue = configObjectSample.inplace // get value
    configObjectSample.inplace = true // set value
    configObjectSample.$update('inplace', !configValue)

    window.showInformationMessage(`sampleConfigObject.inplace:${configObjectSample.inplace}`)
  },
)

export { activate, deactivate }
