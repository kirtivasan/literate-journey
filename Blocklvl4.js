class BlockLv4
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
			
			var groundPos=this.body.position;		

            push();
            fill(255, 236, 179);
			translate(groundPos.x, groundPos.y);
			rectMode(CENTER);
            strokeWeight(6);
			
			rect(0,0,this.w, this.h);
			pop();
			
	}

}