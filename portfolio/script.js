function star() {
    var a = document.getElementById("popup_one");
    let vid = document.getElementById("myVideo"); { 
      vid.play(); 
    }
    if (a.style.display === "none") {
      a.style.display = "block";
    } else {
      a.style.display = "none";
      vid.pause();
    }
  }

  function star2() {
    var b = document.getElementById("popup_two");
    let vid = document.getElementById("myVideo"); { 
      vid.play(); 
    }
    if (b.style.display === "none") {
      b.style.display = "block";
    } else {
      b.style.display = "none";
      vid.pause();
    }
  }

  function star3() {
    var c = document.getElementById("popup_three");
    let vid = document.getElementById("myVideo"); { 
      vid.play(); 
    }
    if (c.style.display === "none") {
      c.style.display = "block";
    } else {
      c.style.display = "none";
      vid.pause();
    }
  }

  function star4() {
    var d = document.getElementById("popup_four");
    let vid = document.getElementById("myVideo"); { 
      vid.play(); 
    }
    if (d.style.display === "none") {
      d.style.display = "block";
    } else {
      d.style.display = "none";
      vid.pause();
    }
  }

  function star5() {
    var d = document.getElementById("popup_five");
    let vid = document.getElementById("myVideo"); { 
      vid.play(); 
    }
    if (d.style.display === "none") {
      d.style.display = "block";
    } else {
      d.style.display = "none";
      vid.pause();
    }
  }

  function star6() {
    var d = document.getElementById("popup_six");
    let vid = document.getElementById("myVideo"); { 
      vid.play(); 
    }
    if (d.style.display === "none") {
      d.style.display = "block";
    } else {
      d.style.display = "none";
      vid.pause();
    }
  }

  function star7() {
    var d = document.getElementById("popup_seven");
    let vid = document.getElementById("myVideo"); { 
    vid.play(); 
  }
    if (d.style.display === "none") {
      d.style.display = "block";
    } else {
      d.style.display = "none"; 
        vid.pause(); 
    }
  }

function toggleFullScreen() {
    if ((document.fullScreenElement && document.fullScreenElement !== null) ||    
     (!document.mozFullScreen && !document.webkitIsFullScreen)) {
      if (document.documentElement.requestFullScreen) {  
        document.documentElement.requestFullScreen();  
      } else if (document.documentElement.mozRequestFullScreen) {  
        document.documentElement.mozRequestFullScreen();  
      } else if (document.documentElement.webkitRequestFullScreen) {  
        document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);  
      }  
    } else {  
      if (document.cancelFullScreen) {  
        document.cancelFullScreen();  
      } else if (document.mozCancelFullScreen) {  
        document.mozCancelFullScreen();  
      } else if (document.webkitCancelFullScreen) {  
        document.webkitCancelFullScreen();  
      }  
    }  
  }



 