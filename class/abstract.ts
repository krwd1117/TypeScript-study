// abstract는 class 앞에 abstract을 붙여야함
abstract class AbstractPerson {
    protected _name: string = "Mark";

    // abstract는 구현하지 않음
    abstract setName(name: string): void;
}

// 이렇게 생성 안됨
// new AbstractPerson();

class Person1 extends AbstractPerson {
    setName(name: string): void {
        this._name = name;

    }
}

const p3 = new Person1();
p3.setName("이름");