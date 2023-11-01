// 고유하고 수정 불가능 한 값으로 만들어줌
// 주로 접근제어할 때 많이 사용

//console.log(Symbol("foo") === Symbol("foo"))

const sym = Symbol();

const obj = {
    [sym]: "value",
};

console.log(obj[sym])
