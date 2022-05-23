const fs = require("fs");

console.log("1:  aPP start");

const buffer = fs.readFileSync("lagerFile.txt");
console.log("2: got the file ", buffer.toString().substring);
console.log("3: App end");