const fs = require("fs");

console.log("1: Get a file");
const buffer = fs.readFileSync("largerFile.txt");
console.log("2: got the file ", buffer.toString().substring(0, 21));
console.log("3: App continues... ");