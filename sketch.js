function setup() {
    // put setup code here
    createCanvas(innerWidth, innerHeight)



}

function draw() {
    // Denmark
    fill('red'); 
    noStroke()
    rect(150, 120, 500, 300);
    fill('white')
    rect(290, 120, 45, 300);
    fill('white');
    rect(150, 250, 500, 45);
    
    //Congo
    fill('#F0CF32');
    rect(900, 120, 450, 300);
    fill('#1A9624');
    triangle(900, 120, 900, 420, 1200, 120);
    fill('#D63025');
    triangle(1350, 420 , 1350, 120, 1055, 420);
}