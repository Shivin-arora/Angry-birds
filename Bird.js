class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.body.frictionAir=0.009;
    this.body.density= 2;
                       
    this.trajectory = [];
    this.image2 = loadImage("sprites/smoke.png");
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
 if(this.body.position.x>270 && this.body.velocity.x > 10 ){
    var xy = [this.body.position.x,this.body.position.y];
    this.trajectory.push(xy);
  }
    for(var i = 0; i < this.trajectory.length; i = i+1){
    image(this.image2,this.trajectory[i][0],this.trajectory[i][1]);
    }
   
  //  console.log(this.body.velocity.x);
    super.display();

   
  }
}
