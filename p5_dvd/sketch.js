let d = 100; // diameter of circle
let x = d/2; // x-coordinate starts at 50
let y = d/2; // y-coordinate starts at 50
let vx = 3; // velocity in x-direction
let vy = 1; // velocity in y-direction
let dvd; // create an image

function preload(){
  dvd = loadImage('dvd.png'); 
}


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  imageMode(CENTER)
  dvd.resize(80,50);
  image(dvd,x,y); 
  x = x + vx;
  y = y + vy;

  //console.log(dvd.width)
  
   if (x + dvd.width / 2 >= windowWidth || x - dvd.width / 2 <= 0) {
    vx = -vx;
  }
  if (y + dvd.height / 2 >= windowHeight || y - dvd.height / 2 <= 0) {
    vy = -vy;
  } 
}


  
  
  
  // ellipseMode(CORNER);
  /*
  ellipse(x, y, d);
  x = x + vx; // updating the x-coordinate
  y = y + vy; // updating the y-coordinate
  // d = d + 1;  // d++;

  /* boundary-checking
   * the ball change its direction once it hits the wall
   ________

  // console.log(vx);
  // circle(200, 200, 50);
  
  */
