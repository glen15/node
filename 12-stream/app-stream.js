const fs = require('fs');
const { count } = require('node:console');

const readStream = fs.createReadStream('./file.txt', {
    highWaterMark: 8, // highWaterMark stream이 한번에 처리하는 양을 결정
    encoding: 'utf-8',
});

readStream.on('data', chunk => {
    console.log(chunk);
});

readStream.on('error', error => {
    console.log(error);
})