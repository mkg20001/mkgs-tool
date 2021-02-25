#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

let cwd = process.env.INIT_CWD || process.cwd()
let pjson

while (!pjson && cwd !== '/') {
  if (fs.existsSync(path.join(cwd, 'package.json'))) {
    pjson = path.join(cwd, 'package.json')
  } else {
    cwd = path.dirname(cwd)
  }
}

if (!pjson) {
  throw new Error('No top-level package.json found!')
}

const { template } = require(pjson)
const e = template.extends
delete template.extends

const { extendRecursivly } = require('.')

extendRecursivly(cwd, template, e)
