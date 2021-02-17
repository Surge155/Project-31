const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

//variables
var world,engine;
var dropObj;
var drops = [];
var maxdrops = 100;

/*function preload(){
    
}*/

function setup(){
    createCanvas(500,800);

    engine = Engine.create();
    world = engine.world;

    if(frameCount % 150 === 0){
        for(var i = 0; i < maxdrops; i++){
            drops.push(new Drop(random(0,400), random(0,400)));
        }
    }
}

function draw(){
    background("black");

    Engine.update(engine);

    for(var i = 0; i < maxdrops; i ++){
        drops[i].display();
        drops[i].update();
    }

    
}   
//Functions
