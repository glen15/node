/* 
nodejs는 브라우저가 아닌 컴퓨터에서 작동하기 때문에
파일에 접근하기 좋다
그럴 때 쓰는게 path
*/

const path = require('path');



// 현재 디렉토리 이름과 파일이름

// POSIX (Unix: Mac, Linux): 'User/temp/myfile/html'
// Windows: 'C:\\temp\\myfile.html'

console.log(__dirname);
console.log(__filename);

//path 경로 구분자
console.log(path.sep);

//path 환경변수 구분자
console.log(path.delimiter);

// basename 파일명만 가져오기, 확장자빼고 이름만 가져오기
console.log(path.basename(__filename));
console.log(path.basename(__filename, '.js'));

// dirname 디렉토리 이름만 가져오기
console.log(path.dirname(__filename));

// extension 확장자만 가져오기
console.log(path.extname(__filename));

//parse 여러 정보를 나눠서 받는다. 위치 파일명 확장자 등
const parsed = path.parse(__filename);
console.log(parsed);
parsed.root;
parsed.name;

// format 기존의 경로 스트링형태로 변환
const str = path.format(parsed);
console.log(str);


// isAbsolute 절대경로인지 상대경로인지
console.log('isAbsolute?', path.isAbsolute(__dirname)); // /User/ 로 시작
console.log('isAbsolute?', path.isAbsolute('../'));


// normalize 알아서 고쳐주는거
console.log(path.normalize('./folder/////sub'));

//join 현재 디렉토리 안에 새로운 path 만들기
console.log(__dirname + path.sep + 'image');
console.log(path.join(__dirname, 'image'));