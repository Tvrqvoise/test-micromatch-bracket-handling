const mm = require('micromatch')

const file = 'foo/bar/baz.js'
const patterns = [
  'foo/**/*.{js}',
  'foo/**/*.{js|ts}',
  'foo/**.js'
]
	
patterns.forEach(pattern => console.log(`
  ${pattern}:\t${mm.any(file, pattern)}
`))
