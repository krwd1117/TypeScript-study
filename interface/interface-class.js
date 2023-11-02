"use strict";
// 인터페이스를 클래스로 사용
class Person {
    constructor(name) {
        this.name = name;
    }
    hello() {
        console.log(`안녕하세요! ${this.name}입니다.`);
    }
}
const k = {
    name: "김정완",
    city: "서울"
};
