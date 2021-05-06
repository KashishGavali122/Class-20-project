var bgI ;
var cat,mouse;

function preload() {
    //load the images here
    bgI = loadImage("Images/garden.png");
    cat1=loadImage("Images/cat1.png");
    catRunning1=loadAnimation("Images/cat2.png","Images/cat3.png");
   /// cat=loadImage("Images/cat3.png");
    cat4=loadImage("Images/cat4.png");
    mouse1=loadImage("Images/mouse1.png");
  //  mouse3=loadImage("Images/mouse3.png");
    mouse2=loadImage("Images/mouse2.png","Images/mouse3.png");

    mouse4=loadImage("Images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat=createSprite(840,600);
    cat.addAnimation("cat1.png",cat1);
    cat.scale=0.2;

    mouse=createSprite(100,600);
    mouse.addAnimation("mouse1.png",mouse1);
    mouse.scale=0.2;

}

function draw() {

    background(bgI)
    //Write condition here to evalute if tom and jerry collide
    if(cat.x-mouse.x < (cat.width-mouse.width))
    cat.velocityX=0;
    cat.addAnimation("cat4.png",cat4);
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW)
    {
        cat.velocityX=-3;
        cat.addAnimation("catRunning1",catRunning1);
        cat.changeAnimation("catRunning1");
        
        mouse.addAnimation("mouse2",mouse2);

        mouse.frameDelay=136;
        mouse.changeAnimation("mouse2");
    }
    
    
    


}
