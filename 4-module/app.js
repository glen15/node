const counter = require('./counter.js')
//require 을 이용해서 counter.js 불러오기
//counter.js 에서 increase, getCount를 export해뒀지


counter.increase();
console.log(counter.getCount());

