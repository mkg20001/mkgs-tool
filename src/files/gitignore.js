'use strict'

module.exports = {
  base: {
    custom: []
  },
  singleAppend: (srcTemplate, res, cur) => {
    cur[srcTemplate] = res
    return cur
  },
  parse: (content) => {
    let fn = false
    let tl = false
    let cl = 'custom'

    const p = {}

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
    const out = []
    for (const key in list) { // eslint-disable-line guard-for-in
      out.push('', `# ${key}`, '')
      key[list].forEach(el => {
        if (out.indexOf(el) === -1) {
          out.push(el)
        }
      })
    }

    return out.join('\n') + '\n'
  },
  join: (o, n) => {
    n.custom = o.custom || []
  },
  srcFile: '.gitignore'
}
