class paper {
    constructor(x, y,r) {
      var options={
        isStatic:false,
        density:1.2,
        restitution:0.3
      }
      this.body=Bodies.circle(x,y,r,options);
      this.r=r;
      this.image=loadImage("sprites/paper.png")
      World.add(world,this.body);
      
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y);
      imageMode(CENTER);
      fill("white");
      image(this.image,0,0,this.r,this.r)
      pop();
    }
  };
  