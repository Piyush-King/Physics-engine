
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
function setup(){
  var canvas = createCanvas(windowWidth,windowHeight);
  engine = Engine.create();
  world = engine.world;

  Engine.run(engine);

  object1 = Bodies.rectangle(100,100,50,50);
  World.add(world, object1);

  object2 = Bodies.circle(300,100,50,{restitution : 1});
  World.add(world, object2);

  object3 = Bodies.rectangle(500,100,50,50);
  World.add(world, object3);

  object4 = Bodies.circle(700,100,50,{restitution : 1});
  World.add(world, object4);

  object5 = Bodies.rectangle(900,100,50,50);
  World.add(world, object5);

  object6 = Bodies.rectangle(100,600,5000,50,{isStatic : true });
  World.add(world, object6);

  object7 = Bodies.circle(1100,100,50,{restitution : 1});
  World.add(world, object7);
}
function draw()
{
  background(0);
  rectMode(CENTER);
    rect(object1.position.x,object1.position.y,50,50);
    circle(object2.position.x,object2.position.y,100);
    rect(object3.position.x,object3.position.y,50,50);
    circle(object4.position.x,object4.position.y,100);
    rect(object5.position.x,object5.position.y,50,50);
    rect(object6.position.x,object6.position.y,5000,50);
    circle(object7.position.x,object7.position.y,100);
}
