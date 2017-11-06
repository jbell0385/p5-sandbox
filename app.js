let bubbles = [];
var rect1;


function setup() {
    createCanvas(600, 400);
    let x = random(width);
    let y = random(height);
    let r = random(10, 50);
    let b = new Bubble(x, y, r);
    bubbles.push(b);
    rect1 = new Rectangle(random(width), random(height), 50, 50);
}

function draw() {
    background(0);
    for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].move();
        bubbles[i].show();
    }
    rect1.show();
    rect1.move();
}

function mousePressed() {
    for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].clicked(mouseX, mouseY);
    }
    rect1.clicked(mouseX,mouseY);
}

class Bubble {
    constructor(x, y, r) {
        this.x = y;
        this.y = y;
        this.r = r;
        this.brightness = 0;
    }

    clicked(x, y) {
        let d = dist(x, y, this.x, this.y);
        if (d < this.r) {
            this.brightness = 255;
        }
    }

    move() {
        this.x = this.x + random(-3, 3);
        this.y = this.y + random(-3, 3);
    }

    show() {
        stroke(255);
        strokeWeight(4);
        fill(this.brightness, 125);
        ellipse(this.x, this.y, this.r * 2);
    }
}

class Rectangle {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }

    clicked(x, y) {
        if (x > this.x && x < this.x + this.w && y > this.y && y < this.y + this.h){
            console.log('clicked');
        }
    }

    show() {
        stroke(255);
        rect(this.x, this.y, this.w, this.h);
        noFill();
    }

    move() {
        this.x = this.x + random(-2, 2);
        this.y = this.y + random(-2, 2);
    }
}
