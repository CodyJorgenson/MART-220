

var i = 0;
var j = 0;
var k = 0;
var r1;
var r2;
var jelly;
var animations = [];
var runAnimation = [];
var ninja;
var ninjaRun = [];
var ninjaIdle = [];
var ninjaObj = [];
var ninjaRunObj = [];
var currentObject = [];
var Jelly = [];
var jellyCol;
var jellyCol2;
var isCollision = false;
var isCollision2 = false;
var points = 0;
var backSound;
var goodSound;
backgroundSound;



function preload()
    {   
        ninjaIdle = loadStrings("./assets/idle.txt");
        ninjaRun = loadStrings("./assets/run.txt");
        goodSound = loadSound("./sounds/GoodSound.wav");
        badSound = loadSound("./sounds/NegativeSound.wav");
        backgroundSound = loadSound("./sounds/Background.wav");
    }

    function setup() 
    {
        createCanvas(1400,700);
        ninjaObj = new animationIdle(ninjaIdle,0,0,100,150);
        ninjaRunObj = new animationRun(ninjaRun,0,0,100,150);

        //jellyCol = new JellyArray(100, 200, 40, 20);
        //jellyCol2 = new JellyArray(100, 500, 80, 80);
        r1 = new Rectangle(600,100,80,70);
    
        r2 = new Rectangle(100,210,60,50);
        jelly = new JellyArray(150, 100)
        /*for(var j=0; j<5; j++)
        {
            jelly = new JellyArray(random(10, width), random(690, length));
            Jelly[j] = jelly;
        }*/
    }
    function mousePressed() 
{
    backgroundSound.loop();
}
    function draw() 
    {
        background(120);
        
        jelly.drawJelly();
        r1.draw();
        r2.draw();

    text(isCollision, width-80,70);
    text(isCollision2, width-80,110);
    textSize(25);
    text(points, width-50, 30);

if (keyIsPressed)
{
    if(key == "d")
    {
    ninjaRunObj.setCurrentRate(frameCount);
    ninjaRunObj.drawRun();
    isCollision = ninjaRunObj.isRectanglesColliding(jelly);
    isCollision = ninjaRunObj.isRectanglesColliding(r2);
    isCollision2 = ninjaRunObj.isRectanglesColliding(r1);
    ninjaRunObj.updatePosition("forward");
    ninjaObj.updatePosition("forward");

    }
    else if (key == "a")
    {
        ninjaRunObj.setCurrentRate(frameCount);
        ninjaRunObj.drawRun();
        isCollision = ninjaRunObj.isRectanglesColliding(r2);
        isCollision2 = ninjaRunObj.isRectanglesColliding(r1);
        ninjaRunObj.updatePosition("backwards");
        ninjaObj.updatePosition("backwards");
    }
    else if (key == "w")
    {
        ninjaRunObj.setCurrentRate(frameCount);
        ninjaRunObj.drawRun();
        isCollision = ninjaRunObj.isRectanglesColliding(r2);
        isCollision2 = ninjaRunObj.isRectanglesColliding(r1);
        ninjaRunObj.updatePosition("up");
        ninjaObj.updatePosition("up");
    }
    else if (key == "s")
    {
        ninjaRunObj.setCurrentRate(frameCount);
        ninjaRunObj.drawRun();
        isCollision = ninjaRunObj.isRectanglesColliding(r2);
        isCollision2 = ninjaRunObj.isRectanglesColliding(r1);
        ninjaRunObj.updatePosition("down");
        ninjaObj.updatePosition("down");
    }
}
else
{
    ninjaObj.setCurrentRate(frameCount);
    ninjaObj.drawIdle();
}
        

if(r2 && isCollision == true)
{
    points =+1;
    r2 = new Rectangle(random(20, width-80), random(700, length-30), 75, 75);
    goodSound.play();
}
if(jelly && isCollision == true)
{
    points =+1;
    jelly = new JellyArray(random(20, width-90), random(700, length-30), 75, 75);
    goodSound.play();
}
if(r1 && isCollision2 == true)
{
    points =-1;
    r1 = new Rectangle(random(20, width-90), random(700, length-20), 80, 20);
    badSound.play();
}

}
