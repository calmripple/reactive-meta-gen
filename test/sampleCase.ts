import { defineExtension, watchEffect } from 'reactive-vscode'
import { window } from 'vscode'
import { useConfigObjectSample, useCommandUpdateDate } from './output/sample'
import { useConfigObjectTest } from './output/xyz-configuration-array'

const { activate, deactivate } = defineExtension(() => {
  const configObjectSample = useConfigObjectSample()
  const configObjectTest = useConfigObjectTest()
  // another way to get the config value
  const _configValue = configObjectSample.date // get value

  watchEffect(() => {
    // watch value change
    window.showInformationMessage(`sampleConfigs.annotations.value:${configObjectSample.date}`)
    window.showInformationMessage(`testConfigs.annotations.value:${configObjectTest.annotations}`)
  })

  useCommandUpdateDate(async () => {
    // update value to ConfigurationTarget.Workspace/ConfigurationTarget.Global/ConfigurationTarget.WorkspaceFolder
    configObjectSample.$update('date', Date.now().toLocaleString())
  })
},
)

export { activate, deactivate }
