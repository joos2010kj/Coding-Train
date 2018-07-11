var circles = [];
var img;

function preload(){
  //img = loadImage("res/Paris.jpg");
}

function setup(){
  createCanvas(550, 364);
  circles.push(new Circle(100, 100));

  //img.loadPixels();
}

function draw(){
  background(0);

  for(let circle of circles){
    circle.update();
    circle.show();
    circle.contactCheck();
  }

  Circle.generate(3);
}
