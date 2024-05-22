/**
 * 并发执行任务
 * @param {Function[]} tasks
 * @param {Number} parallelCount
 */
function paralleTask(tasks, parallelCount = 2) {
  return new Promise((resolve) => {
    if (tasks.length === 0) {
      resolve();
      return;
    }
    let nextIndex = 0;
    let finishCount = 0; // 任务完成的数量
    function _run() {
      // 运行下一个任务
      const task = tasks[nextIndex];
      nextIndex++;
      task().then(() => {
        finishCount++;
        if (nextIndex < tasks.length) {
          _run();
        } else if (finishCount === tasks.length) {
          // 任务完成
          resolve();
        }
      });
    }
    for (let i = 0; i < parallelCount && i < tasks.length; i++) {
      _run();
    }
  });
}

export default paralleTask;
