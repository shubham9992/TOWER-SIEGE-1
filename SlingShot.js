class Slingshot{
    constructor(bodyPolygon,pointB){
        var options={
            bodyA:bodyPolygon,
            pointB:pointB,
            stiffness:0.04,
            length:10
        }
        // this.sling1=loadImage("sprites/sling1.png");
        // this.sling2=loadImage("sprites/sling2.png");
        // this.sling3=loadImage("sprites/sling3.png");
        this.sling=Constraint.create(options);
        this.pointB=pointB;
        this.bodyA=bodyPolygon;
        World.add(world,this.sling);
    }
    
    display(){
        // image(this.sling1,80,200);
       // image(this.sling2,50,200);
       //image(this.sling3,80,200,5,50);
        if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
       // push();
        stroke(48,22,8);
       
           strokeWeight(3);
           line(pointA.x, pointA.y, this.pointB.x, this.pointB.y);
     }
    }
    fly(){
        this.sling.bodyA=null;
    }
};