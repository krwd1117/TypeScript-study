"use strict";
function hello3(person) {
    console.log(`${person.name} 입니다.`);
}
const p31 = {
    name: "Mark",
    age: 39
};
const p32 = {
    name: "Anna",
    sisters: ["sung", "chan"]
};
const p33 = {
    name: "Wan",
    father: p31,
    mother: p32
};
// hello3(p31);
hello3(p32);
// hello3(p33);
