'use strict'

module.exports = config => {
  return {
    babelrc: {
      plugins: [
        '@babel/plugin-syntax-import-assertions',
        '@babel/plugin-transform-runtime'
      ]
    },
    packageJSON: config.noDeps ? {} : {
      devDependencies: {
        '@babel/plugin-syntax-import-assertions': '*',
        '@babel/plugin-transform-runtime': '*'
      }
    }
  }
}
