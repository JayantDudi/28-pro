class SlingShot{
    constructor(body, point){
        var options = {
            bodyA: body,
            pointB: point,
            stiffness: 0.04,
            length: 10,
        }
        this.sling = Constraint.create(options);
        this.pointB = point;
        World.add(world, this.sling);
    }

    attach(body) {
        this.sling.bodyA = body;

    }

    fly() {
        console.log("in fly");
        this.sling.bodyA = null;
    }

    display(){
        
       if(this.sling.bodyA) {
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB
        
            strokeWeight(4);
            
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    
    }
    
}