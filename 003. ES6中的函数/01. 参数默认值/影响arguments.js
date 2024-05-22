function mixArgs(a, b = 2) {
  console.log(arguments.length);
  console.log(a === arguments[0]);
  console.log(b === arguments[1]);
  a = 'alpha';
  b = 'beta';
  console.log(a === arguments[0]);
  console.log(b === arguments[1]);
}

mixArgs(1, 2);
