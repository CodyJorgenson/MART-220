
var x = 0;
var i = 0;
var animations = [];
var ninja;
var ninjaObj = [];
var jelly;
var Jelly = [];

function preload()
    {
        ninja = new animationIdle("assets/Idle__000.png", 0, 0);
        ninjaObj[0] = ninja;
        ninja = new animationIdle("assets/Idle__001.png", 0, 0);
        ninjaObj[1] = ninja;
        ninja = new animationIdle("assets/Idle__002.png", 0, 0);
        ninjaObj[2] = ninja;
        ninja = new animationIdle("assets/Idle__003.png", 0, 0);
        ninjaObj[3] = ninja;
        ninja = new animationIdle("assets/Idle__004.png", 0, 0);
        ninjaObj[4] = ninja;
        ninja = new animationIdle("assets/Idle__005.png", 0, 0);
        ninjaObj[5] = ninja;
        ninja = new animationIdle("assets/Idle__006.png", 0, 0);
        ninjaObj[6] = ninja;
        ninja = new animationIdle("assets/Idle__007.png", 0, 0);
        ninjaObj[7] = ninja;
        ninja = new animationIdle("assets/Idle__008.png", 0, 0);
        ninjaObj[8] = ninja;
        ninja = new animationIdle("assets/Idle__009.png", 0, 0);
        ninjaObj[9] = ninja;

        ninja = new animationWalk("assets/Run__000.png", 0, 0);
        ninjaObj[0] = ninja;
        ninja = new animationWalk("assets/Run__001.png", 0, 0);
        ninjaObj[1] = ninja;
        ninja = new animationWalk("assets/Run__002.png", 0, 0);
        ninjaObj[2] = ninja;
        ninja = new animationWalk("assets/Run__003.png", 0, 0);
        ninjaObj[3] = ninja;
        ninja = new animationWalk("assets/Run__004.png", 0, 0);
        ninjaObj[4] = ninja;
        ninja = new animationWalk("assets/Run__005.png", 0, 0);
        ninjaObj[5] = ninja;
        ninja = new animationWalk("assets/Run__006.png", 0, 0);
        ninjaObj[6] = ninja;
        ninja = new animationWalk("assets/Run__007.png", 0, 0);
        ninjaObj[7] = ninja;
        ninja = new animationWalk("assets/Run__008.png", 0, 0);
        ninjaObj[8] = ninja;
        ninja = new animationWalk("assets/Run__009.png", 0, 0);
        ninjaObj[9] = ninja;

        jelly = new JellyArray("assets/Jelly (1).png", 100, 100);
        Jelly[0] = jelly;
        jelly = new JellyArray("assets/Jelly (2).png", 100, 100);
        Jelly[1] = jelly;
        jelly = new JellyArray("assets/Jelly (3).png", 100, 100);
        Jelly[2] = jelly;

        for (var i = 0; i < ninjaObj.length; i++) {
            animations[i] = ninjaObj[i].getImage();
        }
        console.log();
        //img1 = loadImage("assets/Jelly (1).png");
    }

    function setup() 
    {
        createCanvas(1400,700);
        ninja = new character(animations, 100,100);
        for(var i = 0; i < 5; i++)
        {
            Jelly[i] = new JellyArray(random(10,1400), random(10,700));
        }
        
        setInterval(incrementIndex, 50);
    }

    function draw() 
    {
        background(120);
        image(animations[i], ninjaObj[i].getX(), ninjaObj[i].getY());
    
        for(var i = 0; i < Jelly.length; i++)
        {
            Jelly[i].draw();
        }
        
      console.log();
      //image(img1, random(10, 1330), random(10, 650));
    }

    function incrementIndex()
    {
     i += 1;

     if (i >= animations.length) 
     {
         i = 0;
     }
    }

