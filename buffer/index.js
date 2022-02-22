const fs = require('fs');
// const zlib = require('zlib');

const readStream = fs.createReadStream('./text.txt');
const writeStream = fs.createWriteStream('.new-text.txt');
// const compressStream = zlib.createGzip();

// readStream.on('data', chunk => {
//     console.log('------------------------------------------------------------------');
//     console.log(chunk);
//     writeStream.write(chunk);
// })

// readStream.pipe(writeStream);

const handleError = () => {
    console.log('Error');
    readStream.destroy();
    writeStream.end('Finished with error...');
}

readStream
    .on('error', handleError)
    .pipe(writeStream)
    .on('error', handleError);
