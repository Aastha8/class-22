const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground,ball

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
 // createSprite(400, 200, 50, 50);
  var option = {
    isStatic:true
  }
  ground = Bodies.rectangle(400, 387, 800, 20,option)
  World.add(world,ground)
  console.log(ground)

  var option1 = {
    restitution:0.8
  }
  ball = Bodies.circle(200,200,20,option1)
  World.add(world,ball)
 
}


function draw() {
  background("black");  
  Engine.update(engine)
  drawSprites();

  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,800, 20)
  
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20)
}