class Block
{
	constructor(x,y,w,h)
	{
		var options={
			restitution:0.8,
            friction:0,		
			}
		
        
		this.body=Bodies.rectangle(x, y, w, h , options);
		this.w=w;
        this.h=h;
 		World.add(world, this.body);

	}
	display()
	{
			
			var pos=this.body.position;	
			var angle=this.body.angle;	

            push();
            fill(179, 229, 252);
			translate(pos.x, pos.y);
			rotate(angle);
			rectMode(CENTER);
            strokeWeight(6);
			
			rect(0,0,this.w, this.h);
			pop();
			
	}

}