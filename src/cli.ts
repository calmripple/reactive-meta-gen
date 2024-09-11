import fs from 'node:fs/promises'
import { existsSync } from 'node:fs'
import path from 'node:path'
import cac from 'cac'
import { version } from '../package.json'
import { generate } from '.'
import { execSync } from 'node:child_process';

const cli = cac()
  .version(version)

cli.command('[input]', 'Generate TypeScript files from package.json')
  .option('--output <output>', 'Output file', { default: 'src/generated-meta.ts' })
  .option('--namespace <namespace>', 'Generate with namespace')
  .option('--section <section>', 'The extension section for commands and configs')
  .option('--readme <path>', 'The path to README.md', { default: 'README.md' })
  .action(async (input = 'package.json', options) => {
    const json = JSON.parse(await fs.readFile(input, 'utf-8'))
    if (!json.publisher)
      throw new Error('This package.json does not seem to be a valid VSCode extension package.json')
    const { dts, markdown } = await generate(json, {
      namespace: options.namespace === 'false' ? false : options.namespace,
      extensionSection: options.section,
    })
    if (existsSync(options.output) && await fs.readFile(options.output, 'utf-8') === dts) {
      console.log(`No changes of '${input}','${options.output}' is up to date.`)
    } else {
      const outputDir = path.dirname(options.output)
      await fs.mkdir(outputDir, { recursive: true })
      await fs.writeFile(options.output, dts, 'utf-8')
    }

    if (options.readme && options.readme !== 'false') {
      const raw = await fs.readFile(options.readme, 'utf-8')
      const content = raw
        .replace(/<!-- commands -->[\s\S]*<!-- commands -->/, `<!-- commands -->\n\n${markdown.commandsTable}\n\n<!-- commands -->`)
        .replace(/<!-- configs -->[\s\S]*<!-- configs -->/, `<!-- configs -->\n\n${markdown.configsTable}\n\n<!-- configs -->`)
        .replace(/<!-- configsJson -->[\s\S]*<!-- configsJson -->/, `<!-- configsJson -->\n\n${markdown.configsJson}\n\n<!-- configsJson -->`)

      if (raw === content && !raw.includes('<!-- commands -->') && !raw.includes('<!-- configs -->') && !raw.includes('<!-- configsJson -->')) {
        // eslint-disable-next-line no-console
        console.log('Add `<!-- commands --><!-- commands -->` and `<!-- configs --><!-- configs -->`  and `<!-- configsJson --><!-- configsJson -->` to your README.md to insert commands and configurations table')
      }
      else {
        await fs.writeFile(options.readme, content, 'utf-8')
      }
    }
  })

cli.help()
cli.parse()
