// 下面的代码输出什么（新东方）？
var obj1 = {
  a: 1,
  b: 2,
  valueOf: function () {
    return this.a + this.b;
  },
  toString: function () {
    return 1;
  },
};

var obj2 = {
  toString: function () {
    return 0;
  },
};

console.log(obj1 + !!obj2);
