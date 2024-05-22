/**
 * 判断一个数是否是素数
 */
function isPrime(n) {
  const max = Math.sqrt(n);
  for (let i = 2; i <= max; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(17));

// WTF this ？？？
console.log(new isPrime(17));
