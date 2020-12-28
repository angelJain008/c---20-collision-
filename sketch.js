var moving,fixed;

function setup() {
  createCanvas(800,400);
 fixed = createSprite(400, 200, 50, 80);
 moving = createSprite(200,200,80,50);

 fixed.shapeColor = "red";
 moving.shapeColor ="black";

 moving.velocityX=2;
 fixed.velocityX = -2;
}

function draw() {
  background("pink");  

 // moving.x = mouseX;
  //moving.y = mouseY;

  console.log(fixed.x-moving.x);

  // collision algorithm

  /*
  if(fixed.x-moving.x <= fixed.width/2 + moving.width/2 && 
    moving.x - fixed.x <= fixed.width/2 + moving.width/2 &&
    fixed.y-moving.y<= fixed.height/2+ moving.height/2 &&
    moving.y-fixed.y<= moving.height/2 + fixed.height/2 ){
    fixed.shapeColor = "green";
 moving.shapeColor ="green";
  }
else{
  fixed.shapeColor = "red";
 moving.shapeColor ="black";
}
*/

//bounce off Algorithm
if(fixed.x-moving.x <= fixed.width/2 + moving.width/2 && 
  moving.x - fixed.x <= fixed.width/2 + moving.width/2){

    moving.velocityX = -moving.velocityX;
    fixed.velocityX = -fixed.velocityX;
  }
  if(fixed.y-moving.y<= fixed.height/2+ moving.height/2 &&
    moving.y-fixed.y<= moving.height/2 + fixed.height/2 ){
      moving.velocityY = -moving.velocityY;
    fixed.velocityY = -fixed.velocityY;
    }


  drawSprites(); 
}