
module.exports = config => {
  return {
    extends: ['parcel', 'eslint'],
    eslintrc: {
      overrides: [
        {
          files: ['public/**/*.js'],
          env: {
            browser: true
          }
        }
      ]
    }
  }
}
