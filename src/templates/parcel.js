'use strict'

module.exports = (config) => {
  return {
    extends: ['node'],
    gitignore: ['.cache', '.parcel-cache', 'dist'],
    packageJSON: {
      scripts: config.noScripts ? {} : {
        start: `parcel start ${config.entry} ${config.startFlags || ''} ${config.flags || ''}`,
        build: `parcel build ${config.entry} ${config.buildFlags || ''} ${config.flags || ''}`
      }
    }
  }
}
