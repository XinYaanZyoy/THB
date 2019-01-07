var piecclr = ["green", "yellow", "blue", "red", "orange"];
var cube = select('.cube');
var mbox = select('.mbox');
var boxes = selectAll('.box');
var AE = select('#AE');
var piece = [8];


function tiles() {

  for (let i = 0; i <= 8; i++) {
    if (i == 5) continue;
    else {
      piece[i] = select('#b' + i);
    }
  }

  for (let i = 0; i <= 7; i++) {
    piece[i].style('background-color', piecclr[random(5)]);
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
}