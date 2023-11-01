
// never는 아무 것도 반환하지 않음
function error(message: string): never {
    throw new Error(message);
}

function fail() {
    return error("failed");
}

function infiniteLoop(): never {
    while(true) {

    }
}

// let a: string = "hello";

// if (typeof a !== "string" ) {
//     a;
// }

declare const a: string | number;

if (typeof a !== "string" ) {
    a;
}

// 조건부 타입
// T가 String이면 T를 'T & {[index: string]: any}' 으로 만들어서 보내는 거고, 아니면 never라는 타입이 나옴
type Indexable<T> = T extends string ? T & {[index: string]: any} : never
type ObjectIndexable = Indexable<{}>;

// const b: Indexable<{}> = "";