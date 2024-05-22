import chalk from 'chalk';

/**
 * 获取 [min, max] 范围内的随机整数
 * @return {Number}
 */
function getRandom(min, max) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
}

function delay(duration = 1000) {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}

const logLines = [];
function print() {
  console.clear();
  console.log(logLines.join('\n'));
}

export default function mockTasks(number) {
  const tasks = [];
  for (let i = 0; i < number; i++) {
    const id = i + 1;
    const duration = getRandom(100, 2000);
    tasks.push(async () => {
      logLines[i] = `任务${id}: ${chalk.red('开始')}...`;
      print();
      await delay(duration);
      logLines[i] = `任务${id}: ${chalk.red('开始')}...${chalk.green(
        '完成'
      )}，耗时${chalk.yellow(duration + 'ms')}`;
      print();
    });
  }
  return tasks;
}
