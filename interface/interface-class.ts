interface IPerson1 {
    name: string;
    age?: number;
    hello(): void;
}

// 인터페이스를 클래스로 사용
class Person implements IPerson1 {
    name: string;
    age?: number | undefined;

    constructor(name: string) {
        this.name = name;
    }

    hello(): void {
        console.log(`안녕하세요! ${this.name}입니다.`)
    }
}

// const person: IPerson1 = new Person(`MARK`);
// const person = new Person(`MARK`);

interface IPerson2 {
    name: string;
    age?: number;
}

interface IKorean extends IPerson2 {
    city: string;
}

const k: IKorean = {
    name: "김정완",
    city: "서울"
};