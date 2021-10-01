'use strict'

module.exports = config => {
  return {
    extends: ['node', 'esm', 'eslint'],
    eslintrc: {
      parserOptions: {
        sourceType: 'module'
      },
      env: {
        es2021: true
      },
      rules: {
        'node/no-unsupported-features/es-syntax': 'off',
        // directory importing is not supported, keep this off for now (it wants to modify thing/index.js into thing, which is dir import)
        'unicorn/import-index': 'off',
        // this doesn't properly work yet but wants to be applied
        'unicorn/prefer-node-protocol': 'off'
      }
    }
  }
}
