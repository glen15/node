const os = require('os');

//EOL end of line 줄바꿈문자
console.log(os.EOL === '\n'); //맥  
console.log(os.EOL === '\r\n'); //윈도우

console.log(os.totalmem());
console.log(os.freemem());
console.log(os.type());
console.log(os.userInfo());
console.log(os.cpus());
console.log(os.homedir());
console.log(os.hostname());
