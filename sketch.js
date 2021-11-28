var ball
var ground1,ground2,ground3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1 = new ground(width/2,670,width,20)
	ground2 = new ground(500,600,20,120)
	ground3 = new ground(650,600,20,120)
	Engine.run(engine);
  var options2 = {
	  isStatic : false,
	  restitution: 0.3,
	  friction:0,
	  density:1.2

  }
	ball = Bodies.circle(200,625,10,options2)
  World.add(world,ball)
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 ground1.show()
 ground2.show()
 ground3.show()
 ellipse(ball.position.x,ball.position.y,20,20)

}
function keyPressed(){
	if(keyCode===32)
	Matter.Body.applyForce(ball,ball.position,{x:13,y:-13})
}



