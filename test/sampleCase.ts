import { defineExtension, useCommands, watchEffect } from 'reactive-vscode'
import { window } from 'vscode'
import { commands, sampleConfigObject, sampleConfigs } from './output/sample'

const { activate, deactivate } = defineExtension(
  () => {
    watchEffect(() => {
      // watch value change
      window.showInformationMessage(`sampleConfigs.annotations.value:${sampleConfigs.annotations.value}`)
    })
    useCommands({
      [commands.toggleAnnotations]: async () => {
        // update value to ConfigurationTarget.Workspace/ConfigurationTarget.Global/ConfigurationTarget.WorkspaceFolder
        sampleConfigs.annotations.update(!sampleConfigs.annotations.value)
      },
    })

    // another way to get the config value
    const configValue = sampleConfigObject.inplace // get value
    sampleConfigObject.inplace = true // set value
    sampleConfigObject.$update('inplace', !configValue)

    window.showInformationMessage(`sampleConfigObject.inplace:${sampleConfigObject.inplace}`)
  },
)

export { activate, deactivate }
