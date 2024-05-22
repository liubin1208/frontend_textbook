const people = [
  { name: 'Alice', age: 30, sex: 'female' },
  { name: 'Bob', age: 25, sex: 'male' },
  { name: 'Charlie', age: 30, sex: 'male' },
  { name: 'Diana', age: 25, sex: 'female' },
  { name: 'Eva', age: 25, sex: 'female' },
  { name: 'Frank', age: 25, sex: 'male' },
  {
    name: 'Grace',
    age: 20,
    sex: 'female',
  },
];

function groupBy(arr, generateKey) {
  if (typeof generateKey === 'string') {
    const propName = generateKey;
    generateKey = (item) => item[propName];
  }
  const result = {};
  for (const item of arr) {
    const key = generateKey(item);
    if (!result[key]) {
      result[key] = [];
    }
    result[key].push(item);
  }
  return result;
}
// 按年龄分组
console.log(groupBy(people, 'age'));

// // 按性别分组
console.log(groupBy(people, 'sex'));

// // 按 年龄-性别 分组
console.log(groupBy(people, (item) => `${item.age}-${item.sex}`));

// const arr = [34, 6, 323, 2, 1, 5];
// console.log(groupBy(arr, (item) => (item % 2 === 0 ? '偶' : '奇')));
