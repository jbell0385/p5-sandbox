let bubbles = [];

function setup() {
    createCanvas(600, 400);
    for (var i = 0; i < 20; i++) {
        bubbles[i] = new Bubble(random(width), random(height));
    }
}

function draw() {
    background(0);
    for (var i = 0; i < bubbles.length; i++) {
        bubbles[i].update();
        bubbles[i].display();
        for (var j = 0; j < bubbles.length; j++) {
            if (bubbles[i].intersects(bubbles[j]) && bubbles[j]!==bubbles[i]) {
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
        this.r = 48;
        this.col = color(255);

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

    changeColor() {
        this.col = color(random(255), random(255), random(255));
    }

    intersects(other) {
        var d = dist(this.x, this.y, other.x, other.y);
        if (d < this.r + other.r) {
            return true;
        } else {
            return false;
        }
    }
}
