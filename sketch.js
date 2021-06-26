
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

function setup() {
	createCanvas(1500,1500);

	engine = Engine.create();
	world = engine.world;

ground = new Ground(width/2,670,width,20);
leftSide = new Ground(1100,600,20,120);
rightSide = new Ground(1200,600,20,120);

	var ball_options={
		restitution:0.3,
		}
		
	//Create the Bodies Here.
	ball=Bodies.circle(200,100,20,ball_options)
	World.add(world,ball)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(0);
  Engine.update(engine);

ground.display();
leftSide.display();
rightSide.display();

ellipse(ball.position.x,ball.position.y,20)

 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0.05})
	}
}







