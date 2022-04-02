const http = require('http');
const fs = require('fs');

const PORT = 9006;

const server = http.createServer((req, res) => {
    const path = (req.url === '/') ? '/public/html/index.html' : req.url;
    console.log(req.url);

    fs.readFile('.' + path, (error, data) => {
        if (error) {
            res.write('<h6>Error: File does not exist</h6>');
        } else {
            res.write(data);
        }
        res.end();
    });
});

server.listen(PORT);