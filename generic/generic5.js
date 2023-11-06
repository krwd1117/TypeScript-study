"use strict";
// class Person<T> {
//     private _name: T
//     constructor(name: T) {
//         this._name = name
//     }
// }
// new Person("MARK");
class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
}
new Person("MARK", 39);
