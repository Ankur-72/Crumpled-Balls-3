class Bin {

    constructor(x,y,width,height){
        var options = {
        isStatic: true
    }

    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    this.image = loadImage("dustbin1.png");
    World.add(world,this.body);

    }

    display(){

        var pos = this.body.position;
        rectMode(CENTER);
        fill("red");
         rect(pos.x, pos.y, this.width, this.height);
       image(this.image, this.body.position.x-78, this.body.position.y-130, 155, 140);

    }
}