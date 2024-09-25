import fs from 'node:fs/promises'
import { basename } from 'node:path'
import { describe, expect, it } from 'vitest'
import fg from 'fast-glob'
import { generate } from '../src'

describe('fixtures', async () => {
  const dirs = await fg([
    './fixtures/*',
  ], { onlyDirectories: true })

  for (const dir of dirs) {
    it(basename(dir), async () => {
      const json = JSON.parse(await fs.readFile(`${dir}/package.json`, 'utf-8'))

      const { dts, markdown } = generate(json, { })
      await fs.writeFile(`./test/output/${basename(dir)}.ts`, dts)
      await expect(dts).toMatchFileSnapshot(`./output/${basename(dir)}.ts`)

      const readmeLines = [
        `# ${basename(dir)}`,
        '',
        '## Commands',
        '',
        markdown.commandsTable,
        '',
        '## Configuration JSON in .vscode/settings.json',
        '',
        markdown.configsJson,
        '',
        '## Configuration',
        '',
        markdown.configsTable,
      ]
      await fs.writeFile(`./test/output/${basename(dir)}.README.md`, readmeLines.join('\n'))
      await expect(readmeLines.join('\n')).toMatchFileSnapshot(`./output/${basename(dir)}.README.md`)
    })
  }
})
