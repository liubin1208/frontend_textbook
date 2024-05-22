var obj = {
  valueOf() {
    return {};
  },
  toString() {
    return {};
  },
};

console.log(+obj);
// console.log(Number('[object Object]'));
