const btn = document.querySelector('.btn');

btn.onclick = () => {
  const consumer = (item, i) => {
    const div = document.createElement('div');
    div.textContent = i;
    document.body.appendChild(div);
  };
  performChunk(10000, consumer);
};

function performChunk(datas, consumer, chunkSplitor) {
  if (typeof datas === 'number') {
    datas = new Array(datas);
  }
  if (datas.length === 0) {
    return;
  }
  if (!chunkSplitor && globalThis.requestIdleCallback) {
    chunkSplitor = (task) => {
      requestIdleCallback((idle) => {
        task(() => idle.timeRemaining() > 0);
      });
    };
  }
  let i = 0; // 目前应该取出的任务下标
  // 执行一块任务
  function _run() {
    if (i === datas.length) {
      return;
    }
    chunkSplitor((hasTime) => {
      const now = Date.now();
      while (hasTime(Date.now() - now) && i < datas.length) {
        // 在这一帧还有空闲时间
        const item = datas[i];
        consumer(item, i);
        i++;
      }
      _run();
    });
  }

  _run();
}
