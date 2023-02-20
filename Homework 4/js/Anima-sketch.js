
var x = 0;
var y2=100;
var x2=100;
var i = 0;
var j = 0;
var k = 0;
var animations = [];
var animation2 = [];
var ninja;
var ninjaWalk;
var ninjaIdle = [];
var ninjaObj = [];
var jelly;
var Jelly = [];

function preload()
    {   
        /*
        ninja = new animationIdle("assets/Idle__000.png", "assets/Idle__001.png", "assets/Idle__002.png", "assets/Idle__003.png", "assets/Idle__004.png", "assets/Idle__005.png", "assets/Idle__006.png", "assets/Idle__007.png", "assets/Idle__008.png", "assets/Idle__009.png", 0, 0);
        ninjaObj[i] = ninja;
        */
        ninja = new animationIdle("assets/Idle__000.png", 0, 0);
        ninjaIdle[0] = ninja;
        ninja = new animationIdle("assets/Idle__001.png", 0, 0);
        ninjaIdle[1] = ninja;
        ninja = new animationIdle("assets/Idle__002.png", 0, 0);
        ninjaIdle[2] = ninja;
        ninja = new animationIdle("assets/Idle__003.png", 0, 0);
        ninjaIdle[3] = ninja;
        ninja = new animationIdle("assets/Idle__004.png", 0, 0);
        ninjaIdle[4] = ninja;
        ninja = new animationIdle("assets/Idle__005.png", 0, 0);
        ninjaIdle[5] = ninja;
        ninja = new animationIdle("assets/Idle__006.png", 0, 0);
        ninjaIdle[6] = ninja;
        ninja = new animationIdle("assets/Idle__007.png", 0, 0);
        ninjaIdle[7] = ninja;
        ninja = new animationIdle("assets/Idle__008.png", 0, 0);
        ninjaIdle[8] = ninja;
        ninja = new animationIdle("assets/Idle__009.png", 0, 0);
        ninjaIdle[9] = ninja;

        
        ninja = new animationWalk("assets/Run__000.png", 0, 0);
        ninjaObj[0] = ninjaWalk;
        ninja = new animationWalk("assets/Run__001.png", 0, 0);
        ninjaObj[1] = ninjaWalk;
        ninja = new animationWalk("assets/Run__002.png", 0, 0);
        ninjaObj[2] = ninjaWalk;
        ninja = new animationWalk("assets/Run__003.png", 0, 0);
        ninjaObj[3] = ninjaWalk;
        ninja = new animationWalk("assets/Run__004.png", 0, 0);
        ninjaObj[4] = ninjaWalk;
        ninja = new animationWalk("assets/Run__005.png", 0, 0);
        ninjaObj[5] = ninjaWalk;
        ninja = new animationWalk("assets/Run__006.png", 0, 0);
        ninjaObj[6] = ninjaWalk;
        ninja = new animationWalk("assets/Run__007.png", 0, 0);
        ninjaObj[7] = ninjaWalk;
        ninja = new animationWalk("assets/Run__008.png", 0, 0);
        ninjaObj[8] = ninjaWalk;
        ninja = new animationWalk("assets/Run__009.png", 0, 0);
        ninjaObj[9] = ninjaWalk;

/*
        jelly = new JellyArray("assets/Jelly (1).png", x2, y2);
        Jelly[0] = jelly;
        jelly = new JellyArray("assets/Jelly (2).png", x2, y2);
        Jelly[1] = jelly;
        jelly = new JellyArray("assets/Jelly (3).png", x2, y2);
        Jelly[2] = jelly;
        console.log("broken");
  */     

        for (var i = 0; i < ninjaIdle.length; i++) 
        {
            animations[i] = ninjaIdle[i].getImage();

            console.log("tex2");
        }
/*
        for (var j = 0; j < Jelly.length; j++) 
        {
            animation2[j] = Jelly[j].getImage();
        }
  */      
    }

    function setup() 
    {
        createCanvas(1400,700);
        /*
        for(var i =0; i<ninja.length; i++)
        {
        ninja = new character(animations, 100,100);  
        }

        for(var j =0; j<Jelly.length; j++)
        {
        jelly = new character(animation2, x2,y2);
        }
        */
        setInterval(incrementIndex, 50);

        for(var j=0; j<5; j++)
        {
            jelly = new JellyArray(random(10, width), random(690, length));
            Jelly[j] = jelly;
        }
    }

    function draw() 
    {
        background(120);
        image(animations[i], ninjaIdle[i].getX(), ninjaIdle[i].getY());
        Jelly[j].drawJelly();


        //image(animation2[j], Jelly[j].getX(), Jelly[j].getY());
        
        /*
        for(var j = 0; j < Jelly.length; j++)
        {
            console.log("jelly?");
            Jelly[j].drawJelly();
            

        } */


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
