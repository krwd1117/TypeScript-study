declare const maybe: unknown;

// const aNumber: number = maybe;

// 타입 가드
if (maybe === true) {
    const aBoolean: boolean = maybe;
    
    // const aString: string = maybe;
}

if (typeof maybe === "string") {
    const string:string = maybe;

    // const aBoolean: boolean = maybe;
}