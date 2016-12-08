var fs = require("fs");

//read
fs.readFile("readme.txt", function(err,data){
    if(err) return console.error(err);
    console.log(data.toString());
});

//write
fs.appendFile("readme.txt","APPEND THIS LINE\r\n", function(err){
    if(err) return console.error(err);
    console.log("line appended");
});