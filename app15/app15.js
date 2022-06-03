const http = require("http");
const fs = require("fs");
let statusCode;
let indexFileBuffer;



const serveIndex = function (req, res) {
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
    res.end(indexFileBuffer);
    res.writeHead(statusCode);
}

fs.readFile(__dirname + "\\index.html", function (err, buffer) {
    if (err) {
        indexFileBuffer = "File not found";
        statusCode = 404;
    } else {
        indexFileBuffer = buffer;
        statusCode = 200;
    }
    server.listen(3000, "localhost", function () {
        console.log("Server is running on http://localhost:3000");
    });
})
const server = http.createServer(serveIndex);