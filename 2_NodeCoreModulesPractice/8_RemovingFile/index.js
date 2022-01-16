const fs = require("fs");

fs.unlink('archive.txt', function(err){
    if(err){
        console.log(err);
        return
    }
    console.log("Archive was removed!")
})