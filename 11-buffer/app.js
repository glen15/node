// Fixed-size chuck of memory
// array of integers, byte of data

const buf = Buffer.from('Hi');
console.log(buf); //유니코드 형태 출력
console.log(buf.length);
console.log(buf[0]); //아스키 코드 형태 출력
console.log(buf[1]);
console.log(buf.toString());

// create

const buf2 = Buffer.alloc(2);
const buf3 = Buffer.allocUnsafe(2); //초기화하지 않음 그래서 빠름
buf2[0] = 72;
buf2[1] = 105;
buf2.copy(buf3);
console.log(buf2.toString());
console.log(buf3.toString());


// concat
const newBf = Buffer.concat([buf, buf2, buf3]);
console.log(newBf.toString());