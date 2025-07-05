document.body.addEventListener("click", soundEffects);

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function soundEffects() {
    const randomNum = getRandomInt(29);
    const audio = new Audio(`sound/${randomNum}.wav`);
    audio.play()
}

        

       
      

    //   myAudioElement.addEventListener("canplaythrough", (event) => {
    //     /* the audio is now playable; play it if permissions allow */
    //     myAudioElement.play();
    //   });

      



      
    // function addEvent(){
    //      document.body.addEventListener("click", play)
    //    }
      
    // function play() {
    //     var audio = document.getElementById("audio");
    //     audio.play();
    //   }
   


// function soundEffects(){
//     document.body.addEventListener("click", play)
//   }

// function play() {
//    var audio = document.getElementById("audio");
//    audio.play();
//  }

//  function chooseSound() {
   


//     // const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
    
//     for (let i = 0; i < randomNum.length; i++) {
//         text += randomNum[i] + ".wav";
//  }
// }

// //  var myPix = new Array("watch/watch1.png","watch/watch2.png","watch/watch3.png","watch/watch4.png");
 
// //  function choosePic() {
// //       var randomNum = Math.floor(Math.random() * myPix.length);
// //       document.getElementById("myPicture").src = myPix[randomNum]; 
// //  }
  