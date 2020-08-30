var bullet, bullet1, bullet2, bullet3;
var bullet_image, bullet1_image, bullet2_image, bullet3_image;
var wall;
var seperator, seperator1, seperator2, seperator3;
var weight, speed, thickness;
var deformation;




function preload(){
  bullet_image = loadImage("InkedInkedbullet_LI.jpg");
  bullet1_image = loadImage("InkedInkedbullet_LI.jpg");
  bullet2_image = loadImage("InkedInkedbullet_LI.jpg");
  bullet3_image = loadImage("InkedInkedbullet_LI.jpg");
  

}



function setup() {
  createCanvas(400,400);
bullet =  createSprite(50, 10, 50, 50);
bullet1 = createSprite(50, 110, 50, 50);
bullet2 = createSprite(50, 210, 50, 50);
bullet3 = createSprite(50, 310, 50, 50);
wall = createSprite(390,200,30,400);

bullet.addImage(bullet_image);
  bullet.scale = 0.4;
bullet1.addImage(bullet1_image);
  bullet1.scale = 0.4;
bullet2.addImage(bullet2_image);
  bullet2.scale = 0.4;
bullet3.addImage(bullet3_image);
  bullet3.scale = 0.4;



speed = random(223,321);
weight = random(30,52);
thickness = random(22,83);


deformation = 0.5 * weight * speed * speed/(thickness * thickness*thickness);




seperator =  createSprite(175,60,400,5);
seperator1 = createSprite(175,170,400,5);
seperator2 = createSprite(175,270,400,5);
seperator3 = createSprite(175,370,400,5);
}



function draw() {
  background("white"); 
  
  seperator.shapeColor =  "black";
  seperator1.shapeColor = "black"; 
  seperator2.shapeColor = "black"; 
  seperator3.shapeColor = "black"; 

  bullet.velocityX = random(5,10);
  bullet1.velocityX = random(5,10);
  bullet2.velocityX = random(5,10);
  bullet3.velocityX = random(5,10);

  bullet.collide(wall);
  bullet1.collide(wall);
  bullet2.collide(wall);
  bullet3.collide(wall);
  console.log(deformation);

  if(deformation>=10){
 
    background("red");

  }
  else if(deformation<10){
    background("green");

  }



  drawSprites();
 
  

}

