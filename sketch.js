const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;

var engine, world;
var object;

function setup() {
  var canvas= createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;

  var x = {
    isStatic : false,
    restitution: 1.1
  }

  object= Bodies.rectangle(200,100,50,50,x);
  World.add(world,object);
  
  var y ={
    isStatic : true
  }

  ground=Bodies.rectangle(200,390,400,20,y);
  World.add(world,ground);
}

function draw() {
  background("yellow");
  rectMode(CENTER);
  fill("green");
  circle(object.position.x,object.position.y,50);
  fill("brown");
  rect(ground.position.x,ground.position.y,400,20);

}