import fs from 'node:fs/promises'
import { existsSync } from 'node:fs'
import path from 'node:path'
import cac from 'cac'
import { version } from '../package.json'
import { generate } from '.'

const cli = cac()
  .version(version)

cli.command('[input]', 'Generate TypeScript files from package.json')
  .option('-o, --output <output>', 'Output file', { default: 'src/generated-meta.ts' })
  .option('-n, --namespace <namespace>', 'Generate with namespace')
  .option('-md, --readme <path>', 'The path to README.md', { default: 'README.md' })
  .option('-r, --redundant', 'Render redundant sectons ')
  .action(async (input = 'package.json', options) => {
    input = path.resolve(input)
    const rootPath = path.resolve('.')
    console.log(`Generating in '${rootPath}'`)
    console.log(`Source file '${input.replace(rootPath, '')}'`)
    const json = JSON.parse(await fs.readFile(input, 'utf-8'))
    if (!json.publisher)
      throw new Error('This package.json does not seem to be a valid VSCode extension package.json')
    const { dts, markdown } = await generate(json, options)
    const dtsfile = path.resolve(options.output)
    if (existsSync(dtsfile) && await fs.readFile(dtsfile, 'utf-8') === dts) {
      console.log(`Up to date:'${dtsfile.replace(rootPath, '')}'.`)
    }
    else {
      const outputDir = path.dirname(dtsfile)
      await fs.mkdir(outputDir, { recursive: true })
      await fs.writeFile(dtsfile, dts, 'utf-8')
      console.log(`Generate success. '${dtsfile.replace(rootPath, '')}'.`)
    }
    const readme = path.resolve(options.readme)
    if (readme && existsSync(readme) === true) {
      const raw = await fs.readFile(readme, 'utf-8')
      const content = raw
        .replace(/<!-- commands -->[\s\S]*<!-- commands -->/, `<!-- commands -->\n\n${markdown.commandsTable}\n\n<!-- commands -->`)
        .replace(/<!-- configs -->[\s\S]*<!-- configs -->/, `<!-- configs -->\n\n${markdown.configsTable}\n\n<!-- configs -->`)
        .replace(/<!-- configsJson -->[\s\S]*<!-- configsJson -->/, `<!-- configsJson -->\n\n${markdown.configsJson}\n\n<!-- configsJson -->`)
      if (!raw.includes('<!-- commands -->') && !raw.includes('<!-- configs -->') && !raw.includes('<!-- configsJson -->')) {
        console.log('Add `<!-- commands --><!-- commands -->` and `<!-- configs --><!-- configs -->`  and `<!-- configsJson --><!-- configsJson -->` to your README.md to insert commands and configurations table')
      }
      if (raw !== content && (raw.includes('<!-- commands -->') || raw.includes('<!-- configs -->') || raw.includes('<!-- configsJson -->'))) {
        await fs.writeFile(readme, content, 'utf-8')
        console.log(`Generate success. '${readme.replace(rootPath, '')}'.`)
      }
      else {
        console.log(`Up to date:'${readme.replace(rootPath, '')}'.`)
      }
    }
  })

cli.help()
cli.parse()
