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
    constructor(path, x, y)
    {
        this.path = path;
        this.x = x;
        this.y = y;
    }

    getImage()
    {
        var jelly = loadImage(this.path);
        return jelly;
    }
    getX()
    {
        return this.x;
    }
    getY()
    {
        return this.y;
    }
    draw(){
        
    }
}
