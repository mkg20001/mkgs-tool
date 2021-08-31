'use strict'

module.exports = config => {
  return {
    extends: ['node', 'esm-eslint'],
    eslintrc: {
      overrides: [
        {
          files: ['test/**/*.js'],
          env: {
            mocha: true
          }
        }
      ]
    }
  }
}
