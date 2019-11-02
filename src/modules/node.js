'use strict'

module.exports = (config) => {
  return {
    packageJSON: {
      scripts: {
        test: 'mocha -A',
        cov: 'nyc mocha'
      },
      dependencies: {
        mocha: '*',
        nyc: '*'
      }
    }
  }
}
