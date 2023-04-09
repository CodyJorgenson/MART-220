

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
var imovableObject4;
var imovableObject5;
var health = 5;



function preload() {
    ninjaIdle = loadStrings("./assets/idle.txt");
    ninjaRun = loadStrings("./assets/run.txt");
}

function setup() {
    createCanvas(800, 800, WEBGL);
    myAnimation = new animationImage(-300, -100);
    myAnimation.loadAnimation('idle', ninjaIdle);
    myAnimation.loadAnimation('walk', ninjaRun);

    goodImage = createSprite(random(-380, width), random(-380,height),100,100, 'static');
    goodImage.img = "./images/onigiri.png";
    goodImage.scale = 0.09;
    goodImage.diameter = 150;

    badImage = createSprite(random(-380,width), random(-380,height),50,50, 'static');
    badImage.img = "./images/Caltrops.webp";
    badImage.scale = 0.2;
    badImage.diameter = 150;

    healthImage = createSprite(random(-280,280), random(-280,280),0,0, 'static');
    healthImage.img = "./images/medkit.png";
    healthImage.scale = 0.2;
    healthImage.diameter = 150;
   
    imovableObject1 = createCone();
    imovableObject2 = createCone2();
    imovableObject3 = createTorus();
    imovableObject4 = createTorus2();
    imovableObject5 = createSphere();
    
}

function draw() {

    text('Points', 0, 0)
    text(points, 0, 0)
    text(health, 0, 0)
    text('Health', 0, 0)
    background(120);



    createCone();
    createCone2();
    createTorus();
    createTorus2();
    createSphere();

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
            goodImage;
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

  function createParticles(x, y) 
  {
    for (let i = 0; i < 5; i++) 
    {
        let p = new Particle(x, y);
        particles.push(p);
    }
    for (let i = particles.length - 1; i >= 0; i--) 
    {
        particles[i].update();
        particles[i].show();
        if (particles[i].finished()) 
        {
            particles.splice(i, 1);
        }
    }
}

function createCone()
    {
        push();
        normalMaterial();
        translate(-150,150);
        rotateX(frameCount * 0.5);
        rotateY(frameCount * 0.25);
        rotateZ(frameCount * 0.3);
        cone(40,10,4);
        pop();
    }
    function createCone2()
    {
        push();
        normalMaterial();
        translate(150,-150);
        rotateX(frameCount * -0.5);
        rotateY(frameCount * -0.25);
        rotateZ(frameCount * -0.3);
        cone(40,10,4);
        pop();
    }
    function createSphere()
    {
        push();
        translate(90,-280);
        //rotateX(frameCount * 0.05);
        rotateY(frameCount * 0.5);
        //rotateZ(frameCount * 0.03);
        pointLight(250, 250, 250, mouseX, mouseY, 500);
        specularMaterial("white");
        sphere(50,20,10);
        pop();
    }
    
function createTorus()
    {
        push();
        normalMaterial();
        translate(-130,-150);
        rotateX(frameCount * 0.5);
        rotateY(frameCount * 0.08);
        rotateZ(frameCount * 0.7);
        torus(34,15);
        pop();
        
    }
function createTorus2()
    {
        push();
        normalMaterial();28
        translate(200,130);
        rotateX(frameCount * 0.5);
        rotateY(frameCount * -0.5);
        rotateZ(frameCount * -0.3);
        torus(30,15);
        pop();
        
    }
