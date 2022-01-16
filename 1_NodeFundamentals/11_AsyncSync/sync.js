const fs = require("fs")

console.log("Start")

fs.writeFileSync('archiveSync.txt', 'Hello')

console.log('End')