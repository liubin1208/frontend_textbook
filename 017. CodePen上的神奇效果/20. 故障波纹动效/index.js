const tur = document.querySelector('feTurbulence');
const btn = document.querySelector('.btn-container');
const tl = new gsap.timeline({
  paused: true,
  onUpdate() {
    tur.setAttribute('baseFrequency', `0 ${val.freq}`);
  },
});
const val = {
  freq: 0.00001,
};
tl.to(val, {
  freq: 0.4,
  duration: 0.1,
});
tl.to(val, {
  freq: 0.00001,
  duration: 0.1,
});
btn.onmouseenter = () => tl.restart();
