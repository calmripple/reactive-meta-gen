// @ts-check
import antfu from '@antfu/eslint-config'

export default antfu(
  {
    ignores: ['fixtures/**'],
    rules: {
      'no-console': 'off',
      'style/quotes': 'off',
    },
  },
)
