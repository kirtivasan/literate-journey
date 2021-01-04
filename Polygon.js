class Polygon
{
	constructor(x,y,w,h)
	{
		var options={
            restitution:0.9,
            friction:1.0,
            density:5.0,
			isStatic:true		
			}
		
		this.w=w;
		this.h=h;
		this.image = loadImage("polygon.png");
		this.body=Matter.Bodies.rectangle(x,y, 6, 30, options);
 		World.add(world, this.body);

	}
	display()
	{
		var groundPos=this.body.position;		

            push();
			rectMode(CENTER);
			strokeWeight(6);
			translate(this.body.position.x, this.body.position.y);
			imageMode(CENTER);
			image(this.image,0,0, this.width, this.height);
			pop();
			if(this.body.velocity.x>10 && this.body.position.x>200){
				var position = [this.body.position.x,this.body.position.y];
				this.trajectory.push(position);
				}
			
	}

}