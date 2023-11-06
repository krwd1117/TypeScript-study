"use strict";
class Person {
    // static method
    hello() {
        console.log("안녕하세요?", Person.CITY);
    }
    change() {
        Person.CITY = "LA";
    }
}
// public static CITY = "Seoul";
Person.CITY = "Seoul";
const p1 = new Person();
p1.hello();
const p2 = new Person();
p2.hello();
p1.change();
p2.hello();
p1.hello();
