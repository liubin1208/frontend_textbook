type DeepReadonly<T extends Record<string | symbol, any>> = {
  readonly [K in keyof T]: DeepReadonly<T[K]>;
};

interface Obj {
  a: number;
  b: string;
  c: {
    d: boolean;
  };
}

let obj: DeepReadonly<Obj> = {
  a: 1,
  b: '2',
  c: {
    d: true,
  },
};
obj.c.d = false;
