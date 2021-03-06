console.log("logging....");
console.clear();

// log level
console.log('log'); //개발
console.info('info'); //정보
console.warn('warn'); //경보
console.error('error'); //에러, 사용자 에러, 시스템에러

// assert 첫 인자값이 True가 아닐때만 출력
console.assert(2 === 3, 'not same!');
console.assert(2 === 2, 'same!');

// print object
const stduent = {name: 'glen', age: 31, company: {name: 'AC'}};
console.log(stduent);
console.table(stduent); //표형태로 출력
console.dir(stduent, {showHidden: true, colors: false, depth: 0});

// measuring time 성능확인하기 좋음 얼마나 걸렸는지
console.time('for loop');
for (let i = 0; i < 10; i++) {
    i++;
}
console.timeEnd('for loop');

// counting
function a() {
    console.count('a function');
}
a();
console.countReset('a function');
a();

// trace 디버깅할 때 추적하기 좋다
function f1() {
    f2();
}
function f2() {
    f3();
}
function f3() {
    console.log('f3)');
    console.trace();
}
f1();