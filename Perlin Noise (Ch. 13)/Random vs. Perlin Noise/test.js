var ball;

function setup(){
  createCanvas(500,  500);
  ball = new Ball(0, height / 2, {r: 0, g: 255, b: 0});
}

function draw(){
  background(51);

  ball.update();
  ball.show();
}

function Ball(x, y, col){
  this.pos = createVector(x, y);
  this.posArr = [];

  this.update = function(){
    this.posArr.push(Object.assign({}, this.pos));
    this.pos.x++;
  }

  this.show = function(){
    stroke(col.r, col.g, col.b);
    strokeWeight(10);
    for(let i = 0; i < this.posArr.length; i++){
      point(this.posArr[i].x, this.posArr[i].y);
    }
  }
}
