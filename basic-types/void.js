"use strict";
// undefined만 유일하게 void에서 리턴할 수 있음
function returnVoid(message) {
    console.log(message);
    return undefined;
}
const r = returnVoid("리턴이 없다.");
