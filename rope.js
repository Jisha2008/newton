class Rope{
    constructor(bodyA,bodyB,offsetX,offsetY){
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options = {
            bodyA : bodyA,
            bodyB:bodyB,
            stiffness: 0.004,
            length: 10,
            pointB:{x:this.offsetX,y:this.offsetY}
        }

       
        this.rope = Constraint.create(options);
        World.add(world,this.rope);
    }
display(){
    var pointA = this.rope.bodyA.position;
    var pointB = this.rope.bodyB.position;
   
    var Anchor1X = pointA.x
    var Anchor1Y = pointB.y 

    var Anchor2X = pointA.x+this.offsetX
    var Anchor2Y = pointB.y+this.offsetY

    line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);

}

}
