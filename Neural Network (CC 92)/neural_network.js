function neural_network_testing(){
  ball.r = 50;
  let intersecting = ball.check(blocks, true);
  ball.r = 25;

  let closest = 1000;
  let ind = -1;

  for(let i = 0; i < blocks.length; i++){
    let block = blocks[i];
    block.closestOne = false;
    if(ball.pos.x < block.pos.x + block.width / 2){
      let distance = dist(ball.pos.x, ball.pos.y, block.pos.x, block.pos.y);
      if(distance < closest){
        closest = distance;
        ind = i;
      }
    }
  }

  blocks[ind].closestOne = true;

  let currentlyIntersecting = ball.check(blocks,true);
  let closestBlock = blocks[ind];
  let distance = dist(ball.pos.x, ball.pos.y, closestBlock.pos.x, closestBlock.pos.y);

  if(intersecting && !ball.isJumping){
    brain.train([distance], [1]);
  }else if(!intersecting){
    brain.train([distance], [0.5]);
  }

  if(currentlyIntersecting){
    brain.train([distance], [0]);
  }

  let predicted = brain.predict([distance]);

  console.log(predicted);

  if(brain.predict([distance]) > 0.53){
    ball.jump();
  }

  if(ball.intersects(closestBlock)){
    hit++;
  }

  let rng = map(predicted - 0.5, 0, 0.05, 0, 255);
  ball.col = rng;

  textAlign(CENTER, CENTER);
  textSize(30);
  text("Hit Counter : " + hit, width / 2, 100);
}
