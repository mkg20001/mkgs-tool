'use strict'

module.exports = config => {
  let v2 = false
  let entries = ''

  if (config.entry) {
    v2 = false
    entries = config.entry
  } else if (config.entries) {
    v2 = true
    entries = config.entries.join(' ')
  } else {
    console.warn('Specific either template.parcel.entry or for parcel v2 template.parcel.entries (array) in package.json') // eslint-disable-line no-console
  }
  return {
    extends: ['node'],
    gitignore: ['.cache', '.parcel-cache', 'dist'],
    packageJSON: {
      scripts: config.noScripts
        ? {}
        : {
            start: `parcel ${v2 ? 'serve' : 'start'} ${entries} ${config.startFlags || ''} ${config.flags || ''}`,
            build: `rm -rf dist && parcel build ${entries} ${config.buildFlags || ''} ${config.flags || ''}`
          }
    }
  }
}
