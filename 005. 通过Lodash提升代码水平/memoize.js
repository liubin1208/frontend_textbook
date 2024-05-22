function memoize(func, resolver) {
  const memoized = function (...args) {
    // 缓存中是否存在
    const key = resolver ? resolver.apply(this, args) : args[0];
    if (memoized.cache.has(key)) {
      return memoized.cache.get(key);
    }
    const result = func.apply(this, args);
    memoized.cache.set(key, result);
    return result;
  };
  memoized.cache = new WeakMap();
  return memoized;
}

var object = { a: 1, b: 2 };
var other = { c: 3, d: 4 };

var values = memoize(
  (obj) => Object.values(obj),
  () => ({})
);
console.log(values(object));
// => [1, 2]

console.log(values(other));
// => [3, 4]

object.a = 2;
console.log(values(object));
// => [1, 2]

// Modify the result cache.
values.cache.set(object, ['a', 'b']);
console.log(values(object));
// => ['a', 'b']
