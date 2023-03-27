function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // for debugging:
    drawGrid(canvasWidth, canvasHeight)
}

function makeCreature(x, y, fillColor, eyeColor='black') {
    
    fill(fillColor);
    circle(x, y, 300);

    fill(eyeColor)
    ellipse(x-50, y-50, 30, 40);
    ellipse(x+50, y-50, 30, 40);

    strokeWeight(4)
    line(x-50,y+80,x+50,y+50);

    strokeWeight(1);
}

function mouseClicked() {
    makeCreature(mouseX, mouseY, 'yellow', 'black');
}

function mouseDragged() {
    makeCreature(mouseX, mouseY, 'hotpink')
}