
class character
{
        construction(animations, x, y)
        {
            var idles = animations[0];
            var walks = animations[1];
            this.Idle = new animationIdle;
            this.Walk = new animationWalk;
            this.x = x;
            this.y = y;
            this.frame = 0;
            this.scale = [1, 1];
            this.walkSpeed = 7;
            this.CurrentAnimation = this.Idle;
            this.draw;
        }
    
    beats(){
        this.movement
        
            if(this.isMoving){
                this.CurrentAnimation = this.Walk;
            }
            else{
                this.CurrentAnimation = this.Idle;
            }


        translate(this.x, this.y); 

        moving( keyIsDown(87) || keyIsDown(83) || keyIsDown(65) || keyIsDown(68));


    draw();
    {
        stroke(0);
        fill(5,5,5,50);
        
        ellipse(-3,45,40,15);
        this.CurrentAnimation.draw(0, 0, Math.floor(this.frame / this.animationSpeedFactor));
    }
    movement()
        if(keyIsDown(87)){
            this.y -= this.walkSpeed;
        }

        if(keyIsDown(83)){
            this.y += this.walkSpeed;
        }

        if(keyIsDown(65)){
            this.x -= this.walkSpeed;
            this.scale[0] = -1;
        }

        if(keyIsDown(68)){
            this.x += this.walkSpeed;
            this.scale[0] = 1;
        }
    
            if(keyIsDown(16) && this.moving){
                this.walkSpeed = 10;
                this.walkSpeed = 1;
            }
            else {
                this.walkSpeed = 5;
                this.walkSpeed = 5;
            }

        }
}
        
    
    
    