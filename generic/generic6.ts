class PersonExtends<T extends string | number> {
    private _name: T;

    constructor(name: T) {
        this._name = name
    }
} 

new PersonExtends("mark");
new PersonExtends(10);

// 오류 발생
// new PersonExtends(true);