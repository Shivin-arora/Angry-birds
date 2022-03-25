class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.012,
            length: 8
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        
        World.add(world, this.sling);
        this.sling1=loadImage("sprites/sling1.png");
        this.sling2=loadImage("sprites/sling2.png");
        this.sling3=loadImage("sprites/sling3.png");
    }

    fly(){
        this.sling.bodyA = null;
    }

    display1(){
        push();
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            stroke(48,22,8);
            strokeWeight(7);
            line(pointA.x, pointA.y, pointB.x+21, pointB.y+13);
        //    line(pointA.x, pointA.y, pointB.x-20, pointB.y+14);  
        }
        pop();
    }
   
    display2(){
       push();
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            stroke(48,22,8);
            strokeWeight(7);
          //  line(pointA.x, pointA.y, pointB.x+21, pointB.y+13);
            line(pointA.x-20, pointA.y, pointB.x-20, pointB.y+14);  
        }
        pop();
    }

    reattach(){
        this.sling.bodyA = bird.body;
    }
   




    first(){
        image(this.sling1,230,50,40,170);
    }
    later(){
        image(this.sling2,205,50,40,100);
    }
    last(){
        if(this.sling.bodyA){
        image(this.sling3,this.sling.bodyA.position.x-26,this.sling.bodyA.position.y-10,15,30);
    }}



    
}