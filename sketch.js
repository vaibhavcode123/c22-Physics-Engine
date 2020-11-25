// Namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball;
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var ground_options = {
    isStatic : true
  }
  

  ground = Bodies.rectangle(200,390,400,20, ground_options);
  World.add(world,ground);
 
  var ball_options = {
    restitution : 1.0,
    density : 2
  }
  ball = Bodies.circle(200,100,20, ball_options);
  World.add(world,ball);
}

function draw() {
  background(0,0,0);  
  Engine.update(engine);
  fill("brown");
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y,400,20);

  fill("red");
  circle(ball.position.x, ball.position.y, 20);
 
}