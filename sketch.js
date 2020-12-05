var fixedrect,movingrect;


function setup() {
  createCanvas(1200,800);
  movingrect=createSprite(400, 200, 50, 50);
  movingrect.shapeColor="green";
  fixedrect= createSprite(600,200,50,50);
  fixedrect.shapeColor="green";

}

function draw() {
  background(255,255,255); 
  movingrect.velocityX=2;
  fixedrect.velocityX=-2;

 


 

  bounceOFF(movingrect,fixedrect)

  drawSprites();
}

