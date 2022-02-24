'use strict'

module.exports = config => {
  return {
    extends: ['node', 'eslint'],
    eslintrc: {
      _overrides: {
        node: {
          files: ['test/**/*.js'],
          env: {
            mocha: true
          }
        }
      }
    }
  }
}
