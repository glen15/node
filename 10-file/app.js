// 파일을 읽고 쓰고 변경하기

const fs = require('fs');

// 3가지 형식

// rename(...., callback(error, data))
// 비동기 : 인자들을 전달한다음 콜백함수를 전달, 필요한일들이 다 끝난 다음 콜백함수 호출

// try { renameSync(....) } catch(e) {}
// 블럭킹 : 콜백함수 전달하지 않음. 끝날때까지 다음줄로 넘아가지 않는다.
// 에러나도 반응없으니 try catch로 감싼다. 안하면 뒤로 안넘어가고 죽음

// promises.rename(),then().catch(0)

try {
    fs.renameSync('./text.txt', './file-new.text'); 
} catch (error) {
    console.error(error);
}

console.log('h1')


fs.rename('./file-new.text', './text.txt', (error) => {
    console.log(error);
});
console.log('hello2')


fs.promises
    .rename('./text2.txt', './text-new.txt')
    .then(() => console.log('Done!'))
    .catch(console.error);