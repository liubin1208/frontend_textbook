/**
 * 将一个数组分割为指定大小的分组
 * 如果数组不能被均分，最后一个分组收纳剩余元素
 * @param {Array} array 待处理的数组
 * @param {number} [size] 每个分组的大小
 * @return {Array} 返回容纳了所有分组的新数组
 * @example
 * chunk(['a', 'b', 'c', 'd'], 2)
 * // => [['a', 'b'], ['c', 'd']]
 *
 * chunk(['a', 'b', 'c', 'd'], 3)
 * // => [['a', 'b', 'c'], ['d']]
 */
function chunk(array, size = 1) {
  if (size < 1) {
    return [];
  }
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

console.log(chunk(['a', 'b', 'c', 'd'], 0));
