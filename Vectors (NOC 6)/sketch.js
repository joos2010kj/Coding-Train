var target;
var vehicles = [];
var maxVel = 5;
var maxForce = 0.1;
var counter = 0;

function setup(){
    createCanvas(500, 500);
    target = new Target();

    for(let i = 0; i < 1; i++)
      vehicles[i] = new Vehicle(random(width), random(height), target);
}

function draw(){
    background(51);

    target.update();
    target.show();

    vehicles.forEach(vehicle => {
      vehicle.update();
      vehicle.show();
    });
}

function Vehicle(x, y, target){
  this.pos = createVector(x, y);
  this.vel = createVector();
  this.acc = createVector();
  this.target = target;

  this.update = function(){
    this.approach(this.target);

    this.vel.add(this.acc);
    this.vel.limit(maxVel);

    this.pos.add(this.vel);

    this.acc.mult(0);
  }

  this.show = function(){
    push();
    fill(0, 255, 0);
    ellipse(this.pos.x, this.pos.y, 30, 30);
    pop();
  }

  this.approach = function(target){
    let dir = p5.Vector.sub(this.target.pos, this.pos);
    dir.setMag(maxVel);

    let steer = p5.Vector.sub(dir, this.vel);
    steer.limit(maxForce);

    this.acc = steer;
  }
}

function Target(){
  this.pos = createVector(mouseX, mouseY);

  this.update = function(){
    this.pos = createVector(mouseX, mouseY);
  }

  this.show = function(){
    push();
    fill(255, 0, 0);
    ellipse(this.pos.x, this.pos.y, 10, 10);
    pop();
  }
}
