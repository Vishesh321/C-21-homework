var PLAY=1;
var END=0;
var gameState =PLAY;
var monkey,monkey_running,banana,bananaImage,FoodGroup,obstacle,obstacleImage,backgroundImage,obstacleGroup,score;
var invisibleGround;

function preload() {
  
  monkey_running =loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  backgroundImage =loadImage("jungle.jpg");
  bananaImage =loadImage("banana.png");
  obstacleImage =loadImage("stone.png");
}

function setup() {
  createCanvas(400, 400);
  monkey =createSprite(100,281,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;
  
  invisibleGround =createSprite(200,320,500,10);
  
   score =0;
  FoodGroup = new Group();
  obstacleGroup = new Group();
}

function draw() {
  background(backgroundImage);
  background.velocityX =-5;
  background.x =background.width/2;
  
  text(mouseX+","+mouseY,mouseX,mouseY);
  
  score =score+1;
  stroke("white");
  textSize(20);
  fill("white");
  text("Score:"+score,500,50);
  
  
 if(gameState ===PLAY) {
    
    }  
  
  
  if(background.x<0) {
     background.x =background.width/2;
     }
  
  
  invisibleGround.visible =false;
  
 invisibleGround.velocityX =-4;
  
  if(invisibleGround.x<0) {
     invisibleGround.x =invisibleGround.width/2;
     }
  
   if(keyDown("space")) {
      monkey.velocityY =-12;
      }
  monkey.velocityY =monkey.velocityY+0.7;
  monkey.collide(invisibleGround);
  
  drawSprites();
  spawnBananas();
  spawnObstacles();
}
 function spawnBananas() {
   if(frameCount %80 ===0) {
      var banana =createSprite(180,140,20,20);
     banana.y =Math.round(random(120,200));
     banana.addImage(bananaImage);
     banana.scale=0.05;
     banana.velocityX =-5;
     banana.lifetime =200;
     FoodGroup.add(banana);
      }
 }
 function spawnObstacles() {
   if(frameCount%300 === 0) {
      var obstacle=createSprite(230,328,20,20); 
     obstacle.addImage(obstacleImage);
     obstacle.scale=0.1;
     obstacle.velocityX =-5;
     obstacle.lifetime =200;
      }
 }