'use strict'

module.exports = config => {
  return {
    extends: ['node', 'eslint'],
    eslintrc: {
      _overrides: {
        knex: {
          files: [
            'migrations/**/*.js',
            'seeds/**/*.js'
          ],
          rules: {
            'unicorn/filename-case': 'off'
          }
        }
      }
    }
  }
}
