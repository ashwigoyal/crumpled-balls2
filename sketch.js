  
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

function setup() {
  createCanvas(1600,700);
  engine = Engine.create();
  world = engine.world;
ground=new Ground(800,665,1600,20)
paper=new Paper(100,600,30)
base=new Dustbin(900,550,200,200)
left=new Dustbin(800,610,20,100)
right=new Dustbin(1000,610,20,100)
}

function draw() {
  background(255);  
  
  Engine.update(engine);
  ground.display();
  paper.display();
  base.display();
  //left.display();
  //right.display();

  
}
function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:150,y:-150})
  }
}