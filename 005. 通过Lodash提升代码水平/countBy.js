/**
 * 创建一个对象，该对象的键由iteratee函数的运行结果决定
 * collection中的每个元素都会交给iteratee函数运行，将其得到的结果作为返回对象的键
 * 返回对象的每个键对应一个数字，用于统计该键出现的次数
 * iteratee函数接收一个参数value，该参数表示collection中的某个元素
 *
 * @param {Array|Object} collection 需要遍历的集合
 * @param {Function} iteratee
 * @returns {Object}
 * @example
 *
 * const users = [
 *   { 'user': 'barney', 'active': true },
 *   { 'user': 'betty', 'active': true },
 *   { 'user': 'fred', 'active': false }
 * ]
 *
 * countBy(users, value => value.active);
 * // => { 'true': 2, 'false': 1 }
 */
function countBy(collection, iteratee) {
  const result = {};
  for (const item of collection) {
    const key = iteratee(item);
    result[key] ? result[key]++ : (result[key] = 1);
  }
  return result;
}
