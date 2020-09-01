class Paper {
    constructor(x, y,r) {
      var options = {
        'density':1,
        'friction': 1.0,
        'restitution':0.5
      };
      this.body = Bodies.circle(x, y, r, options);
      this.r = r
      this.image=loadImage("paper.png")
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
    
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(3);
      stroke('blue')
      fill('red')
      imageMode(CENTER)
      image(this.image,0, 0, this.r, this.r);
      pop();
      
    };
  };
  