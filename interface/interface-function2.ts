interface HelloPerson {
    (name: string, age?: number): void;
}

// const helloPerson: HelloPerson = function(name: string) {
//     console.log(`안녕하세요 ${name}입니다.`);
// }

const helloPerson: HelloPerson = function(name: string, age?: number) {
    console.log(`안녕하세요 ${name}입니다.`);
}

// 에러 발생
// const helloPerson: HelloPerson = function(name: string, age: number) {
//     console.log(`안녕하세요 ${name}입니다.`);
// };

helloPerson("김정완", 39);