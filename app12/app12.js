const http = require("http");


const helloWorldJson = function (req, res) {
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    res.JSON
    res.end(JSON.parse("{'message' : 'Hello World!'}"));
    res.end
}

const server = http.createServer(helloWorld);
server.listen(8080, "localhost", function () {
    console.log("Server is running ");
});