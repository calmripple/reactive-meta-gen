// @ts-check
import antfu from '@antfu/eslint-config'

export default antfu(
  {
    type: 'lib',
    // Enable stylistic formatting rules
    // stylistic: true,

    // Or customize the stylistic rules
    stylistic: {
      indent: 2, // 4, or 'tab'
      quotes: 'single', // or 'double'
    },

    // TypeScript and Vue are autodetected, you can also explicitly enable them:
    typescript: true,
    vue: false,

    // Disable jsonc and yaml support
    jsonc: false,
    yaml: false,

    // `.eslintignore` is no longer supported in Flat config, use `ignores` instead
    ignores: [
      '**/fixtures',
      // 'src/*.ts',
      '**/eslint.config.js',
    ],
  },
  {
    rules: {
      'no-console': 'off',
      'import/order': 'off',
      'import/newline-after-import': 'off',
      'sort-imports': 'off',
      'ts/explicit-function-retrun-type': 'off',
      "@typescript-eslint/explicit-function-return-type": "off"
    },
  }
)
