interface Person3 {
    name: String;
    age?: number;
    // 인덱서블 indexible?
    [index: string]: any;
}

function hello3(person: Person3): void {
    console.log(`${person.name} 입니다.`)
}

const p31: Person3 = {
    name: "Mark",
    age: 39
}

const p32: Person3 = {
    name: "Anna",
    sisters: ["sung", "chan"]
}

const p33: Person3 = {
    name: "Wan",
    father: p31,
    mother: p32
}

// hello3(p31);
hello3(p32);
// hello3(p33);