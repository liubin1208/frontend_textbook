const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth * devicePixelRatio;
canvas.height = window.innerHeight * devicePixelRatio;

ctx.translate(canvas.width / 2, canvas.height);
ctx.scale(1, -1);
drawBranch([0, 0], 30, 200, 90);

function drawBranch(v0, thick, length, dir) {
  if (thick < 10 && Math.random() < 0.3) {
    return;
  }
  if (thick < 2) {
    ctx.beginPath();
    ctx.arc(...v0, 10, 0, 2 * Math.PI);
    ctx.fillStyle = Math.random() < 0.5 ? '#fff' : '#f40';
    ctx.fill();
    return;
  }
  ctx.beginPath();
  ctx.moveTo(...v0);
  const v1 = [
    v0[0] + length * Math.cos((dir * Math.PI) / 180),
    v0[1] + length * Math.sin((dir * Math.PI) / 180),
  ];
  ctx.lineTo(...v1);
  ctx.strokeStyle = '#333';
  ctx.lineCap = 'round';
  ctx.lineWidth = thick;
  ctx.stroke();
  // 递归绘制左分支和右分支
  drawBranch(v1, thick * 0.8, length * 0.8, dir + Math.random() * 30);
  drawBranch(v1, thick * 0.8, length * 0.8, dir - Math.random() * 30);
}
