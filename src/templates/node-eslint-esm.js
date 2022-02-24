'use strict'

module.exports = config => {
  return {
    extends: ['node', 'esmEslint'],
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
