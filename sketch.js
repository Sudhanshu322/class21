
var fixedrect,movingrect;
var gameobj1,gameobj2,gameobj3,gameobj4;


function setup() {
  createCanvas(1200,400);
  fixedrect = createSprite(200, 200, 50, 50);
  movingrect = createSprite(400,200,80,30);
  movingrect.shapeColor = "green";
  fixedrect.shapeColor = "green";
  movingrect.debug = true;
  fixedrect.debug = true;

  gameobj1 = createSprite(100,100,50,50);
  gameobj1.shapeColor = "green";

  gameobj2 = createSprite(200,100,50,50);
  gameobj2.shapeColor = "green";

  gameobj3 = createSprite(300,100,50,50);
  gameobj3.shapeColor = "green";

  gameobj4 = createSprite(400,100,50,50);
  gameobj4.shapeColor = "green";
}

function draw() {
  background(0,0,0);  
  movingrect.x = World.mouseX;
  movingrect.y = World.mouseY;
  if(isTouching(movingrect,gameobj1)){
    movingrect.shapeColor = "blue";
    gameobj1.shapeColor = "blue";
  }
  else
  {
    movingrect.shapeColor = "green";
    gameobj1.shapeColor = "green";
  }
  //isTouching();
  drawSprites();
}

function isTouching(object1 , object2){
  if(object1.x - object2.x < object2.width/2 + object1.width/2 &&
    object2.x-object1.x<object2.width/2 + object1.width/2&&
    object1.y-object2.y<object2.height/2 + object1.height/2&&
    object2.y-object1.y<object2.height/2 +object1.height/2){
 return true;
 }
 
 else{
  return false;
 }
}