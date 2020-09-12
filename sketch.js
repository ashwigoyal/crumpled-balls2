

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,Base, leftWall, rightWall,paper;
var engine, world;

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;
    
	dustbin = new Dustbin(700,510,10,10);
	 
	
	ground = new Ground(800,665,1600,20);

	
	paper = new Paper(100,600);

	Engine.run(engine);
	
}


function draw() {

  background(255);

  ground.display();
 
  dustbin.display();
  
  paper.display();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x : 45,y : -75})
	}
}








