'use strict'

module.exports = {
  base: {},
  singleAppend: (srcTemplate, res, cur) => {
    cur[srcTemplate] = res
    return cur
  },
  parse: (content) => {
    let fn = false
    let tl = false
    let cl = false

    let p = {}

    content.split('\n').forEach(l => {
      if (!fn && l === '') {
        fn = true
        return
      }

      if (fn && !tl && l.startsWith('#')) {
        tl = l.substr(2)
        return
      } else if (fn && !tl) {
        fn = false
        return
      }
      
      if (fn && tl && l === '') {
        cl = tl
        fn = false
        tl = false
        p[cl] = []

        return
      } else if (fn && tl) {
        fn = false
        tl = false
        return
      }

      if (cl) {
        p[cl].push(l)
      }
    })
  },
  stringify: (list) => {
    let out = []
    for (const key in list) {
      out.push('', `# ${key}`, '')
      out.push(...key[list])
    }

    return out.join('\n') + '\n'
  },
  join: (o, n) => {
    n.custom = o.custom || []
  },
  srcFile: '.gitignore'
}
