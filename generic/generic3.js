"use strict";
// 제네릭으로 배열을 받음
function helloArray(message) {
    return message[0];
}
console.log(helloArray(["Hello", "world"]));
console.log(helloArray(["Hello", 5]));
function helloTuple(message) {
    return message[0];
}
console.log(helloTuple(["Hello", "world"]));
console.log(helloTuple(["Hello", 5]));
