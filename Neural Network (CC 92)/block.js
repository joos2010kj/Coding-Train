function Block(x){
  this.pos = createVector(x, 300);
  this.vel = createVector(-5, 0);
  this.width = 50;
  this.height = 20;
  this.col = 0;
  this.closestOne = false;

  this.update = function(){
    this.pos.add(this.vel);
  }

  this.show = function(){
    rectMode(CENTER);
    if(this.closestOne){
      this.col = 100;
    }else{
      this.col = 0;
    }
    fill(this.col);
    rect(this.pos.x, this.pos.y, this.width, this.height);
  }
}
