
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var world,boy;
const Constraint=Matter.Constraint;

function preload(){
	boy=loadImage("boy.png");
  }

function setup() {
	createCanvas(1300,600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	
	mango1=new Mango(1050,200,30);
	mango2 = new Mango(1150,80,30);
	mango3 = new Mango(1205,150,30);
	mango4 = new Mango(1075,100,30);
	mango5 = new Mango(1200,250,30);
	mango6 = new Mango(1000,200,30);
	mango7 = new Mango(1040,140,30);
	mango8 = new Mango(1080,280,30);
	groundObject=new ground(width/2,590,width,20);
	treeObj=new Tree(1050,580);
	stone = new Stone(230,400,30);

	sling = new SlingShot(stone.body,{x:220,y:380});
	
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  image(boy ,200,360,200,300);
  groundObject.display();
  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  stone.display();
  sling.display(); 

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
 

 
  
  
  
  drawSprites();
 
}

function mouseDragged() {
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased() {
    sling.fly();
}

function detectCollision(stoneObj,mangoObj){

  var stonePos = stoneObj.body.position;
  var mangoPos = mangoObj.body.position;
  var distance = dist(stonePos.x,stonePos.y,mangoPos.x,mangoPos.y);
  if(distance <= stonePos.r + mangoObj.r){
    Matter.Body.setStatic(mangoObj,false);
  }
}



