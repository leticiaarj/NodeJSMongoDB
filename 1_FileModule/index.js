const fileSystem = require('fs'); // File System

fileSystem.readFile('file.txt', 'utf8', (err, data) => {
    if(err){
        console.log(err);
    }
    else{
        console.log(data);
    }
});