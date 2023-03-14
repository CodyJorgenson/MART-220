

var ninjaIdle = [];
var myAnimation;
var myWalkAnimation;
var ninjaRun = [];
var badImage;
var goodImage; 
var healthImage;
var isColliding = false;
var points = 0;
var imovableObject1;
var imovableObject2;
var imovableObject3;
var health = 5;



function preload() {
    ninjaIdle = loadStrings("./assets/idle.txt");
    ninjaRun = loadStrings("./assets/run.txt");
}

function setup() {
    createCanvas(800, 800);
    myAnimation = new animationImage(0, 0, 150, 150);
    myAnimation.loadAnimation('idle', ninjaIdle);
    myAnimation.loadAnimation('walk', ninjaRun);

    goodImage = createSprite(random(10, width), random(15,750),100,100, 'static');
    goodImage.img = "./images/onigiri.png";
    goodImage.scale = 0.09;
    goodImage.diameter = 150;

    badImage = createSprite(random(10,width), random(15,750),100,100, 'static');
    badImage.img = "./images/Caltrops.webp";
    badImage.scale = 0.2;
    badImage.diameter = 150;

    healthImage = createSprite(random(10,width), random(15,750),100,100, 'static');
    healthImage.img = "./images/medkit.png";
    healthImage.scale = 0.2;
    healthImage.diameter = 150;
   
    imovableObject1 = createSprite(random(40,750), random(40,750), random(50,150), random(50,150), 'static');
    
    imovableObject2 = createSprite(random(40,750), random(40,750), random(50,150), random(50,150), 'static');
    
    imovableObject3 = createSprite(random(40,750), random(40,750), random(50,150), random(50,150), 'static');
}

function draw() {

    background(120);

    text('Points', 740, 30)
    text(points, 780, 30)
    text(health, 720, 30)
    text('Health', 680, 30)

    if (kb.pressing('d')) {
        myAnimation.updatePosition('forward');
        myAnimation.drawAnimation('walk');
        if(myAnimation.isColliding(goodImage))
        {
            myAnimation.drawAnimation('idle');
            myAnimation.updatePosition('idle');
            points += 1;
        }     
        if(myAnimation.isBadColliding(badImage))
        {
            health -= 1;
        }
        if(myAnimation.isHealthColliding(healthImage))
        {
            health += 2;
        }
    }
    else if (kb.pressing('a')) {
        myAnimation.updatePosition('reverse');
        myAnimation.drawAnimation('walk');
        if(myAnimation.isColliding(goodImage))
        {
            myAnimation.drawAnimation('idle');
            myAnimation.updatePosition('idle');
            points += 1;
        }    
        if(myAnimation.isBadColliding(badImage))
        {
            health -= 1;
        }
        if(myAnimation.isHealthColliding(healthImage))
        {
            health += 2;
        }
    }
    else if (kb.pressing('w')) {
      myAnimation.updatePosition('up');
      myAnimation.drawAnimation('walk');
      if(myAnimation.isColliding(goodImage))
        {
            myAnimation.drawAnimation('idle');
            myAnimation.updatePosition('idle');
            points += 1; 
        }    
        if(myAnimation.isBadColliding(badImage))
        {
            health -= 1;
        }
        if(myAnimation.isHealthColliding(healthImage))
        {
            health += 2;
        }
  }
    else if (kb.pressing('s')) {
    myAnimation.updatePosition('down');
    myAnimation.drawAnimation('walk');
    if(myAnimation.isColliding(goodImage))
        {
            myAnimation.drawAnimation('idle');
            myAnimation.updatePosition('idle');
            points += 1;
            goodImage
        }    
        if(myAnimation.isBadColliding(badImage))
        {
            health -= 1;
        }
        if(myAnimation.isHealthColliding(healthImage))
        {
            health += 2;
        }
  }
    else {
        myAnimation.drawAnimation('idle');
    }
    goodImage.debug = mouseIsPressed;

    if(health <= -1){
        textSize("100");
        text('YOU LOST',375,200)
        
    }
    if(points >= 10){
        textSize("25");
        text('YOU WON!', 375,200)
    }

  }