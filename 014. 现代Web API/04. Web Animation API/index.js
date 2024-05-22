window.addEventListener('click', (e) => {
  const pointer = document.createElement('div');
  pointer.classList.add('pointer');
  pointer.style.left = `${e.clientX}px`;
  pointer.style.top = `${e.clientY}px`;
  document.body.appendChild(pointer);
  pointer.addEventListener('animationend', () => {
    pointer.remove();
  });
});

const ball = document.querySelector('.ball');

function init() {
  const x = window.innerWidth / 2;
  const y = window.innerHeight / 2;
  ball.style.transform = `translate(${x}px, ${y}px)`;
}
init();

window.addEventListener('click', function (e) {
  const x = e.clientX;
  const y = e.clientY;
  move(x, y);
});

function move(x, y) {
  const ballRect = ball.getBoundingClientRect();
  const initX = ballRect.left + ballRect.width / 2;
  const initY = ballRect.top + ballRect.height / 2;
  const rad = Math.atan2(y - initY, x - initX);
  const deg = (rad * 180) / Math.PI;
  ball.getAnimations().forEach((animation) => animation.cancel());
  ball.animate(
    [
      {
        transform: `translate(${initX}px,${initY}px) rotate(${deg}deg)`,
        easing: 'ease-out',
      },
      {
        transform: `translate(${initX}px,${initY}px) rotate(${deg}deg) scaleX(1.5)`,
        offset: 0.6,
      },
      {
        transform: `translate(${x}px,${y}px) rotate(${deg}deg) scaleX(1.5)`,
        offset: 0.8,
        easing: 'ease-in',
      },
      {
        transform: `translate(${x}px,${y}px) rotate(${deg}deg)`,
      },
    ],
    {
      duration: 1000,
      fill: 'forwards',
    }
  );
}
