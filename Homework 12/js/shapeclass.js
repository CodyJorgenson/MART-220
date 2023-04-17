class basicshapeclass {

    constructor(shapetype, param1, param2, param3, translateX, translateY,
        rotateXvalue, textureValue) {
        this.shapetype = shapetype;
        this.param1 = param1;
        this.param2 = param2;
        this.param3 = param3;
        this.translateX = translateX;
        this.translateY = translateY;
        this.rotateXvalue = rotateXvalue;
        this.textureValue = textureValue;
    }

    draw(frameCount) {
        push();
        rotateX(this.rotateXvalue * frameCount);
        texture(this.textureValue);
        noStroke();
        if (this.shapetype == "torus") 
        {
            translate(this.translateX, this.translateY);
            torus(this.param1, this.param2);

        } else if (this.shapetype == "cone") 
        {
            rotateY(frameCount * -0.03);
            translate(this.translateX, this.translateY);
            cone(this.param1, this.param2, this.param3);

        } else if (this.shapetype == "cube") 
        {
            rotateY(frameCount * 0.08);
            translate(this.translateX, this.translateY);
            box(this.param1, this.param2, this.param3);

        } else if (this.shapetype == "cylinder") 
        {
            rotateY(frameCount * 0.08);
            translate(this.translateX, this.translateY);
            cylinder(this.param1, this.param2, this.param3);

        } else if (this.shapetype == "sphere") 
        {
            rotateY(frameCount * -0.01);
            translate(this.translateX, this.translateY);
            sphere(this.param1, this.param2, this.param3);
        }
        pop();
    }
}