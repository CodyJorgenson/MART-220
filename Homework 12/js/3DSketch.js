let MyObject1;
let texture1;
let texture2;
let texture3;
let texture4;
let texture5;

let myFont;

let shapeArray = [];

var modRotation = 0;
var modRotationSpeed1 = 0.01;
var modRotationSpeed2 = 0.07;
var modRotationSpeed3 = 0.15;
var modRotationSpeed4 = 0.005;
var modRotationSpeed5 = 0.003;

var torusTranslationX = -120;
var torusTranslationY = -220;
var coneTranslationX = -350;
var coneTranslationY = 150;
var cubeTranslationX = 170;
var cubeTranslationY = 420
var cylinderTranslationX = 480;
var cylinderTranslationY = 480;
var sphereTranslationX = 180;
var sphereTranslationY = 75;


function preload()
{
    myFont = loadFont("assets/tirto-writer-font/TirtoWritterRegular-Eajrl.ttf");
    MyObject1 = loadModel("assets/MyObject1.obj", true);
    texture1 = loadImage("assets/fire.jpg");
    texture2 = loadImage("assets/grass.jpg");
    texture3 = loadImage("assets/lightning.jpeg");
    texture4 = loadImage("assets/Nova.jpeg");
    texture5 = loadImage("assets/Pasta.jpeg");
}

function setup()
{
    createCanvas(1000,800,WEBGL);

    shapeArray.push(new basicshapeclass("cone", 80, 130, 4, coneTranslationX, coneTranslationY, modRotationSpeed1, texture1));
    shapeArray.push(new basicshapeclass("torus", 50, 30, 50, torusTranslationX, torusTranslationY, modRotationSpeed2, texture2));
    shapeArray.push(new basicshapeclass("cylinder", 50, 100, 100, cylinderTranslationX, cylinderTranslationY, modRotationSpeed4, texture5));
    shapeArray.push(new basicshapeclass("cube", 80, 80, 80, cubeTranslationX, cubeTranslationY, modRotationSpeed3, texture4));
    shapeArray.push(new basicshapeclass("sphere", 80, 80, 80, sphereTranslationX, sphereTranslationY, modRotationSpeed5, texture3));

}

function draw()
{
    background (200);
    textFont(myFont);
    textSize(25);
    text("Cody Jorgenson", 250, 350, "static");
    text("Title: Oops", 200, 300, "static");

    scale(.5);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    normalMaterial();
    model(MyObject1);



    for (var i = 0; i < shapeArray.length; i++) 
    {
        shapeArray[i].draw(frameCount);
    }


    if (mouseIsPressed) 
    {
        torusTranslationX = 800;
        torusTranslationY = 800;
        torusTranslationX = floor(random(400,-400));
        torusTranslationY = floor(random(400,-400));
        coneTranslationX = 0;
        coneTranslationY = 0;
        coneTranslationX = floor(random(400,-400));
        coneTranslationY = floor(random(400,-400));
    }

}