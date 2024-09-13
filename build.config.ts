import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    'src/index',
    'src/cli',
  ],
  declaration: true,
  clean: true,
  externals: ['reactive-vscode', 'typescript', 'radash', 'cac', 'node:path', 'node:fs', 'node:fs/promises'],

})
