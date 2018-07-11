var walker;

function setup(){
  createCanvas(500, 500);
  walker = new Walker();
}

function draw(){
  background(0);

  walker.update();
  walker.show();
}

function Walker(){
  this.pos = createVector(width / 2, height / 2);
  this.path = [];

  this.update = function(){

    let randomVector = p5.Vector.random2D();
    let randomMag = Math.random() * 5;

    randomVector.mult(randomMag);

    this.pos.add(randomVector);

    this.path.push({
      pos: createVector(this.pos.x, this.pos.y)
    });
  }

  this.show = function(){
    stroke(255);
    strokeWeight(1);

    for(let i = 0; i < this.path.length - 1; i++){
      let element = this.path[i];
      point(element.pos.x, element.pos.y);
      line(element.pos.x, element.pos.y, this.path[i+1].pos.x, this.path[i+1].pos.y);
    }

    push();
    stroke(0, 255, 0);
    point(this.pos.x, this.pos.y);
    pop();
  }
}
