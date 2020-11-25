const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function setup() {
  createCanvas(800,400);

  ground= new Ground (400,350,800,50)
}

function draw() {
  background(255,255,255);  

  ground.display();
  drawSprites();
}