
slider.oninput = () => {
    // span value
    const slider = document.getElementById('slider');
    const pixels = document.getElementById('pixels');
    pixels.innerHTML = slider.value;

    // change font size
    document.querySelector('html').style.setProperty('--font-size',`${slider.value}px`);
}

// Make the DIV element draggable:
dragElement(document.getElementById("mydiv"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

const mydiv = document.getElementById('mydiv');
const x = document.getElementById('x');
const info = document.getElementById('info');

x.addEventListener('click', () => {
  mydiv.style.display = 'none';
})

info.addEventListener('click', () => {
  mydiv.style.display = 'block';
}
);

//Event Listener
document.getElementById("submit").addEventListener("click", createMadLib);

//Event Function
function createMadLib() {
    //Input
    let name = document.getElementById("name").value;
    let adj = document.getElementById("adj").value;
    let celeb = document.getElementById("celeb").value;
    let body_part = document.getElementById("body_part").value;
    let ono = document.getElementById("ono").value;
    let untouchable = document.getElementById("untouchable").value;
    let direction = document.getElementById("direction").value;
    let style = document.getElementById("style").value;
    let object = document.getElementById("object").value;
    let superpower = document.getElementById("superpower").value;
    
    
    //Process
    let story = `Once upon a time, there was a wizard named  <span style = "font-family: Banquise-Regular; font-size: 120%;"><span style = "font-family: Banquise-Regular; font-size: 120%;">` + name + `</span></span> the <span style = "font-size: 120%;">` + adj + `</span>, who lived a peaceful life in the quiet heart of Lorem City. It wasn’t always like this though. 

    <br><br> Years ago, <span style = "font-family: Banquise-Regular; font-size: 120%;">` + name + `</span> had led the city’s revolution against the evil mayor,  <span style = "font-size: 120%;"><span style = "font-size: 120%;">` + celeb + `</span></span>, who wanted to rid the city of all its magic. <span style = "font-family: Banquise-Regular; font-size: 120%;">` + name + `</span> raised a magnificent army, filled with other wizards, fairies, gnomes, centaurs, and many other mythical beings. The rebellion fought valiantly, but <span style = "font-size: 120%;"> <span style = "font-size: 120%;">` + celeb + `</span> </span> was a mighty foe. This battle was one <span style = "font-family: Banquise-Regular; font-size: 120%;">` + name + `</span> knew they had to fight alone.
    <br><br>
    <span style = "font-family: carton_fat_faceregular; font-size: 150%;">${ono}</span>! Metal clashed against metal. The duel was ruthless. <span style = "font-family: Banquise-Regular; font-size: 120%;">` + name + `</span> was already running low on magic power, extremely dizzy. In that moment of hesitation, <span style = "font-size: 120%;">` + celeb + `</span> took advantage and stabbed <span style = "font-family: Banquise-Regular; font-size: 120%;">` + name + `</span>’s <span style = "font-family: typefesseclaire-obscure; font-size: 120%;">${body_part}</span> with a poisoned knife. Consciousness was quickly slipping away for our wizard. In a last attempt to win the war, <span style = "font-family: Banquise-Regular; font-size: 120%;">` + name + `</span> traded their voice for an unimaginable power.
    <br><br>
    In a blink of an eye, <span style = "font-size: 120%;">` + celeb + `</span> <span style = "font-size:120%;">${untouchable}</span> in the wreckage of the battle field. <span style = "font-family: Banquise-Regular; font-size: 120%;">` + name + `</span> had saved the city, but at a great sacrifice. Without their voice, <span style = "font-family: Banquise-Regular; font-size: 120%;">` + name + `</span> could no longer conjure magic spells.
    <br><br>
    Since then, Lorem City is now flourishing more than ever, a hub for mythical beings from all over the world. Peace at last in magic society! It’s everything <span style = "font-family: Banquise-Regular; font-size: 120%;">` + name + `</span> could have wanted but they still missed that taste of adventure.
    <br><br>
    A strange letter from the Council of Wizards soon changes this.
    <br><br>
    “There’s a letter for you! From the Council of Wizards, <span style = "font-family: Banquise-Regular;"><span style = "font-family: Banquise-Regular; font-size: 120%;">` + name + `</span></span>,” ` + object + ` the apprentice shouts from across the lair.
    <br><br>
    <span style = "font-family: 4_fromagesregular;">“How strange.”</span>
    <br><br>
    “Very strange indeed, will you open it?” ` + object + ` asks, already fiddling with the wax seal, very eager to see what lies inside.
    <br><br>
    <span style = "font-family: KrikikrakDingbats-Regular;">“You may do the honors, young one.”</span> <span style = "font-family: Banquise-Regular; font-size: 120%;">` + name + `</span> says, as they continue with their task of brewing a <span style = "font-size: 120%;">` + superpower + ` </span> potion. With a nod of his head, ` + object + ` rips open the letter, with enthusiasm.
    <br><br>
    “Oh my Merlin! They’re asking for your participation in the Wizard Boxing Tournament! How wonderful, master! Will you go? You must go!” <span style = "font-family: Banquise-Regular; font-size: 120%;">` + name + `</span> walks away to the treasure chest of magical weapons and pulls out <span style = "font-size: 120%;"> ` + style + `</span>. <span style = "font-family: BunnyPoo;">“DO I LOOK READY FOR AN ADVENTURE?”</span> “You look just wonderful! Where shall we start, master?”
    <br><br>
    “<span style = "font-size: 120%;">` + direction + `</span>”
    <br><br>
    With a laugh, <span style = "font-family: Banquise-Regular; font-size: 120%;">` + name + `</span> and ` + object + ` start their new journey to the Wizard Boxing Tournament.
`    
    ;

    //Output
    document.getElementById("result").innerHTML = story;
}

// Make the DIV element draggable:
dragElement(document.getElementById("mydiv2"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

const mydiv2 = document.getElementById('mydiv2');
const x2 = document.getElementById('x2');
const star = document.getElementById('star');

x2.addEventListener('click', () => {
  mydiv2.style.display = 'none';
})

star.addEventListener('click', () => {
  mydiv2.style.display = 'block';
}

);

// Make the DIV element draggable:
dragElement(document.getElementById("mydiv3"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

const mydiv3 = document.getElementById('mydiv3');
const x3 = document.getElementById('x3');
const mad_lib_directions = document.getElementById('mad_lib_directions');

x3.addEventListener('click', () => {
  mydiv3.style.display = 'none';
})

mad_lib_directions.addEventListener('click', () => {
  mydiv3.style.display = 'block';
}
);





