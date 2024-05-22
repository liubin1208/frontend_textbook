function foo(a, b = 2, c = 3) {
  console.log(a, b, c);
}
foo(); // undefined  2  3
foo(1, null, undefined); // 1, null, 3

function bar(a, b = 2, c) {
  console.log(a, b, c);
}

bar(1, 3); // 1, 3, undefined
bar(1, undefined, 3); // 1, 2, 3
