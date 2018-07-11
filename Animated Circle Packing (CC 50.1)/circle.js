function Circle(x, y){
  this.x = x;
  this.y = y;
  this.r = 0;
  this.pause = false;

  this.update = function(){
    if(!this.pause)
      this.r++;
  }

  this.show = function(){
    noFill();
    stroke(255);
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
  }

  this.contactCheck = function(){
    for(let circle of circles){
      if(this.x == circle.x && this.y == circle.y)
        continue;

      let distance = dist(this.x, this.y, circle.x, circle.y);
      if(distance < this.r + circle.r + 2){
        circle.pause = true;
        this.pause = true;
      }
    }
  }
}

Circle.generate = function(num){
  for(let i = 0;i < num; i++){
    let x = random(width);
    let y = random(height);
    let noContact = true;

    for(let circle of circles){
      let distance = dist(x, y, circle.x, circle.y);
      if(distance < circle.r)
        noContact = false;
    }

    if(noContact)
      circles.push(new Circle(x, y));
    else {
      Circle.generate();
    }
  }
}
