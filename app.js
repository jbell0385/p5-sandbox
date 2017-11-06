let bubbles = [];



function setup() {
    createCanvas(600, 400);
    for(let i =0; i<5;i++){
        let x = random(width);
        let y = random(height);
        let r = random(10, 50);
        let b = new Bubble(x, y, r);
        bubbles.push(b);
    }
}

function draw() {
    background(0);
    for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].move();
        bubbles[i].show();
    }
}

function mousePressed() {
    for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].clicked(mouseX, mouseY);
    }
}

class Bubble {
    constructor(x, y, r) {
        this.x = y;
        this.y = y;
        this.r = r;
        this.brightness = 0;
    }

    clicked(x,y) {
        let d = dist(x, y, this.x, this.y);
        if (d < this.r) {
            this.brightness=255;
        }
    }

    move() {
        this.x = this.x + random(-3, 3);
        this.y = this.y + random(-3, 3);
    }

    show() {
        stroke(255);
        strokeWeight(4);
        fill(this.brightness,125);
        ellipse(this.x, this.y, this.r * 2);
    }
}
