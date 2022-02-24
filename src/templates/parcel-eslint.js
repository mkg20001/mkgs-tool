'use strict'

module.exports = config => {
  return {
    extends: ['parcel', 'eslint'],
    eslintrc: {
      _overrides: {
        parcel: {
          files: ['public/**/*.js'],
          env: {
            browser: true
          },
          parserOptions: {
            sourceType: 'module'
          },
          rules: {
            'node/no-unsupported-features/es-syntax': 'off'
          }
        }
      }
    }
  }
}
