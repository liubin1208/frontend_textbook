type Ternary<T> = T extends string ? 'a' : 1;

let a: Ternary<string>;
