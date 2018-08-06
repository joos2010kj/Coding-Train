var walker;
var pwalker;

function setup(){
  createCanvas(500, 500);
  walker = new Walker();
  pwalker = new PerlinWalker();
}

function draw(){
  background(0);

  walker.update();
  walker.show();

  pwalker.update();
  pwalker.show();
}

function PerlinWalker(){
  this.pos = createVector(width / 2, height / 2);
  this.path = [];

  this.perlin = {
    x: 0,
    y: 1000,
    xoff: 0.001,
    yoff: 0.001
  };

  this.update = function(){
      let randomVector = createVector( noise(this.perlin.x), noise(this.perlin.y) );
      randomVector.x = map(randomVector.x, 0, 1, -1, 1);
      randomVector.y = map(randomVector.y, 0, 1, -1, 1);

      let randomMag = Math.random() * 5;

      this.perlin.x += this.perlin.xoff;
      this.perlin.y += this.perlin.yoff;

      randomVector.mult(randomMag);

      this.pos.add(randomVector);

      this.path.push({
        pos: createVector(this.pos.x, this.pos.y)
      });
  }

  this.show = function(){
    stroke(0, 0, 255);
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
