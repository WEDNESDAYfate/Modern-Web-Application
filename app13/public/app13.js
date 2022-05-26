const http = require("http");

const fs = require("fs");

let indexFileBuffer = "file not read year";

fs.readFile("index.html", function (err, buffer) {
    indexFileBuffer = buffer;
});

const serverIndexFile = function (req, res) {
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
    res.end(buffer);

}
const readIndexAndServe = function (req, res) {
    const buffer = fs.readFileSync("index.html", function (err, buffer) {
        res.setHeader("Content-Type", "text/html");
        res.writeHead(200);
        res.end(buffer);

    });


    fs.readFile(__dirname + "\\public\\index.html", function (err, buffer) {
        res.setHeader("Content-Type", "text/html");
        //     res.writeHead(200);
        //     res.end(buffer);
    });
}
const server = http.createServer(readIndexAndServe);