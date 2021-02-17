class Drop{
    constructor(x,y){
        var options = {
            restitution: 0.1,
            friction: 0.001
        }
        this.drop = Bodies.circle(x,y,10,options);
        this.radius = 7;
        World.add(world,this.drop);
        
        this.drops = [];
    }

    
    display(){
        var pos = this.drop.position;
        fill("blue");
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,this.radius,this.radius);
}

    update(){
        if(this.drop.position.y > height){
            Matter.Body.setPosition(this.drop,{x:random(0,400), y:random(0,400)})
        }
    }
}