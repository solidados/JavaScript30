const canvas = document.querySelector('#draw');
const context = canvas.getContext('2d');
console.log(context)
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

context.strokeStyle = '#BADA55';
context.lineJoin = 'round';
context.lineCap = 'round';
context.lineWidth = 50;
context.globalCompositeOperation = 'xor' // read the types canvasRenderingContext2D on MDN

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw (e) {
  if (!isDrawing) return;

  context.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  // context.lineWidth = hue;
  context.beginPath();

  // start from:
  context.moveTo(lastX, lastY);
  // go to:
  context.lineTo(e.offsetX, e.offsetY);
  context.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];

  hue += 1;
  if (hue >= 360) {
    hue = 0;
  }

  if (context.lineWidth >= 100 || context.lineWidth <= 1) {
    direction = !direction;
  }

  direction ? context.lineWidth++ : context.lineWidth--;
  // if (direction) {
  //   context.lineWidth += 1;
  // } else {
  //   context.lineWidth -= 1;
  // }
}

canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
})

canvas.addEventListener('mousemove', draw)
canvas.addEventListener('mouseup', () => isDrawing = false)
canvas.addEventListener('mouseout', () => isDrawing = false)

