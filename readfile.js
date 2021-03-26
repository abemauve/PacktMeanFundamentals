const fs = require('fs')

var fileData = fs.readFileSync('readme.md', 'utf8')
console.log(fileData)
