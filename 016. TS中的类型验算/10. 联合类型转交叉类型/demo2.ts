type UnionTest = 
((x: { a: string }) => any) | 
((x: { b: number }) => any) | 
((x: { c: boolean }) => any);

function method(fn: UnionTest) {
  fn()
}
