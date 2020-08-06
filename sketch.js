var fixedrect,movingrect;



function setup() {
  createCanvas(1200,800);

  fixedrect =  createSprite(400, 200, 50, 50);
  movingrect = createSprite(600,400,80,30);
  movingrect.shapeColor("green");
  fixedrect.shapeColor("green");

  movingrect.VelocityX = 4;
  fixedrect.VelocityX = -4;

}

function draw() {
  background(0,0,0);  

  
if(fixedrect.x - movingrect.x<fixedrect.width/2 + movingrect.width/2&&
  movingrect.x - fixedrect.x<fixedrect.width/2 + movingrect.width/2){
    movingrect.VelocityX = movingrect.VelocityX *(-1);
    fixedrect.VelocityX = fixedrect.VelocityX  *(-1);
  }
  else if( fixedrect.y - movingrect.y<fixedrect.height/2 + movingrect.height/2&&
  movingrect.y - fixedrect.y<fixedrect.height/2 + movingrect.height/2 )
  {
    movingrect.VelocityY = movingrect.VelocityY *(-1);
    fixedrect.VelocityY = fixedrect.VelocityY  *(-1);  
}

  
  drawSprites();
}