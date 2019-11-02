'use strict'

const files = {
  gitignore: require('./files/gitignore'),
  packageJSON: require('./files/packageJSON')
}

const templates = {
  parcel: require('./templates/parcel'),
  node: require('./templates/node')
}

const path = require('path')
const fs = require('fs')

function extendRecursivly (proot, config, e) {
  const c = {}
  const o = {}

  for (let i = 0; i < e.length; i++) {
    const template = e[i]
    if (!c[template]) {
      const out = templates[template](config[template] || {})

      if (out.extends) {
        e = e.concat(out.extends)
        delete out.extends
      }

      for (const key in out) { // eslint-disable-line guard-for-in
        if (!o[key]) { o[key] = files[key].base }
        o[key] = files[key].singleAppend(template, out[key], o[key])
      }
    }
  }

  for (const file in o) { // eslint-disable-line guard-for-in
    const fileType = files[file]
    const srcFile = path.join(proot, fileType.srcFile)
    fs.writeFileSync(srcFile, fileType.stringify(fileType.join(fileType.parse(String(fs.readFileSync(srcFile))), o[file])))
  }
}

module.exports = {
  extendRecursivly
}
