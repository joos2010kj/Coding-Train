function Ball(){
  this.pos = createVector(100, 300);
  this.vel = createVector(0, 0);
  this.r = 25;
  this.increment = 1;
  this.cap = 15;
  this.isJumping = false;
  this.isIntersecting = false;
  this.col = 0;

  this.update = function(){
    this.pos.add(this.vel);

    if(this.isJumping){
      if(this.vel.y + this.increment > this.cap){
        this.isJumping = false;
        this.vel.y = 0;
      }else{
        this.vel.y += this.increment;
      }
    }
  }

  this.show = function(){
    push();
    fill(this.col);
    ellipse(this.pos.x, this.pos.y, 2 * this.r);
    pop();
  }

  this.jump = function(){
    if(!this.isJumping){
      this.isJumping = true;
      this.vel.y = -this.cap;
    }
  }

  this.check = function(rects, test){
    if(test == false){
      for(let i = rects.length - 1; i >= 0; i--){
        let rect = rects[i];
        if(this.intersects(rect)){
          this.isIntersecting = true;
          return;
        }
      }
      this.isIntersecting = false;
    }else{
      for(let i = rects.length - 1; i >= 0; i--){
        let rect = rects[i];
        if(this.intersects(rect)){
          if(this.pos.x < rect.pos.x + rect.width / 2){
            return true;
          }
        }
      }
      return false;
    }
  }

  this.intersects = function(rect){
    let range = createVector( abs(this.pos.x - rect.pos.x), abs(this.pos.y - rect.pos.y) );

    if (range.x > (rect.width / 2 + this.r)) {
      return false;
    }
    if (range.y > (rect.height / 2 + this.r)) {
      return false;
    }
    if (range.x <= (rect.width / 2)) {
      return true;
    }
    if (range.y <= (rect.height / 2)) {
      return true;
    }

    let sq = Math.pow( (range.x - rect.width / 2), 2) +
             Math.pow( (range.y - rect.height / 2), 2);

    return sq <= Math.pow(this.r, 2);
  }
}
