import mockTasks from './mockTasks.js';
import paralleTask from './paralleTask.js';

const tasks = mockTasks(10);

paralleTask(tasks, 4).then(() => {
  console.log('全部完成！');
});
