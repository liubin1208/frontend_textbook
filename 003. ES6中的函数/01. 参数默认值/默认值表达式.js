let n = 1;
function getValue() {
  return n++;
}

function foo(a, b = getValue()) {
  console.log(a, b);
}

foo(1, 2); // 1 2
foo(1); // 1 1  n:2
foo(1); // 1 2  n:3
foo(1); // 1 3
foo(1); // 1 4
