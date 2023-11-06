// class Person<T> {
//     private _name: T

//     constructor(name: T) {
//         this._name = name
//     }
// }

// new Person("MARK");

class Person<T, K> {
    private _name: T
    private _age: K

    constructor(name: T, age: K) {
        this._name = name
        this._age = age
    }
}

new Person("MARK", 39);