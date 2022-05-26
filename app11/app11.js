const http = require("http");
//const server = http.createServer();

const helloWorld = function (req, res) {
    res.setHeader("Content-Type", "text/html");

    res.writeHead(200);
    res.end(" <HTML><BODY><H1>Hello World!</H1></BODY ></HTML> ");
}

const server = http.createServer(helloWorld);
server.listen(8080, "localhost", function () {
    console.log("Server is running ");
});