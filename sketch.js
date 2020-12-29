const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world;
var ground;
var box1,box2;

function setup() {
  createCanvas(1200,500);
  
  engine=Engine.create();
  world=engine.world;

  box1 = new Box(700,200,40,40);
  box2 = new Box(700,200,40,40);
  box3 = new Box(700,200,40,40);
  box4 = new Box(700,200,40,40);
  box5 = new Box(700,200,40,40);
  box6 = new Box(700,200,40,40);
  box7 = new Box(700,200,40,40);
  box8 = new Box(700,200,40,40);
  box9 = new Box(800,200,40,40);
  box10 = new Box(800,200,40,40);
  box11 = new Box(800,200,40,40);
  box12 = new Box(800,200,40,40);
  box13 = new Box(800,200,40,40);
  box14 = new Box(800,200,40,40);
  box15 = new Box(800,200,40,40);
  box16 = new Box(800,200,40,40);
  
  ball1 = new Ball(600,400,40);

  rope1 = new Rope(ball1.body,{x:600,y:50});
  ground = new Ground(600,480,1200,10);
  
  
}

function draw() {
  background(0);
  Engine.update(engine);
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  ball1.display();
  rope1.display();
  ground.display();
  
}

function mouseDragged(){
  Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY});
  
}