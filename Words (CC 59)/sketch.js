var font;
var points;
var word;
var atoms = [];
var ghost;

function preload(){
  font = loadFont('Meteora.ttf');
}

function setup(){
  createCanvas(500, 500);

  word = {
    word: "Kevin",
    pos: createVector(100, height / 2),
    size: 100
  }

  points = font.textToPoints(word.word, word.pos.x, word.pos.y, word.size);

  for(let pt of points){
    atoms.push(new Atom(pt.x, pt.y));
  }

  ghost = new Ghost();

  // textFont(font);
  // textSize(100);
  // fill(255);
  // noStroke();
  // text(word, 100, height / 2);
}

function draw(){
  background(51);

  (function(){
    for(atom of atoms){
      atom.update();
      atom.show();
    }
  })();

  ghost.update();
  ghost.show();
}

function Ghost(){
  this.pos = createVector();

  this.update = function(){
    this.pos = createVector(mouseX, mouseY);
  }

  this.show = function(){
    push();

    stroke(255, 0, 0);
    strokeWeight(10);
    point(this.pos.x, this.pos.y);

    pop();
  }
}

function Atom(x, y){
  this.pos = createVector(x, y);

  this.update = function(){

  }

  this.show = function(){
    push();

    stroke(255);
    strokeWeight(5);
    point(this.pos.x, this.pos.y);

    pop();
  }
}
