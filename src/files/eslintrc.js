'use strict'

const mergeOptions = require('merge-options')

module.exports = {
  base: {},
  singleAppend: (srcTemplate, res, cur) => {
    return mergeOptions(cur, res)
  },
  parse: JSON.parse,
  stringify: o => JSON.stringify(o, null, 2) + '\n',
  join: (o, n) => {
    return mergeOptions(o, n)
  },
  srcFile: '.eslintrc'
}
