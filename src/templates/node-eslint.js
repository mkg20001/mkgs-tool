
module.exports = config => {
  return {
    extends: ['node', 'eslint'],
    eslintrc: {
      overrides: [
        {
          files: ['test/**/*.js'],
          env: {
            mocha: true,
          },
        },
      ],
    },
  }
}
