'use strict'

module.exports = config => {
  return {
    babelrc: {
      plugins: [
        '@babel/plugin-syntax-import-assertions',
        '@babel/plugin-transform-runtime'
      ]
    }
  }
}
