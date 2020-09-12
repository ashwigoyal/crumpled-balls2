
  class Paper {
    constructor(x, y) {
      var options = {
          'isStatic':false,
          'restitution':0.4,
          'friction':2.5,
          'density':1
      }
      this.body = Bodies.circle(x, y, 20,options);
      this.radius = 20;
     this.image=loadImage("paper.png");
      World.add(world, this.body);
    }

    display(){
      var pos =this.body.position;
      
      //ellipseMode(RADIUS);
     // ellipse(pos.x,pos.y,this.radius,this.radius);
     fill(255,0,255);
    imageMode(CENTER)
    image(this.image,pos.x,pos.y,60,60);
    
    }
  };