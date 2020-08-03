'use strict'

module.exports = config => {
  return {
    eslintrc: {
      extends: [
        'oclif',
        'aegir-standalone'
      ],
      rules: {
        'no-await-in-loop': 'off'
      }
    },
    packageJSON: {
      scripts: {
        lint: 'eslint .',
        fix: 'eslint --fix .'
      },
      devDependencies: {
        eslint: '*',
        'eslint-config-aegir-standalone': '*',
        'eslint-config-oclif': '*'
      }
    }
  }
}
