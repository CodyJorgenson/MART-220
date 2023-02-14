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
class myJelly{
    constructor(path3, x, y)
    {
        this.path3 = path3;
        this.x = x;
        this.y = y;
    }

    getImage()
    {
        var myJelly = loadImage(this.path);
        return myJelly;
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
