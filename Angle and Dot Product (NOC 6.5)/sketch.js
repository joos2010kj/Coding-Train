var compass;
var mouseLoc;

function setup(){
  createCanvas(500, 500);
  compass = new Compass(width / 2, height / 2);
}

function draw(){
  background(51);

  mouseLoc = createVector(mouseX, mouseY);

  ellipse(mouseLoc.x, mouseLoc.y, 10, 10);

  compass.show();
}

function Compass(x, y){
  this.pos = createVector(x, y);
  this.r = width / 4;

  this.update = function(){
  }

  this.show = function(){
    stroke(255);
    line(this.pos.x, this.pos.y, this.pos.x + this.r, this.pos.y);

    let dir = p5.Vector.sub(mouseLoc, this.pos); //find the direction vector towards mouseLoc from this.pos
    dir.normalize();
    dir.mult(this.r);
    //two lines above are the same as just "dir.setMag(this.r);"

    let heading = createVector(this.r, 0); //angle with respect to WHAT vector?
                                        //In other words, what's the "heading" direction/vector
                                        //NOTE: location of the heading vector or its length is not taken into consideration
    let angle = Compass.angleBetween(dir, heading);
    console.log(floor(map(angle, 0, PI, 0, 180)) + " degrees");


    line(this.pos.x, this.pos.y, this.pos.x + dir.x, this.pos.y + dir.y);
  }

  Compass.angleBetween = function(compassVec, mouseVec){
    //A * B = Ax * Bx + Ay * By = |A| * |B| * cos(theta)

    let dotProduct = compassVec.x * mouseVec.x + compassVec.y * mouseVec.y; //a.dot(b)
    let magA = compassVec.mag();
    let magB = mouseVec.mag();

    let theta = acos(dotProduct / (magA * magB));

    return theta;
  }
}
