// function change() {
//   var c = document.getElementById("changing");
//   var g = document.getElementById("gen");
//   var s = document.getElementById("send");
//   var y = document.getElementById("left");
//   var z = document.getElementById("right");
//   if (c.style.display === "none") {
//     c.style.display = "block";
//     g.style.zIndex = "3";
//     c.style.zIndex = "10";
//     s.style.zIndex = "3";
//     y.style.width = "69%";
//     z.style.width = "30%";
//     z.style.display = "block";
//   } else {
//     c.style.display ="none";
//     s.style.display = "none";
//     g.style.display ="none";
//     y.style.width = "100%";
//     z.style.display = "none";
//   }
// } 

// function gen() {
//   var c = document.getElementById("changing");
//   var g = document.getElementById("gen");
//   var s = document.getElementById("send");
//   var y = document.getElementById("left");
//   var z = document.getElementById("right");
//   if (g.style.display === "none") {
//     g.style.display = "block";
//     c.style.zIndex = "3";
//     g.style.zIndex = "10";
//     s.style.zIndex = "3";
//     y.style.width = "69%";
//     z.style.width = "30%";
//     z.style.display = "block";
//   } else {
//     c.style.display ="none";
//     s.style.display = "none";
//     g.style.display ="none";
//     y.style.width = "100%";
//     z.style.display = "none";
//   }
// }

// function send() {
//   var c = document.getElementById("changing");
//   var g = document.getElementById("gen");
//   var s = document.getElementById("send");
//   var y = document.getElementById("left");
//   var z = document.getElementById("right");
//   if (s.style.display === "none") {
//     s.style.display = "block";
//     c.style.zIndex = "3";
//     g.style.zIndex = "3";
//     s.style.zIndex = "10";
//     y.style.width = "69%";
//     z.style.width = "30%";
//     z.style.display = "block";
//   } else {
//     c.style.display ="none";
//     s.style.display = "none";
//     g.style.display ="none";
//     y.style.width = "100%";
//     z.style.display = "none";
//   }
// } 

function toggle(sectionId) {
  var sections = ["changing", "gen", "send"];
  var y = document.getElementById("left");
  var z = document.getElementById("right");
  
  sections.forEach(function (id) {
    var section = document.getElementById(id);
    
    if (id === sectionId) {
      if (section.style.display === "none" || section.style.display === "") {
        section.style.display = "block";
        section.style.zIndex = "10";
        y.style.width = "69%";
        z.style.width = "30%";
        z.style.display = "block";
      } else {
        section.style.display = "none";
        y.style.width = "100%";
        z.style.display = "none";
      }
    } else {
      section.style.display = "none";
      section.style.zIndex = "3";
    }
  });
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