let b1;
let b2;

function setup() {
    createCanvas(600, 400);
    b1 = new Bubble(250, 200);
    b2 = new Bubble(350, 200);
}

function draw() {
    background(0);
    b1.update();
    b2.update();
    b1.display();
    b2.display();

    if(b1.intersects(b2)){
        b1.changeColor();
        b2.changeColor();
    }

}

// function mousePressed() {
//     for (let i = bubbles.length-1; i >= 0; i--) {
//         if (bubbles[i].contains(mouseX, mouseY)) {
//             bubbles.splice(i, 1);
//         }
//     }
// }
//
// function mouseMoved() {
//     for (let i = 0; i < bubbles.length; i++) {
//         if (bubbles[i].contains(mouseX, mouseY)) {
//             bubbles[i].changeColor(255);
//         } else {
//             bubbles[i].changeColor(0);
//         }
//     }
// }

class Bubble {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.r = 48;
        this.col=color(255);

    }
    display() {
        stroke(255);
        fill(this.col, 100);
        ellipse(this.x, this.y, this.r * 2);
    }
    update() {
        this.x = this.x + random(-1, 1);
        this.y = this.y + random(-1, 1);
    }

    changeColor(){
        this.col=color(random(255),random(255),random(255));
    }

    intersects(other){
        var d = dist(this.x, this.y, other.x, other.y);
        if (d < this.r + other.r) {
            return true;
        }else{
            return false;
        }
    }
}
