var c1, c2 ;

function setup() {
  createCanvas(1200,800,50,80);
  c1 = createSprite(600, 400,60,90);
  c1.shapeColor = "green" ;
  c2 = createSprite(400,200,70,100);
  c2.shapeColor = "green" ;
}

function draw() {
  background(0);  

 c1.x = World.mouseX ;
 c1.y = World.mouseY ;

  if(c1.x - c2.x < c2.width/2 + c1.width/2 
  && c2.x - c1.x < c2.width/2 + c1.width/2){
  } 

 

  if (c1.y - c2.y < c2.width/2 +c1.width/2 
  && c2.y - c1.y < c2.width/2 + c1.width/2) {
    c1.shapeColor = "red" ;
   c2.shapeColor = "red" ;
  }

  else{
   c1.shapeColor = "green" ;
    c2.shapeColor = "green" ;
  } 

  drawSprites();
  
}