type Big = { a: string } | { b: number } | { c: boolean };
type Small = { a: string } & { b: number } & { c: boolean };

// let big: Big = { a: 'a', b: 1, c: true };
// let small: Small = { a: 'a', b: 1, c: true };

// big = small; // OK
// small = big; // Error

let fn1 = (x: Big) => { };
let fn2 = (x: Small) => { };

fn2 = fn1; // OK
fn1 = fn2; // Error


