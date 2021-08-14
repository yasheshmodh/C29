const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
var ground,leftWall,rightWall;
var bridge;
var jointPoint;
var joinLink;
var Stones = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

ground = new Base(0,height-10,width *2,20,"blue",true)
leftWall  = new Base(200,height/2+50,600,100,"red",true)
rightWall  = new Base(width-100,height/2+50,600,100,"red",true)
bridge = new Bridge(15,{x:width/2-300,y:height/2})
jointPoint = new Base(width-400,height/2+10,40,20,"yellow",true)
Matter.Composite.add(bridge.body,jointPoint)
joinLink = new Link(bridge,jointPoint)
for (var i = 0; i <= 8; i++) {
   var x = random(width / 2 - 200, width / 2 + 300);
    var y = random(-10, 140);
     var stone = new Stone(x, y, 80, 80);
      Stones.push(stone);
     }
}

function draw() {
  background(51);
  Engine.update(engine);
ground.show()
leftWall.show()
rightWall.show()
bridge.show()
for (var stone of Stones) {
   stone.show(); 
  }
}
