class Stone {
    constructor(x,y) {
        var options={
			isStatic:false,
			restitution :0.8,
            friction :0.3,
            density :1.2,
			}
		this.x=x;
		this.y=y;
		this.r = 10;
		this.image=loadImage("stone.png")
		
		this.body=Bodies.circle(this.x, this.y, this.r, options)
		World.add(world, this.body);
    }
    display()
	{
		var stonePos=this.body.position;	
		push()
		translate(stonePos.x, stonePos.y);
		// rectMode(CENTER);
		rotate(this.body.angle)
		fill(255,0,255)
		imageMode(CENTER);
		ellipseMode(CENTER);
		
		image(this.image, 0,0,this.r*2, this.r*2)
		pop()
 }
}