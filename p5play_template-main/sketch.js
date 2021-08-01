
function setup() {
  createCanvas(400,400);
  var sprite = createSprite(200,200,40,40)
}

function draw() 
{
  background(30);


  if(keyIsDown(RIGHT_ARROW)){
    background ("red")
  }

  if(keyIsDown(UP_ARROW)){
    background ("purple")
  }
  if(keyIsDown(DOWN_ARROW)){
    background ("blue")
  }
  if(keyIsDown(LEFT_ARROW)){
    background ("green")
  }
  drawSprites();
}



