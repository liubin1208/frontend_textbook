type Demo2 = {
  a: number;
  b: number;
};

type NewDemo2 = {
  [P in keyof Demo2]: string;
};

let demo1: NewDemo2;
