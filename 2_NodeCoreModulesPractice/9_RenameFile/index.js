const fs = require("fs");

const archive = "archive.txt";
const newArchive = "newArchive.txt";

fs.rename(archive, newArchive, function(err){
    if(err){
        console.log(err);
        return
    }
    console.log(`The archive ${archive} was renamed to ${newArchive}`);
});