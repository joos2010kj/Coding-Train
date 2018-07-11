var yoff_range = 0.01;
var speed = 0.005;
var start = 0;

function setup(){
  createCanvas(500, 500);
}

function draw(){
  background(51);

  stroke(255);
  noFill();
  beginShape();

  var yoff = start;
  for(let i = 0; i <= width; i++){
    vertex(i, noise(yoff) * height);
    yoff += yoff_range; //offset "range" (closer to 0 == more similar)
  }
  start += speed; //speed at which terrains are "moving"

  endShape();
}

function mousePressed(){
  start += 10; //different "place"
}
