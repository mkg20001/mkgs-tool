'use strict'

module.exports = config => {
  return {
    extends: ['node'],
    packageJSON: {
      engines: { // we also use a few more modern features that are pretty experimental
        node: '>= 16'
      },
      type: 'module'
    }
  }
}
