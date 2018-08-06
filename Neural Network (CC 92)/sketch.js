let brain;
let ball;
let blocks = [];
let hit = 0;

function setup(){
  createCanvas(800, 400);
  brain = new NeuralNetwork(1, 10, 1);
  ball = new Ball();
  for(let i = 0; i < floor(width / 200) + 1; i++){
    blocks.push(new Block(width + i * 250));
  }
}

function draw(){
  background(51);

  ball.update();
  ball.show();
  ball.check(blocks, false);

  line(0, 300 + ball.r, width, 300 + ball.r);

  for(let block of blocks){
    block.update();
    block.show();
  }

  for(let i = blocks.length - 1; i >= 0; i--){
    let block = blocks[i];

    if(block.pos.x + block.width / 2 < 0){
      blocks.splice(i, 1);
      blocks.push(new Block(blocks[blocks.length - 1].pos.x + 150 + random(0, 200)));
    }
  }

  neural_network_testing();
}
