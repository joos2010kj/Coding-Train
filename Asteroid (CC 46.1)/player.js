function Player(){
  this.pos = createVector(width / 2, height / 2);
  this.rad = 20;

  this.forwardAngle = 0;
  this.rotationAngle = 0;

  this.vel = createVector(0, 0);

  this.dots = 3;

  this.update = function(){
    this.turn();
    this.move();

    this.vel.mult(0.99); //FRICTION
  }

  this.show = function(){
    push();

    stroke(255);
    noFill();

    translate(this.pos.x, this.pos.y);
    rotate(this.forwardAngle);

    beginShape();
    for(let i = 0; i <= this.dots; i++){
      let angle = map(i, 0, this.dots, 0, TWO_PI);

      let pt = createVector(
        this.rad * cos(angle),
        this.rad * sin(angle)
      );
      vertex(pt.x, pt.y);
    }
    endShape();

    pop();
  }

  this.turn = function(){
    this.forwardAngle += this.rotationAngle;
  }

  this.move = function(){
    this.pos.add(this.vel);
  }

  this.control = function(bool){
    if(bool){ //(bool == true) === (keyPressed)
      if(keyCode == RIGHT_ARROW){
        this.rotationAngle = 0.1;
      }
      else if(keyCode == LEFT_ARROW){
        this.rotationAngle = -0.1;
      }

      else if(keyCode == UP_ARROW){
        let force = p5.Vector.fromAngle(this.forwardAngle);
        //force.mult(5);
        this.vel.add(force);
      }
    }else{  //(bool == false) === (keyReleased)
      this.rotationAngle = 0;
      //this.vel = createVector(0, 0);
    }
  }
}
