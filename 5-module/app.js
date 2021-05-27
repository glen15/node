import {increase, getCount} from './counter.js';

increase();
console.log(getCount());


/* *로 한번에 다가져오기

import * as counter from './counter.js';

counter.increase();
console.log(counter.getCount());

*/