"use strict";
function helloBasic(message, comment) {
    return message;
}
// T를 'string' 타입으로 지정
helloBasic("mark", 16);
// T를 추론
helloBasic(36, 13);
