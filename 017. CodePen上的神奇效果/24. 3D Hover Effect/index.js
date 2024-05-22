const card = document.querySelector('.card');
const yRange = [-10, 10];
const xRange = [-10, 10];

function getRotate(range, value, max) {
  return (value / max) * (range[1] - range[0]) + range[0];
}

card.onmousemove = (e) => {
  const { offsetX, offsetY } = e;
  const { offsetWidth, offsetHeight } = card;
  const ry = -getRotate(yRange, offsetX, offsetWidth);
  const rx = getRotate(xRange, offsetY, offsetHeight);
  card.style.setProperty('--rx', `${rx}deg`);
  card.style.setProperty('--ry', `${ry}deg`);
};

card.onmouseleave = (e) => {
  card.style.setProperty('--rx', `0deg`);
  card.style.setProperty('--ry', `0deg`);
};
