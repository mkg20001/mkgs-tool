'use strict'

const mergeOptions = require('merge-options')

module.exports = {
  base: {},
  singleAppend: (srcTemplate, res, cur) {
    return mergeOptions(cur, res)
  },
  parse: JSON.parse,
  stringify: JSON.stringify,
  join: (o, n) => {
    return mergeOptions(o, n)
  }
}
