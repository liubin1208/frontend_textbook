type UnionToIntersection<T> = 
  (T extends any ? (x: T) => any : never) extends 
  (x: infer R) => any ? R : never;

type Test = {a: string} | {b: number} | {c: boolean};

/* 
(x: {a: string}) => any |
(x: {b: number}) => any |
(x: {c: boolean}) => any 
*/

type Test2 = UnionToIntersection<Test>; // {a: string} & {b: number} & {c: boolean}
