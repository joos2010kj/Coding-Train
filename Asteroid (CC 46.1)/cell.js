function Cell(num, rad){
  this.pos = createVector(random(width), random(height));
  this.vel = p5.Vector.random2D();

  this.points = num;
  this.rad = rad;
  this.offset = [];

  for(let i = 0; i < this.points; i++){
    let range = 15;
    this.offset[i] = Math.random() * (2 * range) - range;
  }

  this.update = function(){
    this.pos.add(this.vel);
  }

  this.show = function(){
    stroke(255);
    noFill();

    beginShape();
    for(let i = 0; i < this.points; i++){
      let angle = map(i, 0, this.points, 0, TWO_PI);
      let pt = createVector(
        (this.rad + this.offset[i]) * cos(angle) + this.pos.x,
        (this.rad + this.offset[i]) * sin(angle) + this.pos.y
      );

      vertex(pt.x, pt.y);
    }
    endShape(CLOSE);
  }
}
