var town,townImage;
var ninjas,ninjasImage1;
var ninja,ninjasGroup,ninjaImage;
var invisibleGround;
var scrolls, scrollsGroup,scrollImage;
var gameState=PLAY;
var gameState=END;
var gameOver,gameOverImage;
var PLAY=1;
var END=0;
var points;
//var retry,retryImage;

function preload(){
townImage=loadImage("half.jpg");
 ninjasImage1=loadImage("ninjas.jpeg");
  ninjaImage=loadImage("ninja.png");
  scrollImage=loadImage("scroll.jpg");
  gameOverImage=loadImage("game over.png")
//retryImage=loadImage("retry.png")
  
  
}

function setup() {
  createCanvas(600,600);
 town=createSprite(400,200);
  town.scale=4;
  town.addImage(townImage);
  town.velocityX=-2;
 ninja=createSprite(100,260);
  ninja.addImage(ninjaImage);
  ninja.scale=0.4;
  invisibleGround=createSprite(300,300,600,10);
  invisibleGround.visible = false;
 scrollsGroup=createGroup();
  ninjasGroup=createGroup();
points=0;
  ninja.debug = true;
  scroll.debug=true ;
}

function draw() {
 
   if(ninja.isTouching(scrollsGroup)){
     scroll.destroy();
     town.velocityX=-5;
     ninjas.velocityX=-6;
     scroll.velocityX=-5;
     points=points+1;
   }
 
  if(town.x<90){
   town.x = town.width/2;
  }

  
  if(keyDown("space")&& ninja.y >= 161 ) {
        ninja.velocityY = -18;
       
    }
    ninja.velocityY = ninja.velocityY + 0.8;
    ninja.collide(invisibleGround);
  if(ninja.isTouching(ninjasGroup)){
    gameState=END;
    
  }
  if(gameState===PLAY){
  
  if(frameCount%80===0){
     ninjas=createSprite(390,260)
  ninjas.addImage(ninjasImage1);
  ninjas.scale=0.12;
 ninjas.velocityX=-4;
    ninjas.lifetime=100;
    ninjasGroup.add(ninjas);
    town.velocityX=-2;
    
  }
  gameOver.visible=false;
  //  retry.visible=false;
  
  
  }

  
  if(gameState===END){
    ninja.velocityY=0;
   gameOver=createSprite(280,200)
  gameOver.addImage(gameOverImage)
  gameOver.scale=0.1;
    ninjas.velocityX=0;
    scroll.velocityX=0;
    scroll.destroy();
    town.velocityX=0;
    ninjas.destroy();
 // retry=createSprite(290,120)
   // retry.addImage(retryImage);
   // retry.scale=0.3;
  
  }

     
  spawnstars();
 drawSprites();
 textSize(32);
  text("point:"+points,460,50);
}


function spawnstars(){
  if(frameCount%80===0){
     ninjas=createSprite(390,260)
  ninjas.addImage(ninjasImage1);
  ninjas.scale=0.1;
 ninjas.velocityX=-5;
    ninjas.lifetime=100;
    ninjasGroup.add(ninjas);
    scroll=createSprite(390,120,30,30)
    scroll.addImage(scrollImage);
    scroll.scale=0.2;
 scroll.velocityX=-7;
   scroll.lifetime=100; scrollsGroup.add(scroll);
  }
}

