

var i = 0;
var j = 0;
var k = 0;
var animations = [];
var runAnimation = [];
var ninja;
var ninjaRun = [];
var ninjaIdle = [];
var ninjaObj = [];
var ninjaRunObj = [];
var currentObject = [];
var jelly;
var Jelly = [];

function preload()
    {   
        ninjaIdle = loadStrings("./assets/idle.txt");
        ninjaRun = loadStrings("./assets/run.txt");
   
    }

    function setup() 
    {
        createCanvas(1400,700);
            ninjaObj = new animationIdle(ninjaIdle,0,0,100,150);
            ninjaRunObj = new animationRun(ninjaRun,0,0,100,150);

        for(var j=0; j<5; j++)
        {
            jelly = new JellyArray(random(10, width), random(690, length));
            Jelly[j] = jelly;
        }
    }

    function draw() 
    {
        background(120);
if (keyIsPressed)
{
    if(key == "d")
    {
    ninjaRunObj.setCurrentRate(frameCount);
    ninjaRunObj.drawRun();
    ninjaRunObj.updatePosition("forward");
    ninjaObj.updatePosition("forward");

    }
    else if (key == "a")
    {
        ninjaRunObj.setCurrentRate(frameCount);
        ninjaRunObj.drawRun();
        ninjaRunObj.updatePosition("backwards");
        ninjaObj.updatePosition("backwards");
    }
    else if (key == "w")
    {
        ninjaRunObj.setCurrentRate(frameCount);
        ninjaRunObj.drawRun();
        ninjaRunObj.updatePosition("up");
        ninjaObj.updatePosition("up");
    }
    else if (key == "s")
    {
        ninjaRunObj.setCurrentRate(frameCount);
        ninjaRunObj.drawRun();
        ninjaRunObj.updatePosition("down");
        ninjaObj.updatePosition("down");
    }
}
else
{
    ninjaObj.setCurrentRate(frameCount);
    ninjaObj.drawIdle();
}
        
        Jelly[j].drawJelly();

//if(jellyCol && )

}