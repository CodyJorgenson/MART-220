
class animation{

    constructor(animationInput){
        this.input = animationInput;
        this.animationImg = [];
        
        for (var i = 0; i < this.input.length; i++){
            this.animationImg[i] = loadImage(this.input[i]);
        }
    }

    draw(x, y, frame){
        image(this.animationImg[frame],x ,y , 100, 100); 
    }
}
