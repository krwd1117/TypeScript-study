class Parent {
    // protected: 상속 관계에 있을 때만 접근 가능
    constructor(protected _name: string, private _age: number) {}

    public print(): void {
        console.log(`이름은 ${this._name}, 나이는 ${this._age}입니다.`);
    }

    protected printName(): void {
        console.log("printName", this._name);
    }
}


// Parent의 생성자가 있으므로 child에서도 같은 형태로 호출해야함
class Child extends Parent {
    // public _age = 32 ;
    public gender = "male";

    constructor(age: number) {
        super("MARK JR.", age)
        this.printName();
    }
}

const p = new Parent("MARK", 39);
p.print();

const c = new Child(5);
c.print();