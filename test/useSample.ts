import { defineExtension } from 'reactive-vscode'
import { useCommand, useCommandAddWatchDir, useConfig } from './output/xyz-configuration-array'

const { activate, deactivate } = defineExtension(() => {
  const test = useConfig('project-config.fileNestingUpdater')

  test.upstreamBranch.value = 'aaa'
  test.upstreamRepo.value = 'vvv'

  useCommand('project-config.manualUpdate', () => {

  })

  useCommandAddWatchDir(() => {

  })
})

export default { activate, deactivate }
