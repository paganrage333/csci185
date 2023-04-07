const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 
const colors = ["#08415c", "#e1f0c4", "#6bab90", "#55917f", "#5e4c5a", 'hotpink'];

function randomFloat(min, max) { 
	// min and max included 
	return Math.random() * (max - min) + min;
}

function randomInt(min, max) { 
	// min and max included 
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    frameRate(2);
    
    // fill("#08415c");

   

    // draw a random circle:
   
    
}


// // anything that you want to animate goes in this function:  
function draw() {
    clear();
    let i = 0;
    while(i<150) {
    
        let x = randomInt(0, canvasWidth);
        let y = randomInt(0, canvasHeight);
        let x1 = randomInt(0, canvasWidth);
        let y1 = randomInt(0, canvasHeight);
        let x2 = randomInt(0, canvasWidth);
        let y2 = randomInt(0, canvasHeight);
        let size = randomFloat(25, 75);
        fill(colors[randomInt(0,5)])
        circle(x, y, size/2);
        fill(colors[randomInt(0,5)])
        square(x1,y1,size);
        fill(colors[randomInt(0,5)])
        triangle(
            x2, y2 - size / 2, 
            x2 - size / 2.25, y2 + size / 4.3,
            x2 + size / 2.25, y2 + size / 4.3
        );
        ++i;
    }
}


 
// // 1. draw a random square:
// square(x, y, size);

// // 2. draw a random triangle:


// // 3. draw a random line:
// let coefX = randomFloat(-3, 3);
// let coefY = randomFloat(-3, 3);
// line(x, y, x + size * coefX, y + size * coefY);

