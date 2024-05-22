var user = {
  name: 'deng',
  addr: {
    province: '黑龙江',
    city: '哈尔滨',
  },
};

// 获取用户居住城市名
// 每个属性都有可能为null或者是undefined
// user本身也有可能为null或者是undefined

// if (user && user.addr) {
//   console.log(user.addr.city);
// }

console.log(user && user.addr && user.addr.city);
