class rope
{

constructor (bA,pB)
{

var options ={
bodyA:bA,
pointB:pB,
stiffness: 0.007,
length: 30
}


this.rope=Constraint.create(options);
World.add(world,this.rope);
this.body=bA;
}



display ()
{


if (this.rope.bodyA)
  {
var a=this.rope.bodyA.position;
var b=this.rope.pointB;
line (a.x,a.y,b.x,b.y);
  }
}


fly ()
 {
  this.rope.bodyA=null;
 }

 attach()
 {
   this.rope.bodyA=this.body;
 }
}

