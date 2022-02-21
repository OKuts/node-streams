const fs = require('fs');

const stream = fs.createReadStream('sea.mp4');

// stream.on('data', (chunk) => console.log(chunk));
// stream.on('end', () => console.log('end'));
// stream.on('error', (error) => console.log(error.message));
// stream.on('close', () => console.log('close'));
// stream.on('open', () => console.log('open'));

(async () => {
    for await (const chunk of stream) {
        console.log(chunk);
    }
    console.log('end')
})()
