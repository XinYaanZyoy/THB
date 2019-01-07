//back
var can;
var img;
var p = [];
var piece = [];
var piecclr = ["green", "yellow", "red", "blue", "orange"];
var clr = [];


function preload() {
  img = loadImage('\assets/mt.jpg');
}

function setup() {
  can = createCanvas(windowWidth, windowHeight);
  can.position(0, 0);
  can.style('z-index', -1);

  /******************************************* */
  //tiles
  var cube = select('.cube');
  var mbox = select('.mbox');
  var boxes = selectAll('.box');
  var AE = select('#AE');
  let j = 0;
  for (let i = 1; i <= 9; i++) {
    if (i == 5) continue;
    else {
      piece[j] = select('#b' + i);
      j++
    }
  }

  for (let i = 0; i <= 7; i++) {
    piece[i].style('background-color', piecclr[floor(random(5))]);
  }

  if (height < width) {
    var size = (floor(height / 100) / 3) * 100; //size of a tile
    var racg = (floor((height % 100) / 10) / 2) * 10; //row and coloum gap
    var vp = ((height % 100) % 10) / 2; //vertical padding
    var hp = (width - 3 * size - 2 * racg) / 2; //horizontal padding
  } else {
    var size = (floor(width / 100) / 3) * 100; //size of a tile
    var racg = (floor((width % 100) / 10) / 2) * 10; //row gap
    var hp = ((width % 100) % 10) / 2; //horizontal padding
    var vp = (height - 3 * size - 2 * racg) / 2; //vertical padding  
  }

  cube.position(0, 0);
  var tbl = size + 'px' + ' ' + size + 'px' + ' ' + size + 'px';
  cube.style('grid-template-columns', tbl);
  cube.style('grid-template-rows', tbl);
  cube.style('grid-column-gap', racg + 'px');
  cube.style('grid-row-gap', racg + 'px');
  cube.style('left', hp + 'px');
  cube.style('right', hp + 'px');
  cube.style('top', vp + 'px');
  cube.style('bottom', vp + 'px');

  mbox.style('width', size + 'px');
  mbox.style('height', size + 'px');

  AE.style('width', size + 'px');
  AE.style('height', size + 'px');

  for (let i = 0; i < boxes.length; i++) {
    boxes[i].style('border-width', size / 20 + 'px');
  }

  //********************************************* */


  for (let i = 0; i < 100; i++) {
    p[i] = new Particle(random(width), random(height));
  }
  background(0);
}

function draw() {
  for (let i = 0; i < 100; i++) {
    p[i].move();
    p[i].disp();
  }
}

function Particle(x, y) {
  this.x = x;
  this.y = y;

  this.move = function () {
    this.x += random(-10, 10);
    this.y += random(-10, 10);
  }

  this.disp = function () {
    noStroke();
    var brush = img.get(this.x, this.y);
    fill(brush[0], brush[1], brush[2], brush[3]);
    ellipse(this.x, this.y, 10, 10);
  }
}