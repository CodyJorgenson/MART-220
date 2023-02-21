class animationIdle{

    constructor(path, x, y)
    {
        this.path = path;
        this.x = x;
        this.y = y;
    }

    getImage()
    {
        var myImage = loadImage(this.path);
        return myImage;
    }
    getX()
    {
        return this.x;
    }
    getY()
    {
        return this.y;
    }
}

class animationWalk{
    constructor(path2, x, y)
    {
        this.path2 = path2;
        this.x = x;
        this.y = y;
    }

    getImage()
    {
        var myImage2 = loadImage(this.path2);
        return myImage2;
    }
    getX()
    {
        return this.x;
    }
    getY()
    {
        return this.y;
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
