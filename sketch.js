var thickness,wall;
var bullet,speed,weight;


function setup() {
  createCanvas(800,400);
  wall=createSprite(700, 200, 60, height/2);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  bullet=createSprite(50,200,50,50);
  bullet.velocityX=speed;
  
}

function draw() {
  background("black"); 
  if(checkcollide(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5 * weight * speed*speed/(thickness*thickness*thickness);

    if(damage>10){
      wall.shapeColor="green";
    }
    if(damage<10){
      wall.shapeColor="red";
    }
  }
  drawSprites();
}
function checkcollide(bullets,walls){
    bulletRightEdge=bullets.x +bullets.width;
    wallLeftEdge=walls.x;
    if(bulletRightEdge>=wallLeftEdge){
      return true;
    }
    else{
      return false;
    }
}