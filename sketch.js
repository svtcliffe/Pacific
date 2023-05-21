function setup() {
  createCanvas(400, 400);
  
}

function draw() {
background(230, 190, 174);
  noStroke();
  // utilizando for para crear varios circulos en el canvas, el bucle se ejecuta 8 veces comenzando con el valor de i en 8 hasta disminuir en cada iteracion, llegando a que i iguale a 1
for (let i = 8; i > 0; i--) {
  let alphaValue = (sin(frameCount * 0.05)) * 255;
  let r = map(i, 1, 8, 255, 89);
  let g = map(i, 1, 8, 77, 240);
  let b = map(i, 1, 8, 109, 243);
  fill(r, g, b, alphaValue);
  circle(200, 200, i * 30);
}
 
  
  
  
}
