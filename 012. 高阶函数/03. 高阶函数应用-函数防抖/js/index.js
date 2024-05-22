const container = document.querySelector('.charts');

function debounce(fn, duration = 300) {
  let timerId; // 记录上一次的计时器id
  return function (...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      fn.apply(this, args); // 耗时操作
    }, duration);
  };
}
const newUpdateChart = debounce(updateChart);
const handler = () => {
  newUpdateChart(container); // 更新图表数据（耗时）
  resizeChart(); // 重新设置图表尺寸以适应容器
};

container.addEventListener('resize', handler);
