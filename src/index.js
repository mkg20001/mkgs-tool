
const files = {
  babelrc: require('./files/babelrc'),
  eslintrc: require('./files/eslintrc'),
  gitignore: require('./files/gitignore'),
  packageJSON: require('./files/package-json')
}

const templates = {
  babel: require('./templates/babel'),
  eslint: require('./templates/eslint'),
  nix: require('./templates/nix'),
  node: require('./templates/node'),
  nodeEslint: require('./templates/node-eslint'),
  parcel: require('./templates/parcel'),
  parcelBabel: require('./templates/parcel-babel'),
  parcelBabelEslint: require('./templates/parcel-babel-eslint'),
  parcelEslint: require('./templates/parcel-eslint')
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
        if (!o[key]) {
          o[key] = files[key].base
        }

        o[key] = files[key].singleAppend(template, out[key], o[key])
      }
    }
  }

  for (const file in o) { // eslint-disable-line guard-for-in
    const fileType = files[file]
    const srcFile = path.join(proot, fileType.srcFile)
    const old = fs.existsSync(srcFile) ? fileType.parse(String(fs.readFileSync(srcFile))) : fileType.base
    fs.writeFileSync(srcFile, fileType.stringify(fileType.join(old, o[file])))
  }
}

module.exports = {
  extendRecursivly
}
