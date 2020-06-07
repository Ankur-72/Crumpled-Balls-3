const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

//var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var ground,paper,bin1,bin2,bin3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 570);


	engine = Engine.create();
	world = engine.world;
	
	//Create a Ground
	ground = new Ground(400,550,800,10);
	 
	 paper = new Paper(100,540,50,50);

	 bin1 = new Bin(600,540,130,10);

	 bin2 = new Bin1(535,480,10,130);

	 bin3 = new Bin1(665,480,10,130);

	 launcher = new Launcher(paper.body,{x: 120, y: 50});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(250);
  Engine.update(engine);

  paper.display();

  ground.display();
  
 
  bin2.display();
  bin3.display();
  bin1.display();
  launcher.display();

 

  
  
  drawSprites();
 
}

function mouseDragged(){
        Matter.Body.setPosition(paper.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    launcher.fly();
}


