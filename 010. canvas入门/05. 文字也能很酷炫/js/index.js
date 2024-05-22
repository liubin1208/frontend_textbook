const cvs = document.querySelector('canvas');
const ctx = cvs.getContext('2d');

function init() {
  cvs.width = window.innerWidth * devicePixelRatio;
  cvs.height = window.innerHeight * devicePixelRatio;
}
init();

const fontSize = 10 * devicePixelRatio;
ctx.font = `${fontSize}px "Roboto Mono"`;
const columnCount = Math.floor(cvs.width / fontSize);
const charIndex = new Array(columnCount).fill(0);

function draw() {
  ctx.fillStyle = 'rgba(0,0,0,0.1)';
  ctx.fillRect(0, 0, cvs.width, cvs.height);
  ctx.fillStyle = '#6BE445';
  ctx.textBaseline = 'top';
  for (let i = 0; i < columnCount; i++) {
    const text = getRandomChar();
    const x = i * fontSize;
    const y = charIndex[i] * fontSize;
    ctx.fillText(text, x, y);
    if (y > cvs.height && Math.random() > 0.99) {
      charIndex[i] = 0;
    } else {
      charIndex[i]++;
    }
  }
}

function getRandomChar() {
  const str = '0123456789abcdefghijklmnopqrstuvwxyz';
  return str[Math.floor(Math.random() * str.length)];
}
draw();

setInterval(draw, 50);
