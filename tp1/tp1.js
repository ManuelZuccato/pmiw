/* 
Alumno: Manuel Zuccato
Legajo: 121285/2
Comision 4
TP1
Link del video: https://youtu.be/qdPwJm1_3Cs
https://www.youtube.com/watch?v=qdPwJm1_3Cs
*/



// VARIABLES
let grilla;
let ladoCuadro;
let espacioEntreCirculos;
let coloresCirculos;
const colorGris = [120, 120, 120];
let colorFondo = [210, 10, 10];

function preload() {
  grilla = loadImage("/assets/grillacirculos.jpg");
}

function setup() {
  createCanvas(800, 400);
  ladoCuadro = width / 25;
  espacioEntreCirculos = ladoCuadro * 1.8;
  reiniciarPrograma();
}

function draw() {
  background(colorFondo);
  dibujarFondo();
  dibujarCirculos();
}

function dibujarFondo() {
  image(grilla, 0, 0, 400, 400);
}

function dibujarCirculos() {
  noFill();
  strokeWeight(2);
  for (let i = 0; i < 7; i++) {
    for (let j = 0; j < 7; j++) {
      let x = width / 1.9 + j * espacioEntreCirculos;
      let y = i * espacioEntreCirculos + espacioEntreCirculos / 2;
      stroke(coloresCirculos[i][j]);
      ellipse(x, y, ladoCuadro, ladoCuadro);
    }
  }
}

function reiniciarPrograma() {
  inicializarColores();
  colorFondo = [210, 10, 10];
}

function cambiarColorTodosCirculos() {
  for (let i = 0; i < 7; i++) {
    for (let j = 0; j < 7; j++) {
      coloresCirculos[i][j] = generarColorAleatorio();
    }
  }
  colorFondo = generarColorAleatorio();
}

function generarColorAleatorio() {
  return [random(255), random(255), random(255)];
}

function mouseClicked() {
  cambiarColorTodosCirculos();
}

function keyPressed() {
  if (key === 'r' || key === 'R') {
    reiniciarPrograma();
  }
}

function inicializarColores() {
  coloresCirculos = [];
  for (let i = 0; i < 7; i++) {
    coloresCirculos[i] = [];
    for (let j = 0; j < 7; j++) {
      coloresCirculos[i][j] = colorGris;
    }
  }
}
