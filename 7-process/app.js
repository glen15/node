// 현재 동작중인 노드의 프로세스 정보
const process = require('process');

console.log(process.execPath);
console.log(process.version);
console.log(process.pid);
console.log(process.ppid);
console.log(process.platform);
console.log(process.env);
console.log(process.uptime());
console.log(process.cwd());
console.log(process.cpuUsage());

setTimeout(() => {
    console.log('setTimeout');
}, 0)

// 지금은 아니지만 현재 진행중인 코드가 다 완료된 다음
// 내가 등록한 콜백함수를 테스크큐에 넣어달라는 것
process.nextTick(() => {
    console.log('nextTick');
})
// for 문 끝나고 위에 setTimeout보다 nextTick이 더 먼저 실행된다. 콜스택 제일 위로 올린다는 거지

for(let i = 0; i < 100 ; i++) {
    console.log('for loop');
}