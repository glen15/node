function hello() {
    console.log(this);
    console.log(this === global);
}
// 함수안에서 this는 global
hello();

class A {
    constructor(num) {
        this.num = num;
    }
    memberFunction(){
        console.log('----- class -----');
        console.log(this);
        console.log(this === global);
    }
}

// class에서 this 는 class 자기 자신을 가리키는것 global은 아니다


const a = new A(1);
a.memberFunction();

console.log('--- global scope ---');
console.log(this);
console.log(this === module.exports);

// node 에서 this는 module.exports

// this 는 사용 문맥에 따라 다르다!