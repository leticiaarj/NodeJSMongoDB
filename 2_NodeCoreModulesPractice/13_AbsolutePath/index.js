const path = require('path')

// path absolute
console.log(path.resolve('test.txt'))

// form path
const midFolder = 'reports'
const fileName = 'leticia.txt'

const finalPath = path.join('/', 'archives', midFolder, fileName)

console.log(finalPath)