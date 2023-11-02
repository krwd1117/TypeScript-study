interface Person2 {
    name: string;
    age?: number;
}

function hello2(person: Person2): void {
    console.log(`안녕하세요. ${person.name}, ${person.age}살 입니다.`)
}

const p2: Person2 = {
    name: "mark"
}

hello2(p2)