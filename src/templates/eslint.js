module.exports = config => {
  return {
    eslintrc: {
      extends: [
        'oclif',
        'ipfs',
      ],
      rules: {
        'no-await-in-loop': 'off',
      },
    },
    packageJSON: {
      scripts: {
        lint: 'eslint .',
        fix: 'eslint --fix .',
      },
      devDependencies: {
        eslint: '*',
        'eslint-config-ipfs': '*',
        'eslint-config-oclif': '*',
      },
    },
  }
}
