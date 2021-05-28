// 콜스택과 테스크 큐를 넘나드는 타이머 관련된 것들


//1초 단위로 숫자가 계속 증가

let num = 1;
const interval = setInterval(() => {
    console.log(num++);
}, 1000);

setTimeout(() => {
    console.log('Timeout');
    clearInterval(interval);
}, 6000);