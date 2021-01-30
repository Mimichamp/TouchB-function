//creating variable
var R1,R2,R3;
var moving;

function setup() {
  createCanvas(800,800);
  
//creating sprites
 R1 = createSprite(100,400,20,20);
 R2 = createSprite(200,400,20,20);
 R3 = createSprite(300,400,20,20);
 
//giving colour to sprites 
 R1.shapeColor="grey";
 R2.shapeColor="grey";
 R3.shapeColor="grey";

 //creating the "moving" sprite
 moving = createSprite(200,500,20,20);
 
 //giving velocity
 R2.velocityX= 3;
}

function draw() {
  background("White"); 

//making "moving" movable with mouse
 moving.x= World.mouseX;
 moving.y= World.mouseY;

//using isTouching function
if (isTouching(R1,moving)){
  R1.shapeColor = "blue"}
else{
  R1.shapeColor = "grey";}

//using BounceOff function
  BounceOff(R2,R3);

  drawSprites();
}
