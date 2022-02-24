'use strict'

const mergeOptions = require('merge-options')

module.exports = {
  base: {},
  singleAppend: (srcTemplate, res, cur) => {
    return mergeOptions(cur, res)
  },
  parse: JSON.parse,
  stringify: o => {
    if (o._overrides) {
      o.overrides = Object.values(o._overrides)
      delete o._overrides
    }

    return JSON.stringify(o, null, 2) + '\n'
  },
  join: (o, n) => {
    return mergeOptions(o, n)
  },
  srcFile: '.eslintrc'
}
