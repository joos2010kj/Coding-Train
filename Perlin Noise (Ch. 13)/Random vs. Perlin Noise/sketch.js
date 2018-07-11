var randomVal;
var perlinNoiseVal;

var balls = [];

function setup(){
  createCanvas(500,  500);
  balls.push(new Ball(0, 0, {r: 0, g: 255, b: 0}, true));
  balls.push(new Ball(0, height / 2, {r: 255, g: 0, b: 0}, false));
}

function draw(){
  background(51);
  frameRate(5);

  for(let ball of balls){
    ball.update();
    ball.show();
  }
}

function Ball(x, y, col, perlin){
  this.pos = createVector(x, y);
  this.rand;
  this.yoff = 0; //used only for perlin noise case
  this.posArr = {
    x: [this.pos.x],
    y: [this.pos.y],
    leng: 1
  }

  this.update = function(){
    if(perlin == false)
      this.rand = random(height / 2);
    else if(perlin == true){
      this.rand = noise(this.yoff) * (height / 2);
      this.yoff += 0.1; //the closer the number is to the previous number,
                        //the smaller the random change is between the two

      /*NOTE: Perlin noise has a bell-curve-like distribution.
            Also, the random value assigned to one number is
            the same throughout the run. The values assigned are
            renewed once the code is run again.
            (i.e. If noise(100) == 0.32, then no matter how many
            times you do console.log(noise(100)), 0.32 will appear.
            However, once you rerun the program, noise(100) will have
            changed to a different random value similar to prev and
            next number.)
      */
    }

    this.posArr.x.push(this.pos.x);
    this.posArr.y.push(this.rand + this.pos.y);
    this.posArr.leng++;

    this.pos.x++;

    if(this.pos.x == width){
      noLoop();
    }
  }

  this.show = function(){
    push();

    stroke(col.r, col.g, col.b);
    strokeWeight(1);

    beginShape();
    noFill();
    for(let i = 0; i < this.posArr.leng; i++){
      vertex(this.posArr.x[i], this.posArr.y[i]);
    }
    endShape();

    strokeWeight(20);
    point(this.posArr.x[this.posArr.leng - 1], this.posArr.y[this.posArr.leng - 1]);

    pop();
  }
}
