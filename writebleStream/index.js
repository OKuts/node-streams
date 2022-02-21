const fs = require('fs');

const stream = fs.createWriteStream('hello.txt');
stream.on('error', (error) => console.log(error.message));
stream.write('Hello');
stream.write(' and');
// stream.end('Hello mark')
stream.end();
