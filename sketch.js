var bg,bgImg
var cat,mouse
var catImg1,catImg2,catImg3
var mouseImg1,mouseImg2,mouseImg3

function preload() {
    //load the images here
bgImg= loadImage("images/garden.png") 

catImg1= loadAnimation("images/cat1.png")
catImg2= loadAnimation("images/cat2.png","images/cat3.png")
catImg3= loadAnimation("images/cat4.png")
mouseImg1= loadAnimation("images/mouse1.png")
mouseImg2= loadAnimation("images/mouse2.png","images/mouse3.png")
mouseImg3= loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
bg = createSprite(500,400,1000,800)
bg.addImage("bg",bgImg)

cat=createSprite(870,600)
cat.addAnimation("tomSleeping", catImg1)
cat.scale=0.2

mouse=createSprite(200,600)
mouse.addAnimation("jerryStanding", mouseImg1)
mouse.scale=0.15

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
 if(cat.x-mouse.x < (cat.width/2 - mouse.width/2)+100)
{ 
    cat.velocityX=0
    
    cat.addAnimation("tomLastImage", catImg3)
    cat.x=400
    cat.scale=0.2
    cat.changeAnimation("tomLastImage")

    mouse.addAnimation("jerryLastImage", mouseImg3)
    mouse.x=300
    mouse.scale=0.2
    mouse.changeAnimation("jerryLastImage")
}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

 if(keyCode === LEFT_ARROW){
     cat.velocityX= -5
     cat.addAnimation("tomRunning", catImg2)
    cat.changeAnimation("tomRunning")

    mouse.addAnimation("jerryTeasing", mouseImg2)
    mouse.changeAnimation("jerryTeasing")

 }


}
