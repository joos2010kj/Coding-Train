var player;
var cells = [];

function setup(){
  createCanvas(500, 500);
  player = new Player();
  for(let i = 0; i < 10; i++){
    cells.push(new Cell(floor(Math.random() * 5 + 3), 20));
  }
}

function draw(){
  background(0);

  player.update();
  player.show();

  for(let cell of cells){
    cell.update();
    cell.show();
  }
}


function keyPressed(){
  player.control(true);
}

function keyReleased(){
  player.control(false);
}
