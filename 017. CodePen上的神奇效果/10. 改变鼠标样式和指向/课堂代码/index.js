const pointer = document.querySelector('.pointer');
let rad = 0;
window.onmousemove = (e) => {
  console.log(e.movementX, e.movementY);
  if (Math.abs(e.movementX) + Math.abs(e.movementY) > 3) {
    rad = Math.atan2(e.movementX, -e.movementY);
  }
  pointer.style.transform = `translate(${e.clientX}px, ${e.clientY}px) rotate(${rad}rad)`;
};
