var fixedRect, movingRect,gameObject1; 
function setup() {
   createCanvas(800,400);
    fixedRect=createSprite(400, 200, 50, 50);
    fixedRect.shapeColor="green";
    fixedRect.debug=true;
  //  fixedRect.velocityX=-4;
  
    movingRect=createSprite(600,200,50,30);
    movingRect.shapeColor="green";
    movingRect.debug=true;

    gameObject1=createSprite(100,100,50,50);
    gameObject1.shapeColor="green";
//gameObject1.velocityX=4


    }
     function draw() {
        background(255,255,255);
        movingRect.x=mouseX;
        movingRect.y=mouseY; 

       isTouching(movingRect,gameObject1);
       //bounceOff(movingRect,gameObject1);
       drawSprites();
      }  