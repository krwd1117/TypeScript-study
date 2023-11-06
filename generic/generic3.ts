// 제네릭으로 배열을 받음
function helloArray<T>(message: T[]): T {
    return message[0];
}

console.log(helloArray(["Hello", "world"]));
console.log(helloArray(["Hello", 5]));

function helloTuple<T, K>(message: [T, K]): T {
    return message[0]
}

console.log(helloTuple(["Hello", "world"]));
console.log(helloTuple(["Hello", 5]));