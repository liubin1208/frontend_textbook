type FirstArg<T> = T extends (first: infer F, ...args: any[]) => any ? F : T;

type fa = FirstArg<(name: number, age: number) => void>; // string
