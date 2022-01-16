const fs = require("fs");

console.log("Start");

fs.writeFile('archiveAsync.txt', 'Hello', function(err){
    setTimeout(function(){
        console.log("Archive Created!");
    }, 1000)
});

console.log('End');