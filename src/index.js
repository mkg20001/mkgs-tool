'use strict'

const files = {
  gitignore: require('./files/gitignore'),
  packageJSON: require('./files/packageJSON')
}

const templates = {
  parcel: require('./templates/parcel'),
  node: require('./templates/node')
}

async function extendRecursivly (proot, config, e) {
  const c = {}
  const o = {}
  
  for (let i = 0; i < e.length; i++) {
    let template = e[i]
    if (!c[template]) {
      const out = templates[template](config[template] || {})

      if (out.extends) {
        e = e.concat(out.extends)
        delete out.extends
      }
      
      for (const key in out) {
        if (!o[key]) { o[key] = files[key].base }
        o[key] = files[key].singleAppend(template, out[key], o[key])
      }
    }
  }
  
  for (const file in o) {
    const srcFile = path.join(proot, files[file].srcFile)
    fs.writeFileSync(srcFile, files[key].stringify(files[key].join(files[key].parse(String(fs.readFileSync(srcFile))), o[file])))
  }
}

module.exports = {

}
