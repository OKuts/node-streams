const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

const server = http.createServer((req, res) => {
    console.log('Server request');
    res.setHeader('Content-Type', 'text/html');

    const createPath = page => path.resolve(__dirname, 'views', `${page}.html`)

    let basePath = '';
    switch (req.url) {
        case '/':
        case '/home':
            basePath = createPath('index');
            break;
        case '/contacts':
            basePath = createPath('contacts');
            break;
        case '/about':
            res.statusCode = 301;
            res.setHeader('Location', '/contacts');
            res.end();
            break;
        default:
            basePath = createPath('error');
            res.statusCode = 404;
            break;
    }

    fs.readFile(basePath, (err, data) => {
        if (err) {
            console.log(err);
            res.statusCode = 500;
            res.end();
        } else {
            res.write(data);
            res.end();
        }
    })
});

server.listen(PORT, 'localhost', (error) => {
    console.log(error ? error : `Server run on port ${PORT}`);
});
