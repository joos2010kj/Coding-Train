function Atom(x, y){
  this.pos = createVector(x, y);
  this.prevPos = createVector();
  this.vel = p5.Vector.random2D();
  this.acc = createVector();

  Atom.Target;

  this.run = function(){
    this.update();
    this.show();
  }

  this.update = function(){
    this.prevPos = createVector(this.pos.x, this.pos.y);

    this.vel.add(p5.Vector.div(this.acc, subframeSteps));
    this.pos.add(p5.Vector.div(this.vel, subframeSteps));

    this.acc = createVector();
  }

  this.show = function(){
    push();
    strokeWeight(10);
    line(this.prevPos.x, this.prevPos.y, this.pos.x, this.pos.y);
    pop();
  }

  this.attracted = function(target){ //F = ( G * m1 * m2 ) / pow( distance_m1&m2 , 2 )
    var force = p5.Vector.sub(target.pos, this.pos); //vector pointing toward arg[0] from arg[1]
    var distance = force.mag(); //determines the length of a vector
    distance = constrain(distance, 1, 25);
    var G = 20;
    var strength = G / (distance * distance);
    force.setMag(strength);
    this.acc.add(force);
  }
}


Atom.DeclareTarget = function(arr){
  Atom.Target = arr;
}
