var x = 0;
var i = 0;
var animations = [];
var ninja;
var ninjaObj = [];

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

        for (var i = 0; i < ninjaObj.length; i++) {
            animations[i] = ninjaObj[i].getImage();
        }
        console.log();
    }

    function setup() 
    {
        createCanvas(1400,700);
        ninja = new character(animations, 100,100);

        setInterval(incrementIndex, 50);
    }

    function draw() 
    {
        background(120);
        image(animations[i], ninjaObj[i].getX(), ninjaObj[i].getY());
    }

    function incrementIndex()
    {
     i += 1;

     if (i >= animations.length) 
     {
         i = 0;
     }
    }
