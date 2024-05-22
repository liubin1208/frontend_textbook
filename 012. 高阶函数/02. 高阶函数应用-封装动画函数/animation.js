function animation(duration, from, to, onProgress) {
  const dis = to - from;
  const speed = dis / duration;
  const startTime = Date.now();
  let value = from; // 当前的值
  console.log(value);

  function _run() {
    const now = Date.now();
    const time = now - startTime;
    if (time >= duration) {
      value = to;
      console.log(value);
      return;
    }
    const d = time * speed;
    value = from + d;
    console.log(value);
    requestAnimationFrame(_run);
  }

  requestAnimationFrame(_run);
}
