
var x2 = 0;
var y2 = 0;
var x = 100;
var y = 100;
var side = 50;
var mouseX = x;
var mouseY = y;
var rColor = ['red', 'blue', 'violet', 'yellow', 'orange', 'pink', 'purple', 'limegreen', 'crimson', 'maroon'];
var randomIndex = Math.floor(Math.random() * rColor.length);
var randomColor = rColor[randomIndex];
var img1;
var img2;
var img3;
let myFont;
var yMax = 600;
var xMax = 600;
var canvasXm = 1400;
var canvasYm = 3000;
var xMove = 100;
var yMove = 100;
var shapeXSpeed;
var shapeYSpeed;
var timerValue = 59;
var startButton;


function preload(){
  img1 = loadImage("Images/2000.jpg");
  img2 = loadImage("Images/2001.jpg");
  img3 = loadImage("Images/2002.jpg");
  myFont = loadFont('fonts/SassyFrass-Regular.ttf');
  

}

function setup() {
  createCanvas(canvasXm,canvasYm);
  background(200);
  shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 1)) + 5);
  shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 1)) + 5);
  textAlign(canvasXm / 2);
  setInterval(timeIt, 1000);

}



function draw() {
  fill("black");
  background(200);
  if (timerValue >= 10) {
    text("0:" + timerValue, width / 2, height / 2);
  }
  if (timerValue < 10) {
    text('0:0' + timerValue, width / 2, height / 2);
  }
  if (timerValue == 0) {
    text('game over', width / 2, height / 2 + 15);
  }

  imageMove(shapeXSpeed, shapeYSpeed);
  image(img1, 0, yMax);
  image(img3, 0, yMax + yMax);
  
  fill("white");
  textFont(myFont);
  textSize(50);
  text("Crazy Onigiri ",10,30);

  fill("red");
  textSize(35);
  text("Cody Jorgenson",630,590);

  fill(230);

  ellipse(300,250,400,400);

  fill(0,100,0);
  rect(210,250,200,200);

  fill(250,0,0);
    
  randomIndex = Math.floor(Math.random()*rColor.length);
  fill(rColor[randomIndex]);
  square(x,y,50);
  
  

}

function mouseMoved() {
   x = mouseX;
   y = mouseY;

  if (mouseMoved){
    randoColor();
    square(x,y,50);
    
   }
    
}
/*
function mouseClicked(){
  setup();
  draw();
}
*/
function randoColor(){
  randomIndex = Math.floor(Math.random()*rColor.length);
  fill(rColor[randomIndex]);
  square(x,y,50);
}
/*

function drawRect(){
    for(var i = 0; i < 5; i++)
    {
        rect(x,y,side);
        x+=random(x);
        y+=random(y);

    }
}
*/

function imageMove()
{

 shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 1)) + 5);
  shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 1)) + 5);
  image(img2, xMove, yMove);
  xMove += shapeXSpeed;
  yMove += shapeYSpeed;


  if(xMove >= width)
  {
      xMove = 0;
  }
  if(xMove <= 0)
  {
      xMove = width;
  }
  if(yMove >= height)
  {
      yMove = 0;
  }
  if(yMove <= 0)
  {
      yMove = height;
  }
  if(xMove >= canvasXm)
  {
    xMove = 0;
  }
  if(yMove >= canvasYm)
  {
    yMove = 0;
  }

}

function timeIt() {
  if (timerValue > 0) {
    timerValue--;
  }
}
