var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1400, 700);

	engine = Engine.create();
	world = engine.world;
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);

	 paper1 = new paper(350,500)

	 ground1 = new Ground(700,675,1400,20)

	bin1 = new bin(1200,600)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  Engine.update(engine);

paper1.display();
ground1.display();
bin1.display();

	keyPressed();
  	drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-5});
	}
}


