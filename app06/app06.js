const fs = require("fs");
const { buffer } = require("stream/consumers");
const printFileFirstLine = function (err, file) {
    console.log("Got the file", buffer.toString().substring(0, 21));
}
console.log("1:Get a file");
fs.readFile("longFile.txt", printFileFirstLine);
console.log("3: App continus...");