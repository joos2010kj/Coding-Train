var fruits = [
  new Element("Orange", 5),
  new Element("Grape", 3),
  new Element("Blueberry", 9),
  new Element("Strawberry", 1),
  new Element("Tomato", 3)
];

var approach1 = [];
var approach2 = [];

function setup(){
  noCanvas();

  //approach 1 = O(sum of weights)
  for(let i = 0; i < fruits.length; i++){
    for(let j = 0; j < fruits[i].weight; j++){
      approach1.push(fruits[i].name);
    }
  }

  //approach 2 = O(n * 2)
  let sum = 0;
  for(let i = 0; i < fruits.length; i++){
    sum += fruits[i].weight;
  }

  for(let i = 0; i < fruits.length; i++){
    approach2.push(fruits[i].weight / sum);
  }

  //approach2 is whole lot faster than approach1

  //comparison
  comparison();
}

function Element(name, weight){
  this.name = name;
  this.weight = weight;
}

function pickA1(){
  return random(approach1);
}

function pickA2(){
  let index = 0;
  let rand = random(1);

  while(true){
    rand = rand - approach2[index];

    if(rand < 0)
      return fruits[index].name;

    index++;
  }
}

function comparison(){
  let obj1 = {};
  let obj2 = {};

  for(let i = 0; i < 10000; i++){
    let temp = pickA1();
    if(obj1[temp]){
      obj1[temp]++;
    }else{
      obj1[temp] = 1;
    }
  }

  for(let i = 0; i < 10000; i++){
    let temp = pickA2();
    if(obj2[temp]){
      obj2[temp]++;
    }else{
      obj2[temp] = 1;
    }
  }

  for(obj in obj1){
    obj1[obj] /= 10000;
    console.log(obj + ": " + obj1[obj]);
  }

  console.log("\n");

  for(obj in obj2){
    obj2[obj] /= 10000;
    console.log(obj + ": " + obj2[obj]);
  }
}
