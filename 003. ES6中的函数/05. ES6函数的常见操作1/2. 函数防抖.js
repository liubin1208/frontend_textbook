// 函数防抖

/**
 * 函数防抖
 * @param {Function} fn 要进行防抖的目标函数
 * @param {Number} delay 延迟时间，默认1秒
 */
function debounce(fn, delay = 1000, ...args1) {
  var timer = null;
  return (...args2) => {
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn(...args1, ...args2);
    }, delay);
  };
}

// test
var newFn = debounce(
  function (a, b, c, d) {
    console.log(a, b, c, d);
  },
  2000,
  1, // 绑定第1个参数
  2 // 绑定第2个参数
);
newFn(3, 4); // 2秒后输出 1 2 3 4
