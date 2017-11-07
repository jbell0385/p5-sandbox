let bubbles = [];

function setup() {
    createCanvas(600, 400);
    for (var i = 0; i < 100; i++) {
        bubbles[i] = new Bubble(random(width), random(height));
    }
}

function draw() {
    background(0);
    for (var i = 0; i < bubbles.length; i++) {
        bubbles[i].update();
        bubbles[i].display();
        for (var j = 0; j < bubbles.length; j++) {
            if (bubbles[i].intersects(bubbles[j]) && i!==j) {

                bubbles[i].changeColor();
                bubbles[j].changeColor();
            }
        }
    }
}


class Bubble {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.r = 10;
        this.col = color(255);
        this.intersect = false;
    }
    display() {
        stroke(255);
        fill(this.col, 100);
        ellipse(this.x, this.y, this.r * 2);
    }
    update(other) {
        if(this.intersects && other !== undefined){
            if(this.y>other.y){
                this.y = this.y + random(0,3);
                other.y = other.y + random(-3,0);
            }else{
                other.y = other.y + random(0,3);
                this.y = this.y + random(-3,0);
            }
            if(this.x>other.x){
                this.x = this.x + random(0,3);
                other.x = other.x + random(-3,0);
            }else{
                other.x = other.x + random(0,3);
                this.x = this.x + random(-3,0);
            }
        }

        if(this.x-this.r<=0){
            this.x=this.x+random(0,3);
        }else if(this.x+this.r>=width){
            this.x=this.x+random(-3,0);
        }else{
            this.x = this.x + random(-1, 1);
        }

        if(this.y-this.r<=0){
            this.y=this.y+random(0,3);
        }else if(this.y+this.r>=height){
            this.y=this.y+random(-3,0);
        }else{
            this.y = this.y + random(-1, 1);
        }
    }

    changeColor() {
        this.col = color(random(255), random(255), random(255));
    }

    intersects(other) {
        var d = dist(this.x, this.y, other.x, other.y);
        if (d < this.r + other.r) {
            this.intersect = true;
            this.update(other);
            return true;
        } else {
            this.intersect = false;
            return false;
        }
    }
}
