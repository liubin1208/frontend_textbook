const btn = document.querySelector('.btn');

btn.onclick = () => {
  const handler = (item, i) => {
    const div = document.createElement('div');
    div.textContent = i;
    document.body.appendChild(div);
  };
  performChunk(100000, handler);
};

function performChunk(datas, consumer, chunkSplitor) {
  if (typeof datas === 'number') {
    datas = new Array(datas);
  }
  if (datas.length === 0) {
    return;
  }
  if (!chunkSplitor && globalThis.requestIdleCallback) {
    chunkSplitor = (callback) => {
      requestIdleCallback((idle) => callback(() => idle.timeRemaining() <= 0));
    };
  }
  let i = 0;
  function _run() {
    if (i === datas.length) {
      return;
    }
    chunkSplitor((isTimeout) => {
      const startTime = Date.now();
      while (!isTimeout(Date.now() - startTime) && i < datas.length) {
        const item = datas[i];
        consumer(item, i);
        i++;
      }
      _run();
    });
  }
  _run();
}
