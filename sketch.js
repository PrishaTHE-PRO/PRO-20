var car, wall;
var car2,wall2;
var car3,wall3;
var speed, weight;

function setup() {
  speed = random(55,90);
  weight = random(400,1500);

  car = createSprite(20,170,50,50);
  car2 = createSprite(20,270,50,50);
  car3 = createSprite(20,370,50,50);
wall = createSprite(1000,200,60,height/2);
wall2 = createSprite(1000,300,60,height/2);
wall3 = createSprite(1000,400,60,height/2);


car.velocityX = speed;
car2.velocityX = speed;
car3.velocityX = speed;

wall.shapeColor=(80,80,80);
wall2.shapeColor=(80,80,80);
wall3.shapeColor=(80,80,80);

  createCanvas(1000,1000);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
if(wall.x-car.x < (car.width + wall.width)/2)
{
  car.velocityX = 0;
  var deformation=0.5 * weight * speed* speed/22509;
  if(deformation>180)
  {
    car.shapeColor=color(255,0,0);
  }
  if(deformation<180 && deformation>100)
  {
    car.shapeColor=color(230,230,0);
  }
  if(deformation<100)
  {
    car.shapeColor=color(0,255,0);
  }
}
if(wall2.x-car2.x < (car2.width + wall2.width)/2)
{
  car2.velocityX = 0;
  var deformation=0.5 * weight * speed* speed/22509;
  if(deformation>180)
  {
    car2.shapeColor=color(255,0,0);
  }
  if(deformation<180 && deformation>100)
  {
    car2.shapeColor=color(230,230,0);
  }
  if(deformation<100)
  {
    car2.shapeColor=color(0,255,0);
  }
}
if(wall3.x-car3.x < (car3.width + wall3.width)/2)
{
  car3.velocityX = 0;
  var deformation=0.5 * weight * speed* speed/22509;
  if(deformation>180)
  {
    car3.shapeColor=color(255,0,0);
  }
  if(deformation<180 && deformation>100)
  {
    car3.shapeColor=color(230,230,0);
  }
  if(deformation<100)
  {
    car3.shapeColor=color(0,255,0);
  }
}



  drawSprites();
}