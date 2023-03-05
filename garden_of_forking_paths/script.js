// window.onload = function() {

//analog clock JS
const hourHand = document.querySelector('.hourHand');
    const minuteHand = document.querySelector('.minuteHand');
    const secondHand = document.querySelector('.secondHand');
    const time = document.querySelector('.time');
    const clock = document.querySelector('.clock');


    function setDate(){
        const today = new Date();
        
        const second = today.getSeconds();
        const secondDeg = ((second / 60) * 360) + 360; 
        secondHand.style.transform = `rotate(${secondDeg}deg)`;
      
  
        
        const minute = today.getMinutes();
        const minuteDeg = ((minute / 60) * 360); 
        minuteHand.style.transform = `rotate(${minuteDeg}deg)`;

        const hour = today.getHours();
        const hourDeg = ((hour / 12 ) * 360 ); 
        hourHand.style.transform = `rotate(${hourDeg}deg)`;
        
        time.innerHTML = '<span>' + '<strong>' + hour + '</strong>' + ' : ' + minute + ' : ' + '<small>' + second +'</small>'+ '</span>';

        }
  
    setInterval(setDate, 1000);
 
// }

// random image selector
 // window.onload = clockFace;

// var myPix = new Array("watch/watch1.png","watch/watch2.png","watch/watch3.png","watch/watch4.png");

// function clockFace() {
   //  var randomNum = Math.floor(Math.random() * myPix.length);
    // document.getElementById("randomClockFace").src = myPix[randomNum]; 
//}

