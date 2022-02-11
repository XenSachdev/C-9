var ball;
function setup() {
  createCanvas(400,400);
ball=createSprite(200,200,69,42)
}
function draw() 
{
  background(30);
if (keyIsDown(UP_ARROW)){
ball.y=ball.y-2
}
drawSprites()

}




