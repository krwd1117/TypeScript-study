"use strict";
// never는 아무 것도 반환하지 않음
function error(message) {
    throw new Error(message);
}
function fail() {
    return error("failed");
}
function infiniteLoop() {
    while (true) {
    }
}
if (typeof a !== "string") {
    a;
}
// const b: Indexable<{}> = "";
