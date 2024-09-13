import { useConfig, useCommandBase, useCommandAddWatchDir } from './output/xyz-configuration-array'
import { defineExtension } from 'reactive-vscode'

const { activate, deactivate } = defineExtension(() => {
  const test = useConfig('project-config.fileNestingUpdater')

  test.upstreamBranch.value = 'aaa'
  test.upstreamRepo.value = 'vvv'

  useCommandBase('project-config.manualUpdate', () => {

  })

  useCommandAddWatchDir(() => {

  })
})

export default { activate, deactivate }
