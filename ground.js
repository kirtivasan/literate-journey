class ground
{
	constructor()
	{
		var options={
		isStatic:true	
			}
		
        
		this.ground=Bodies.rectangle(450,390,900,20, options);
 		World.add(world, this.body);

	}
	display()
	{
			
			fill("blue");
			rectMode(CENTER);
            strokeWeight(6);
			
			rect(this.ground.position.x,this.ground.position.y,900,20);
			
	}

}