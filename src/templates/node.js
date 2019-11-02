'use strict'

module.exports = (config) => {
  return {
    gitignore: [
      'node_modules',
      !config.noYarn && 'yarn-error.log',
      !config.noLock && 'package-lock.json',
      !config.noLock && !config.noYarn && 'yarn.lock'
    ],
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
