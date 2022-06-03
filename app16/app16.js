const http = require("http");
const fs = require("fs");

const serveAllRequests = function (req, res) {
    switch (req.url) {
        case "/json":
            res.setHeader("Content-Type", "application/json");
            res.writeHead(200);
            res.end("{'message' : 'Hello World!'}");
            break;
        case "/":
            res.setHeader("Content-Type", "text/html");
            let statusCode;
            let fileBuffer;
            fs.readFile(__dirname + "\\index.html",
                function (err, buffer) {
                    if (err) {
                        statusCode = 404;
                        fileBuffer = "File not Found";
                    } else {
                        statusCode = 200;
                        fileBuffer = buffer;
                    }
                    res.writeHead(statusCode);
                    res.end(fileBuffer);
                });
            break;

    }
}
const server =
    http.createServer(serveAllRequests);
server.listen(3000, "localhost",
    function () {
        console.log("Server is running on http://localhost:3000");
    });