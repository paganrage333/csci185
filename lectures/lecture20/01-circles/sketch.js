function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // fill('red');
    noFill();

    let y = 0;
    let z = 50;
    let x1 = 100
    let x2 = 300
    let x3 = 500
    while (y <= 900, z<=1050) {
        fill('blue');
        circle(x1,y,z);
        fill('red')
        circle(x2,y,z);
        fill('green')
        circle(x3,y,z);
        y+=5;
        z+=5;
        x1+=5;
        x2-=5;
        x3/=-1.02;
    }
    
    
    // circle(100, 200, 50);
    // circle(100, 250, 50);
    // circle(100, 300, 50);
    // circle(100, 350, 50);
    // circle(100, 400, 50);

    // drawGrid(canvasWidth, canvasHeight);
}
