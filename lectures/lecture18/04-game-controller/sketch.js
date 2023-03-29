let x = 200;
let y = 200;
let width = 150;
let fillColor = 'hotpink';

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

function setup() {
    createCanvas(canvasWidth, canvasHeight);

    // fill('red');
    fill(fillColor);
    circle(x, y, width);

    drawGrid(canvasWidth, canvasHeight);
}

function moveController(ev) {
    console.log(ev.code);
    // left arrow moves circle left
    // right arrow moves circle right
    // up arrow moves circle up
    // down arrow moves circle down
    if (ev.code === 'ArrowUp') {
        y = y - 10;
    }

    if (ev.code === 'ArrowDown') {
        y = y + 10;
    }

    if (ev.code === 'ArrowLeft') {
        x = x - 10;
    }

    if (ev.code === 'ArrowRight') {
        x = x + 10;
    }

    // redraw circle:
    clear();
    fill(fillColor);
    circle(x, y, width);
    drawGrid(canvasWidth, canvasHeight);
}


// Add event listener on keydown
document.addEventListener('keydown', moveController);
