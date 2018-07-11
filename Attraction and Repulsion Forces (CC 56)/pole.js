function Pole(x, y){
  this.pos = createVector(x, y);
  Pole.Radius = 10;

  this.run = function(){
    this.show();
  }

  this.show = function(){
    push();
    stroke(255);
    strokeWeight(10);
    point(x, y);
    pop();
  }
}
