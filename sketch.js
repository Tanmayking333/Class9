var rect1
var rect2
function setup() {
  createCanvas(400,400);
  rect1=createSprite(100,100,10,50)
  rect2=createSprite(200,100,10,50)
  rect2.shapeColor = "cyan"
  rect1.shapeColor = "cyan"
}

console.log("hello!")
function draw() 
{
  background(30);
  drawSprites()
}




