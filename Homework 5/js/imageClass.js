class animationIdle{

    constructor(path, x, y, w, h)
    {
        this.path = path;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.myImage = [];
        this.getImage(); 
        this.i = 0;
        this.currentRate = 0;

    }

setCurrentRate(currentRate)
{

    this.currentRate = currentRate;
}
getX()
{
    return this.x;
}
getY()
{
    return this.y;
}

getImage()
{

    for(var i = 0; i < this.path.length; i++)
    {
        this.myImage[i] = loadImage(this.path[i]);
    }
}
drawIdle()
{
    this.incrementIndex();
    image(this.myImage[this.i], this.x, this.y, this.w, this.h);
}

    getW()
    {
        return this.w;
    }
    getH()
    {
        return this.h;
    }

    incrementIndex()
    {
        
    if(this.currentRate % 3 == 0)
        this.i++;
     if (this.i >= this.path.length) 
     {
         this.i = 0;
     }
    }
    updatePosition(direction)
    {
        this.direction = direction;
        if(direction == "forward")
        {
            this.x += 3;
        }
        else if(direction == "backwards")
        {
            this.x -= 3;
        }
        else if(direction == "up")
        {
            this.y -= 3;
        }
        else if(direction == "down")
        {
            this.y += 3;
        }
    }

}

class animationRun{
    constructor(path, x, y, w, h)
    {
        this.path = path;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.myImage = [];
        this.getImage(); 
        this.i = 0;
        this.currentRate = 0;
    }
    getX()
    {
        return this.x;
    }
    getY()
    {
        return this.y;
    }
    getImage()
    {
        for(var i = 0; i < this.path.length; i++)
        {
            this.myImage[i] = loadImage(this.path[i]);
        }
    }
    setCurrentRate(currentRate)
{

    this.currentRate = currentRate;
}
    drawRun()
{
    this.incrementIndex();
    if(this.direction == "backwards")
    {
        translate(this.w,0);
        scale(-1.0,1.0);
        image(this.myImage[this.i], -this.x, this.y, this.w, this.h);
    }
    else
    {
        image(this.myImage[this.i], this.x, this.y, this.w, this.h);
    }
}

    getW()
    {
        return this.w;
    }
    getH()
    {
        return this.h;
    }

    incrementIndex()
    {
        
    if(this.currentRate % 3 == 0)
        this.i++;
     if (this.i >= this.path.length) 
     {
         this.i = 0;
     }
    }
    updatePosition(direction)
{
    this.direction = direction;
    if(direction == "forward")
    {
        this.x += 3;
    }
    else if(direction == "backwards")
    {
        this.x -= 3;
    }
    else if(direction == "up")
    {
        this.y -= 3;
    }
    else if(direction == "down")
    {
        this.y += 3;
    }
}
}

class JellyArray{
    constructor( x, y)
    {
        this.x = x;
        this.y = y;
    }

    drawJelly(x,y){
        noStroke();
        fill(200,110,5);
        ellipse(this.x,this.y,80,60);
        fill(200,50,0)
        ellipse(this.x,this.y+15,60,20);
        fill(200,190,190)
        ellipse(this.x-10,this.y-20,20,10);
        fill(200,190,190)
        ellipse(this.x-15,this.y-10,10,3);

    }
}
