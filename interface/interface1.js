"use strict";
function hello1(person) {
    console.log(`안녕하세요? ${person.name}, ${person.age}살 입니다.`);
}
const p1 = {
    name: "mark",
    age: 39,
};
hello1(p1);
