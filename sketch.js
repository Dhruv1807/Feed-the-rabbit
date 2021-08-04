var garden,rabbit;
var gardenImg,rabbitImg;
var appleImg, apple;
var leaf, leafImg;
var orgleaf, orgleafImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png");
  orgleafImg = loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);


//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

var rand =  Math.round(random(1,100))
}


function draw() {
  background(0);
  
  console.log(frameCount);
  edges= createEdgeSprites();
  rabbit.collide(edges);

  if (keyDown("right")){
    rabbit.x += 4;
  }

  if (keyDown("left")){
    rabbit.x -= 4;
  }
  spawnApple();
   
  spawnLeaf();

  spawnorgLeaf();

  drawSprites();
}
function spawnLeaf(){
  if (frameCount % 60 === 0){
    leaf = createSprite(Math.round(random(80, 330)), 20, 20, 20)
    leaf.addImage(leafImg);
    leaf.velocityY = 3;
    leaf.scale = 0.1;
  }

}

function spawnorgLeaf(){
  if (frameCount % 150 === 0){
    orgleaf = createSprite(Math.round(random(80, 330)), 20, 20, 20)
    orgleaf.addImage(orgleafImg);
    orgleaf.velocityY = 3;
    orgleaf.scale = 0.1;
  }

}

function spawnApple(){
  if (frameCount % 100 === 0){
    apple = createSprite( Math.round(random(80, 330)), 20, 20, 20)
    apple.addImage(appleImg);
    apple.scale = 0.1;
    apple.velocityY = 3
  }


}