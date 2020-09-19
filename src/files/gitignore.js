
module.exports = {
  base: {
    custom: ['## add your entries'],
  },
  singleAppend: (srcTemplate, res, cur) => {
    cur[srcTemplate] = res
    return cur
  },
  parse: content => {
    let fn = false
    let tl = false
    let cl = 'custom'

    const p = {custom: []}

    content.replace(/\r/g, '').split('\n').forEach(l => {
      if (!fn && l === '') {
        fn = true
        return
      }

      if (fn && !tl && l.startsWith('#')) {
        tl = l.substr(2)
        return
      }

      if (fn && !tl) {
        fn = false
        return
      }

      if (fn && tl && l === '') {
        cl = tl
        fn = false
        tl = false
        p[cl] = []

        return
      }

      if (fn && tl) {
        fn = false
        tl = false
        return
      }

      if (cl) {
        p[cl].push(l)
      }
    })

    return p
  },
  stringify: list => {
    const out = []
    for (const key in list) { // eslint-disable-line guard-for-in
      out.push('', `# ${key}`, '')
      list[key].forEach(el => {
        if (out.indexOf(el) === -1) {
          out.push(el)
        }
      })
    }

    return out.join('\n') + '\n'
  },
  join: (o, n) => {
    n.custom = o.custom || []
    return n
  },
  srcFile: '.gitignore',
}
