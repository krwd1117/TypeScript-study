class Person {
    // public static CITY = "Seoul";
    private static CITY = "Seoul";
    // static method
    public hello() {
        console.log("안녕하세요?", Person.CITY);
    }

    public change() {
        Person.CITY = "LA";
    }
}

const p1 = new Person();
p1.hello();

const p2 = new Person();
p2.hello();
p1.change();
p2.hello();
p1.hello();