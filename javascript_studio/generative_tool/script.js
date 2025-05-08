let style = document.createElement('style');
style.innerHTML = `
.p5-radio label {
 display: flex;
 flex-direction: row;
 flex-wrap: nowrap;
}
.p5-radio input {
  margin-right: 5px;
  flex-direction: row;
 flex-wrap: nowrap;
}`
;
document.head.appendChild(style);


let myRadio;
let video;


var vid;
var button;
var snap =[];


let vidw = 640;
let vidh = 480;
let canvas;
let scl = 10;

let m, l;

let offsetX = 300;
let offsetY = 50;

let asciiChar = "@%#*+=-:.";
let currentCharset = asciiChar;


let sound;
let normal;


// function preload(){
//   sound=loadSound('cam.mp3');
// }


function setup() {
   canvas = createCanvas(900, 720);
   canvas.parent('sketch');
   background('#cfcfcf');
   vid = createCapture(VIDEO);
   vid.size(80, 60);
   vid.hide();

   m = scl;
   l = scl;
  

//  //OFFSCREEN CANVAS
//  canvas = createGraphics(469,600);
//  background('#cfcfcf');

// //CAMERA SETTINGS
 myRadio = createRadio();
 myRadio.class('p5-radio');
 myRadio.option('1', 'Invert');
 myRadio.option('2', 'Mirror');
 myRadio.selected('1');
 myRadio.position(600, 160);
 
 //BUTTON
 shot = createButton('click');
 shot.mousePressed(click);
 shot.position(300, 700);

//FILTER 1
 un = createButton('filter 1');
 un.mousePressed(() => currentCharset = "@%#*+=-:.");
 un.position(600, 20);
//FILTER 2
 deux = createButton('filter 2');
 deux.mousePressed(() => currentCharset = "▂▂▃▃▄▅▅▆▇█");
 deux.position(600, 50);
//FILTER 3
 trois = createButton('filter 3');
 trois.mousePressed(() => currentCharset = " 0011");
 trois.position(600, 80);
//FILTER 4
 quatre = createButton('filter 4');
 quatre.mousePressed(() => currentCharset = "████▒▒▒░░░░░");
 quatre.position(600, 110);

 redb1 = createButton('')
 redb1.mousePressed(()=> fill(255, 0, 0))
 redb1.position(600, 220);
 redb1.size(20, 20);

 yellowb2 = createButton('')
 yellowb2.mousePressed(()=> fill(255, 225, 0))
 yellowb2.position(600, 240);
 yellowb2.size(20, 20);
 
 greenb3 = createButton('')
 greenb3.mousePressed(()=> fill(0, 225, 0))
 greenb3.position(600, 260);
 greenb3.size(20, 20);

 cyanb4 = createButton('')
 cyanb4.mousePressed(()=> fill(0, 225, 225));
 cyanb4.position(600, 280);
 cyanb4.size(20, 20);

 blueb5 = createButton('')
 blueb5.mousePressed(()=> fill(0, 0, 225));
 blueb5.position(600, 300);
 blueb5.size(20, 20);

 magentab6 = createButton('')
 magentab6.mousePressed(()=> fill(225, 0, 225));
 magentab6.position(600, 320);
 magentab6.size(20, 20);
}


function click() {
 snap.push(get(300,0,800, 600))
}

function draw() {
  //  background('#cfcfcf');
   vid.loadPixels();
  
   let u = myRadio.value();
   if (u=='1') {
   background('#cfcfcf');
    //  image(vid, 0, 0, 0, 0);
    
     var w = vidw/4;
     var h = vidh/4;
     var x = 10;
     var y = 0;
     for (var i = 0; i < min(snap.length, 4); i++) {
         image(snap[i],x,y,w,h);
       x = x + width;
       if (x>w) {
         x = 10;
         y = y+h+10;
       }
     }
    
   } else if (u=='2') {
   background('#cfcfcf');
    var w = vidw/4;
    var h = vidh/4;
    var x = 10;
    var y = 0;
   for (var i = 0; i < min(snap.length, 4); i++) {
  
        // push();
        // translate(x + w, y); // move origin to right edge of snapshot
        // scale(-1, 1);         // flip horizontally
        // image(snap[i], 10, 10, w, h); // draw flipped
        // pop();
       x = x + width;
        // x += w + 10;
      if (x>w) {
        x = 10;
        y = y+h+10;
      }
      }
    
    // push();
    // translate(vidw, 0); // move to the right edge of canvas
    // scale(-1, 1); // flip horizontally
    // // image(vid, 0, 0, vidw, vidh); // draw video (now flipped)
    // pop();
 }
 
 for (let i = 0; i < vid.width; i++) {
    for (let j = 0; j < vid.height; j++) {
      let pixelIndex = (i + j * vid.width) * 4;
      let r = vid.pixels[pixelIndex + 0];
      let g = vid.pixels[pixelIndex + 1];
      let b = vid.pixels[pixelIndex + 2];
      
      let bright = (r + g + b) / 3;
      let tIndex = floor(map(bright, 0, 255, 0, asciiChar.length));
      
      let a = i * m + m / 2; 
      let d = j * l + l / 2; 
      let t = currentCharset.charAt(tIndex);

      noStroke();
      textSize(11);
      textAlign(CENTER, CENTER);
      // text(t, a, d);
      text(t, i * m + offsetX, j * l + offsetY);
    }
  }

 }

