//Special thanks to the tutorials from
// Patt Vira (https://www.youtube.com/watch?v=4IyeLc6J1Uo) and
// The Coding Train (https://www.youtube.com/watch?v=oLiaUEKsRws)



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
let savedImg;
let film;


var vid;
var button;
var snap =[];


let vidw = 640;
let vidh = 480;
let canvas;
let scl = 10;

let m, l;

let offsetX = 200;
let offsetY = 22;

let asciiChar = "@%#*+=-:.";
let currentCharset = asciiChar;


let sound;
let normal;


function setup() {
   canvas = createCanvas(1200, 720);
   canvas.parent('sketch');
   background('#cfcfcf');
   vid = createCapture(VIDEO);
   vid.size(80, 60);
   vid.hide();

   m = scl;
   l = scl;



//CAMERA SETTINGS
  myRadio = createRadio();
  myRadio.class('p5-radio');
  myRadio.option('1', 'Invert');
  myRadio.option('2', 'Mirror');
  myRadio.selected('1');
  myRadio.position(1025, 100);


//FULLSCREEN
// full.mousePressed(() => {
//   if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
//     let fs = fullscreen();
//     fullscreen(!fs);
//   }
// });
// full.style('text-decoration','none');
const fuller = document.getElementById('full');
  fuller.addEventListener('click', () => {
    let fs = fullscreen();
    fullscreen(!fs);
  });


//FILM STRIP
strip = createDiv('');
strip.parent('sketch');
strip.style("width: 159px;");
strip.style("height: 599px;");
strip.style("border", "1.5px dotted black");
strip.style('position', 'relative');
strip.position(20, (91-20));


rect1 = createDiv('');
rect1.parent('sketch');
rect1.style("border", "1.5px dotted black");
rect1.style("width: 139px;");
rect1.style("height: 112.5px;");
rect1.position(30, (100-20));


rect2 = createDiv('');
rect2.parent('sketch');
rect2.style("border", "1.5px dotted black");
rect2.style("width: 139px;");
rect2.style("height: 112.5px;");
rect2.position(30, (220-20));


rect3 = createDiv('');
rect3.parent('sketch');
rect3.style("border", "1.5px dotted black");
rect3.style("width: 139px;");
rect3.style("height: 112.5px;");
rect3.position(30, (340-20));


rect4 = createDiv('');
rect4.parent('sketch');
rect4.style("border", "1.5px dotted black");
rect4.style("width: 139px;");
rect4.style("height: 112.5px;");
rect4.position(30, (460-20));


//SAVE
download = createButton('Save +');
download.mousePressed(arrow);
download.position(25, 740);

 //SHOOT
 shot = createButton('Cheese!');
 shot.mousePressed(click);
 shot.position(580, 690);
 

//FILTER 1
 un = createButton('Filter 1');
 un.mousePressed(() => currentCharset = "@%#*+=-:.");
 un.position(1030, 70);
//FILTER 2
 deux = createButton('Filter 2');
 deux.mousePressed(() => currentCharset = "▂▂▃▃▄▅▅▆▇█");
 deux.position(1080, 70);
//FILTER 3
 trois = createButton('Filter 3');
 trois.mousePressed(() => currentCharset = " 0011");
 trois.position(1130, 70);
//FILTER 4
 quatre = createButton('Filter 4');
 quatre.mousePressed(() => currentCharset = "████▒▒▒░░░░░");
 quatre.position(1180, 70);

 redb1 = createButton('')
 redb1.mousePressed(()=> fill(255, 0, 0))
 redb1.position(1030, 150);
 redb1.size(20, 20);
 redb1.style('font-size','20px');
 redb1.style('background-color','red');

 yellowb2 = createButton('')
 yellowb2.mousePressed(()=> fill(255, 225, 0))
 yellowb2.position(1030, 170);
 yellowb2.size(20, 20);
 yellowb2.style('background-color','yellow');
 
 greenb3 = createButton('')
 greenb3.mousePressed(()=> fill(0, 225, 0))
 greenb3.position(1030, 190);
 greenb3.size(20, 20);
 greenb3.style('background-color','#00FF00');

 cyanb4 = createButton('')
 cyanb4.mousePressed(()=> fill(0, 225, 225));
 cyanb4.position(1030, 210);
 cyanb4.size(20, 20);
 cyanb4.style('background-color','cyan');

 blueb5 = createButton('')
 blueb5.mousePressed(()=> fill(0, 0, 225));
 blueb5.position(1030, 230);
 blueb5.size(20, 20);
 blueb5.style('background-color','blue');

 magentab6 = createButton('')
 magentab6.mousePressed(()=> fill(225, 0, 225));
 magentab6.position(1030, 250);
 magentab6.size(20, 20);
 magentab6.style('background-color','magenta')

 blackb7 = createButton('')
 blackb7.mousePressed(()=> fill(0));
 blackb7.position(1030, 270);
 blackb7.size(20, 20);
 blackb7.style('background-color','black')
 
}

function click() {
 snap.push(get(300,0,800, 600))
}

function arrow() {
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    savedImg = canvas.get(10, 10, 159, 599); 
    savedImg.save('ASCII_PHOTOBOOTH', 'png');
  }
}

function draw() {
   background('#cfcfcf');
   vid.loadPixels();
  
   let u = myRadio.value();
   if (u=='1') {
   background('#cfcfcf');
    
     var w = vidw/4;
     var h = vidh/4;
     var x = 20;
     var y = 20;
     for (var i = 0; i < min(snap.length, 4); i++) {
         image(snap[i],x,y,w,h);
       x = x + width;
       if (x>w) {
         x = 20;
         y = y+h;
       }
     }
    
   } else if (u=='2') {
   background('#cfcfcf');
    var w = vidw/4;
    var h = vidh/4;
    var x = 20;
    var y = 20;
    for (var i = 0; i < min(snap.length, 4); i++) {
  
        push();
        translate(x + w, y);
        scale(-1, 1);
        image(snap[i], 20, 0, w, h);
        pop();
       x = x + width;
      if (x>w) {
        x = 20;
        y = y+h;
      }
      }
    
    push();
    translate(vidw, 0);
    scale(-1, 1);
    pop();
 }
 
 for (let i = 0; i < vid.width; i++) {
    for (let j = 0; j < vid.height; j++) {
      let pixelIndex = (i + j * vid.width) * 4;
      let r = vid.pixels[pixelIndex + 0];
      let g = vid.pixels[pixelIndex + 1];
      let b = vid.pixels[pixelIndex + 2];
      
      let bright = (r + g + b) / 3;
      let tIndex = floor(map(bright, 0, 255, 0, asciiChar.length));
      
      let t = currentCharset.charAt(tIndex);

      noStroke();
      textSize(11);
      textAlign(CENTER, CENTER);
      text(t, i * m + offsetX, j * l + offsetY);
    }
  }

 }
