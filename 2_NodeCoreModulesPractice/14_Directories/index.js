const fs = require('fs')

if (!fs.existsSync('./mydirectory')) {
  console.log('Does not exist')
}

fs.mkdirSync('mydirectory')

if (fs.existsSync('mydirectory')) {
  console.log('Exist')
}