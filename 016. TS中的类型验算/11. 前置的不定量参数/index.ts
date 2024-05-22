type JSTypeMap = {
  'string': string,
  'number': number,
  'boolean': boolean,
  'object': object,
  'function': Function,
  'symbol': symbol,
  'undefined': undefined,
  'bigint': bigint,
}

type JSTypeName = keyof JSTypeMap;

type ArgsType<T extends JSTypeName[]> = {
  [I in keyof T]: JSTypeMap[T[I]]
}

declare function addImpl<T extends JSTypeName[]>(
  ...args: [
    ...T, 
    (...args: ArgsType<T>) => any
  ]) : void

addImpl('number', 'boolean', 'number', (a,b,c)=>{});

