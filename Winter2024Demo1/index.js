const http = require('http');
const port = 3010;

const server = http.createServer((req, res) => {
    res.end('Hello World');
});

server.listen(port, () => {
    console.log(`HTTP server running at port ${port}`);
});