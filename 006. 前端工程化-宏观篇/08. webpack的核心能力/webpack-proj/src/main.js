import './global.css';

const btn = document.createElement('button');
let count = 1;

function setText() {
  btn.textContent = `Click ${count} times`;
}

btn.onclick = () => {
  count++;
  setText();
};
btn.textContent = '点击我!';
document.body.appendChild(btn);
