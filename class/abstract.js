"use strict";
// abstract는 class 앞에 abstract을 붙여야함
class AbstractPerson {
    constructor() {
        this._name = "Mark";
    }
}
// 이렇게 생성 안됨
// new AbstractPerson();
class Person1 extends AbstractPerson {
    setName(name) {
        this._name = name;
    }
}
const p3 = new Person1();
p3.setName("이름");
