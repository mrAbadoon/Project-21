
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world,engine;

var ground,leftWall,rightWall;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    

	engine = Engine.create();
	world = engine.world;

  ball_options = {
    isStatic : false,
    restitution : 0.3
  }
  ball = Bodies.circle(100,270,30,ball_options);
  World.add(world,ball);

	//Create the Bodies Here.
    ground= new Ground(400,600,800,10);
    leftWall = new Ground(650,529,20,150);
    rightWall = new Ground(380,529,20,150);

  rectMode(CENTER);
}


function draw() {
  Engine.update(engine);
  background(15);
  ground.display();
  leftWall.display();
  rightWall.display();
  push();
  fill("white");
  ellipse(ball.position.x,ball.position.y,30);
  pop();

  if(keyDown("UP_ARROW")){
     vForce();
  }

  if(keyDown("DOWN_ARROW")){
     wForce();
  }
}

function vForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.04,y:-0.03});
}

function wForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:-0.04,y:0.03});
}

