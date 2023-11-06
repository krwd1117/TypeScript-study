"use strict";
class Parent {
    // protected: 상속 관계에 있을 때만 접근 가능
    constructor(_name, _age) {
        this._name = _name;
        this._age = _age;
    }
    print() {
        console.log(`이름은 ${this._name}, 나이는 ${this._age}입니다.`);
    }
    printName() {
        console.log("printName", this._name);
    }
}
// Parent의 생성자가 있으므로 child에서도 같은 형태로 호출해야함
class Child extends Parent {
    constructor(age) {
        super("MARK JR.", age);
        // public _age = 32 ;
        this.gender = "male";
        this.printName();
    }
}
const p = new Parent("MARK", 39);
p.print();
const c = new Child(5);
c.print();
