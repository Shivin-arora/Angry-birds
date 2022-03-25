class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.invisible=255;

  }

  display(){
    

    if(this.body.speed<2.2){
      super.display();
    }
      
    else{
          
      World.remove(world,this.body);
      push();
      this.invisible=this.invisible-5;  
      tint(255,this.invisible);
      image(this.image,this.body.position.x,this.body.position.y,50,50);
      pop();
    }
  }

};