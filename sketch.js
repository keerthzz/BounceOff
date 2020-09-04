var fixedRect, movingRect;
var gameobject1, gameobject2, gameobject3, gameobject4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  gameobject1= createSprite(200,50,20,10);
  gameobject2= createSprite(40,750,30, 100);
  gameobject3= createSprite(50,50,50,30);
  gameobject4= createSprite(40,70,90,60);

  gameobject1.shapeColor = "green";
  gameobject2.shapeColor = "green";
  gameobject3.shapeColor = "green";
  gameobject4.shapeColor = "green";

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  
  gameobject1.velocityX = -3; 
  gameobject2.velocityY = -6;
  gameobject3.velocityX = 9;
  gameobject4.velocityY = 7;
}

function draw() {
  background(0,0,0);  

  bounceOff(gameobject1,gameobject3);

  bounceOff(gameobject2,gameobject4);

  drawSprites();
}
