const fs = require('fs').promises;


// read file

fs.readFile('./text.txt', 'utf8')
  .then((data) => console.log(data))
  .catch(console.error);


// writing a file

fs.writeFile('./file2.txt', 'Hello, Dream Coders! :) ')
  .catch(console.error);

// append a text  
fs.appendFile('./file.txt', ' yoyo Hello, Dream Coders! :) ')
  .then(() => {
      //copy
      fs.copyFile('./file.txt', './file3.txt')
  })
  .catch(console.error);


// copy (비동기)그냥 이렇게 하면 위에서 append 되기도 전에 복사된 상태로 올 수 있음. 그래서 위에 then으로 다 끝난다음 복사시키는 방법 쓰도록
fs.copyFile('./file.txt', './file3.txt')
  .catch(console.error);

// folder
fs.mkdir('sub-folder')
  .catch(console.error);

  fs.readdir('./')
  .then(console.log)
  .catch(console.error);