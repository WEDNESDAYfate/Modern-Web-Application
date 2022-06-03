const http = require("http");
const fs = require("fs");
let indexFileBuffer;
const serveIndex = function (req, res) {
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
    res.end(indexFileBuffer);
}
fs.readFile(__dirname + "\\index.html", function (err, buffer) {
    indexFileBuffer = buffer;
    server.listen(3000, "localhost", function () {
        console.log("Server is running on http://localhost:3000");
    });
});
const server = http.createServer(serveIndex);