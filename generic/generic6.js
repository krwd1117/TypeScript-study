"use strict";
class PersonExtends {
    constructor(name) {
        this._name = name;
    }
}
new PersonExtends("mark");
new PersonExtends(10);
// 오류 발생
// new PersonExtends(true);
