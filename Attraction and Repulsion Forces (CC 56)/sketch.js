var poles = [];
var atoms = [];
const POLE_NUM = 10;
const ATOM_NUM = 1;
const subframeSteps = 1;

function setup(){
  createCanvas(500, 500);

  Atom.DeclareTarget(poles);

  for(let i = 0; i < POLE_NUM; i++){
    poles.push(new Pole(random(width), random(height)));
  }

  for(let i = 0; i < ATOM_NUM; i++){
    atoms.push(new Atom(random(width), random(height)));
  }
}

function draw(){

  background(51);
  //frameRate(3);

  (function(){
    for(pole of poles){
      pole.run();
    }

    for(atom of atoms){
      for (var i = 0; i < poles.length; i++) {
      atom.attracted(poles[i]);
      }

      atom.run();
    }
  })();
}

function mousePressed(){
  atoms.push(new Atom(mouseX, mouseY));
}
