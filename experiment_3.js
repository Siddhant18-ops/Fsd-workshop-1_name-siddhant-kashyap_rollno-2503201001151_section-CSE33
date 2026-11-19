const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/plain",
        "Server": "node.js"
    });

    res.end("Hello, World!");
});

const PORT = 3007;

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});