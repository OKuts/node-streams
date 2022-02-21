const http = require('http');
const fs = require('fs');

const server = http.createServer();
// ----------------------------------------------------------
// server.on('request', (req, res) => {
//     const stream = fs.createReadStream('sea.mp4');
//     stream.on('data', chunk => res.write(chunk));
//     stream.on('end', () => res.end());
// })
// ----------------------------------------------------------
// server.on('request', (req, res) => {
//     const stream = fs.createReadStream('sea.mp4');
//     stream.on('data', chunk => {
//         const ret = res.write(chunk);
//         if (ret === false) {
//             stream.pause();
//             res.once('drain', () => stream.resume());
//         }
////     });
//     stream.on('end', () => res.end());
// })
// ----------------------------------------------------------

server.on('request', (req, res) => {
    const stream = fs.createReadStream('sea.mp41');
    stream.pipe(res);
    stream.on('error', (error) => {
        if (error.code === 'ENOENT') {
            res.statusCode = 404;
            res.end('file not found')
        } else {
            res.statusCode = 500;
            res.end('server error')
        }
    });
    req.on('aborted', () => {
        stream.destroy();
    })
})

server.listen(3000);
