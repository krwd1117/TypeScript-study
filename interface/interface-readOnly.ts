interface Person8 {
    name: string;
    age?: number;
    // gender: string;
    readonly gender: string;
}

const p81: Person8 = {
    name: "김정완",
    gender: "male"
}

// p81.gender = "female";