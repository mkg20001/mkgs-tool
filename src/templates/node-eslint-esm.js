'use strict'

module.exports = config => {
  return {
    extends: ['node', 'esmEslint'],
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
