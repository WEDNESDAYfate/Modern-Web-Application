const http = require("http");
//const server= http.createServer();


const helloWorldJson = function (req, res) {
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    // res.JSON
    res.end("{'message' : 'Hello World!'}");
    // res.end
}

const server = http.createServer();
server.listen(8080, "localhost", function () {
    console.log("Server is running ");
});