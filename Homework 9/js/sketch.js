
function setup()
    {
        createCanvas(1350,760,WEBGL);
        
    }
function draw()
    {
        background(120);
        createTorus();
        createTorus2();
        createCone();
        createCone2();
        createSphere();
    }
function createCone()
    {
        push();
        normalMaterial();
        translate(-150,150);
        rotateX(frameCount * 0.05);
        rotateY(frameCount * 0.025);
        rotateZ(frameCount * 0.03);
        cone(40,100,4);
        pop();
    }
    function createCone2()
    {
        push();
        normalMaterial();
        translate(150,-150);
        rotateX(frameCount * -0.05);
        rotateY(frameCount * -0.025);
        rotateZ(frameCount * -0.03);
        cone(40,100,4);
        pop();
    }
    function createSphere()
    {
        push();
        translate(0,0);
        //rotateX(frameCount * 0.05);
        rotateY(frameCount * 0.025);
        //rotateZ(frameCount * 0.03);
        pointLight(250, 250, 250, mouseX, mouseY, 500);
        specularMaterial("white");
        sphere(100,20,20);
        pop();
    }
    
function createTorus()
    {
        push();
        normalMaterial();
        translate(0,0);
        rotateX(frameCount * 0.01);
        rotateY(frameCount * 0.001);
        rotateZ(frameCount * 0.03);
        torus(340,15);
        pop();
        
    }
function createTorus2()
    {
        push();
        normalMaterial();
        translate(0,0);
        rotateX(frameCount * 0.015);
        rotateY(frameCount * -0.005);
        rotateZ(frameCount * -0.03);
        torus(300,15);
        pop();
        
    }
    