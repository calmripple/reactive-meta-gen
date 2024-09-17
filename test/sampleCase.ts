import { defineExtension, watchEffect } from 'reactive-vscode'
import { window } from 'vscode'
import { useConfigObjectSample, useCommandUpdateDate } from './output/sample'
import { useConfigObjectTest } from './output/xyz-configuration-array'

const { activate, deactivate } = defineExtension(() => {
  const sample = useConfigObjectSample()
  const test = useConfigObjectTest()
  // another way to get the config value
  const _configValue = sample.date // get value

  watchEffect(() => {
    // watch value change
    window.showInformationMessage(`sampleConfigs.annotations.value:${sample.date}`)
    window.showInformationMessage(`testConfigs.annotations.value:${test.annotations}`)
  })

  useCommandUpdateDate(async () => {
    // update value to ConfigurationTarget.Workspace/ConfigurationTarget.Global/ConfigurationTarget.WorkspaceFolder
    sample.$update('date', Date.now().toLocaleString())
  })
},
)

export { activate, deactivate }
