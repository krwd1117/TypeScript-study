"use strict";
const person = {
    name: "Wan",
    age: 30
};
// 어떤 개체에 keyof를 붙이면 그 결과물이 type으로 나오는데 그 type은 key의 이름으로 된 문자열(name, age) 유니온임
// type Keys = keyof IPerson;
// const keys: Keys = "age"; 
// ------ keyof 적용 -----
// function getProp(obj: IPerson, key: "name" | "age"): string | number {
// return obj[key];
// }
/*
IPerson[keyof IPerson]
=> IPerson["name" | "age"]
=> IPerson["name"] | IPerson["age"]
=> string | number
*/
// function getProp(obj: IPerson, key: keyof IPerson): IPerson[keyof IPerson] {
//     return obj[key];
// }
// K에 extends로 제한을 줌
// K는 'keyof T'에 의해 제한 된 형태 (name | age)
function getProp(obj, key) {
    return obj[key];
}
getProp(person, "name");
// --------------------
// function setProp(obj: IPerson, key: "name" | "age", value: string | number): void {
//     obj[key] = value
// }
function setProp(obj, key, value) {
    obj[key] = value;
}
setProp(person, "name", "Anna");
