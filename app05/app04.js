const fs = require("fs");

console.log("1:  App start");

 fs.readFileSync("lagerFile.txt", function(err, buffer){
    console.log("2: got the file ", buffer.toString().substring);

 });
console.log("3: App end");