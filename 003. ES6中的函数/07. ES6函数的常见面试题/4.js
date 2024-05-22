// 实现函数科里化
function currying(fn, ...bindArgs) {
  return (...args) => {
    const allArgs = [...bindArgs, ...args];
    if (allArgs.length < fn.length) {
      return currying(fn, ...allArgs);
    } else {
      return fn(...allArgs);
    }
  };
}

// 测试科里化函数
const sum = (a, b, c, d) => a + b + c + d;

console.log(currying(sum)(1)(2)(3)(4)); // 10
console.log(currying(sum, 1)(2, 3)(4)); // 10
console.log(currying(sum, 1, 2)(3)(4)); // 10
console.log(currying(sum, 1, 2)(3, 4)); // 10
