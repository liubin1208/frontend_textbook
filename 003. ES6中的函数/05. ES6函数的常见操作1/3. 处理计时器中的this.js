class Timer {
  constructor(callback, duration = 1000) {
    this.callback = callback;
    this.duration = duration;
    this.count = 0;
    this.id = null;
  }

  start() {
    if (this.id) {
      return;
    }
    this.id = setInterval(() => {
      this.callback(++this.count);
    }, this.duration);
  }

  stop() {
    clearInterval(this.id);
    this.id = null;
  }
}

// test
const t = new Timer((serial) => {
  console.log(serial);
});
t.start();
