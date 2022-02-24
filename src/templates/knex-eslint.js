'use strict'

module.exports = config => {
  return {
    extends: ['node', 'eslint'],
    eslintrc: {
      overrides: [
    {
      "files": [
        "migrations/**/*.js",
        "seeds/**/*.js"
      ],
      "rules": {
        "unicorn/filename-case": "off"
      }
    }
      ]
    }
  }
}
