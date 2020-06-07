class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.025,
            length: 40
        }
        this.pointB = pointB;
        this.launcher = Constraint.create(options);
        World.add(world, this.launcher);
    }

    display(){
        if(this.launcher.bodyA){
        var pointA = this.launcher.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        stroke("#FF6600");
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    

    fly(){
        this.launcher.bodyA = null;
    }
}