const arr = [23, 1, 23, 4, 6, 2, 3, 2, 1];
// 去掉重复项得到一个新数组
const result = [...new Set(arr)];
console.log(result);
