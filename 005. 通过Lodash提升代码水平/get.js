/**
 * 根据提供的访问路径，获取对象中的值
 * 如果得到的值是undefined，则使用提供的默认值
 * @param {Object} object
 * @param {Array|string} path 访问路径
 * @param {*} [defaultValue] 默认值
 * @returns {*}
 * @example
 *
 * const object = { 'a': [{ 'b': { 'c': 3 } }] }
 *
 * get(object, 'a[0].b.c')
 * // => 3
 *
 * get(object, ['a', '0', 'b', 'c'])
 * // => 3
 *
 * get(object, 'a.b.c', 'default')
 * // => 'default'
 */
function get(object, path, defaultValue) {
  let obj = object;
  if (typeof path === 'string') {
    const reg = /[^\[\].]+/g;
    path = path.match(reg);
  }
  for (const key of path) {
    if (!obj) {
      return defaultValue;
    }
    obj = obj[key];
  }
  return obj === undefined ? defaultValue : obj;
}
const object = { a: [{ b: { c: 3 } }] };
console.log(get(object, 'a[0].b.c'));
