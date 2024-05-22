type User = {
  name: string;
  age: number;
};

type UserAction = {
  [P in keyof User as `get${Capitalize<P>}`]: () => User[P];
};
let userAction: UserAction;
