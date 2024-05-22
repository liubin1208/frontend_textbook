const nums = [45, 2, 145, 7, 22];
// // 如何利用 Math.max 求出最大值
console.log(Math.max(...nums));

// // 浅层克隆nums数组
// const newNums = [...nums];
// console.log(newNums);

// 1. 针对可迭代对象展开 ...可迭代对象

// const newNums = [1, ...nums, ...nums, 100];
// console.log(newNums);

// 2. 针对普通对象展开

// const obj1 = {
//   a: 1,
//   b: 2,
// };
// const obj2 = {
//   b: 3,
//   c: 4,
// };
// const newObj = {
//   ...obj1,
//   ...obj2,
//   d: 5,
//   a: 100,
// };
// console.log(newObj);

const obj = {
  ...nums,
};
console.log(obj);
