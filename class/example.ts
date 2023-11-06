// 클래스의 이름은 보통 대문자로 시작
// class Person {
//     name: string;
//     constructor(name: string) {
//         this.name = name;
//     }
// }

// Person이라는 오브젝트 생성
// const p1 = new Person("mark");
// console.log(p1);

// -----------------------

// class Person {
//     name: string = "Wan";
//     age!: number;
// }

// class Person {
//     name: string = "Wan";
//     age: number;

//     constructor(age?: number) {
//         if (age === undefined) {
//             this.age = 20;
//         } else {
//             this.age = age;
//         }
//     }
// }

// Person이라는 오브젝트 생성
// const p2 = new Person();
// p2.name = "Wan";
// class Person {
//     private name: string = "Wan";
//     private age: number;

//     constructor(age?: number) {
//         if (age === undefined) {
//             this.age = 20;
//         } else {
//             this.age = age;
//         }
//     }

//     init() {

//     }
// }

// 동기로 호출하고 싶을 때
// const p3 = new Person();
// console.log(p3.init());

// ------------------------------

// class Person {
//     public constructor(public name: string, private age: number) {}
// }

// const p1: Person = new Person("Wan", 39);
// console.log(p1);

// private로 선언되어 접근 불가
// console.log(p1.age);

// -------

// class Person {
//     public constructor(private _name: string, private _age: number) {}

//     get name() {
//         //
//         // console.log("get");
//         return this._name + " Kim"
//     }

//     set name(name: string) {
//         console.log("set")
//         this._name = name;
//     }
// }

// const p1: Person = new Person("Wan", 39);
// console.log(p1.name); // get을 하는 함수(getter)
// p1.name = "jeong" // set을 하는 함수(setter)
// console.log(p1.name);

// -----------------------

// class Person {
//     public readonly name: string = "Mark";
//     private readonly country: string = "korea";

//     // readonly지만 constructor에서 수정 가능!
//     public constructor(private _name: string, private _age: number) {
//         this.country = "USA";
//     }

//     // hello() { 
//     //     this.country = "usa";
//     // }
// }

// const p1: Person = new Person("Wan", 39);
// console.log(p1.name); // get을 하는 함수(getter)
// p1.name = "jeong" // set을 하는 함수(setter)
// console.log(p1.name); 

class Students {
    // "mark": string;
    // [index: string]: string;
    [index: string]: "male" | "female";

    // mark: "male" = "male";
}

const a = new Students();
a.mark = "male";
a.jade = "male";

console.log(a);

const b = new Students();
b.chloe = "female";
b.alex = "male";
b.anna = "female";

console.log(b);