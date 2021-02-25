
module.exports = config => {
  return {
    gitignore: [ // TODO: possibly consider renaming it from no to allow?
      'node_modules',
      !config.noYarn && 'yarn-error.log',
      !config.noLock && !config.noNodeLock && 'package-lock.json',
      !config.noLock && !config.noYarnLock && !config.noYarn && 'yarn.lock'
    ],
    packageJSON: config.noTools
      ? {}
      : {
          scripts: {
            test: 'mocha -A',
            cov: 'nyc mocha'
          },
          devDependencies: {
            mocha: '*',
            nyc: '*'
          }
        }
  }
}
