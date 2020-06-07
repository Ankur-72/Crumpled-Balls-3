class Bin1 {

    constructor(x,y,width,height){
        var options = {
        isStatic: true
    }

    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    //this.image = loadImage("Images/dustbin1.png");
    World.add(world,this.body);

    }

    display(){

        var pos = this.body.position;
        rectMode(CENTER);
        fill("red");
        rect(pos.x, pos.y, this.width, this.height);

    }
}