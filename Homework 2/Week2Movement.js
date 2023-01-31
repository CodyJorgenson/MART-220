var x = 100;
var y = 100;
var side = 50;
var mouseX = x;
var mouseY = y;
var rColor = ['red', 'blue', 'violet', 'yellow', 'orange', 'pink', 'purple', 'limegreen', 'crimson', 'maroon'];
var randomIndex = Math.floor(Math.random() * rColor.length);
var randomColor = rColor[randomIndex];

function setup() {
    createCanvas(800,600);

}

function draw() {
  background(200);
  fill("white");
  textSize(25);
  text("Onigiri craze",10,25);

  fill("red");
  textSize(15);
  text("Cody Jorgenson",680,590);


  fill(230);

  ellipse(300,250,400,400);

  fill(0,100,0);
  rect(210,250,200,200);

  fill(250,0,0);
    
  randomIndex = Math.floor(Math.random()*rColor.length);
  fill(rColor[randomIndex]);
  square(x,y,50);
  
    drawRect();

}

function mouseMoved() {
   x = mouseX;
   y = mouseY;

  if (mouseMoved){
    square(x,y,50);
    
   }
    
}
function drawRect(){
    for(var i = 0; i < 5; i++)
    {
        rect(x,y,side);
        x+=random(x);
        y+=random(y);

    }
}





/*
var x = 100;
var y = 100;
var rColor = ['red', 'blue', 'violet', 'yellow', 'orange', 'pink', 'purple', 'limegreen', 'crimson', 'maroon'];
 

function setup() {
    function setup() {
        fill(rColor);
        createCanvas(600,500);
      }
    function draw() {
        fill(230);

        ellipse(300,250,400,400);

        fill(0,100,0);
        rect(210,250,200,200);

        ellipse(x,y,50)
        fill(250,0,0);
    
        }
    function mouseMoved() {
        x = mouseX;
        y = mouseY;
        }
}
*/