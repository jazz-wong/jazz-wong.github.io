document.body.addEventListener("click", soundEffects);

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function soundEffects() {
    const randomNum = getRandomInt(29);
    const audio = new Audio(`sound/${randomNum}.wav`);
    audio.play()
    audio.volume = 0.5;
}
gsap.registerPlugin(ScrollToPlugin);

document.querySelectorAll("nav button").forEach((btn, index) => {
    btn.addEventListener("click", () => {
      gsap.to(".left", {duration: 1, scrollTo:{y:"#section" + (index + 1), offsetY:20}});
    });
  });

  // const dialog = document.getElementById("box");
  // const openButton = document.getElementById("inertia");
  // const closeButton = document.getElementById("x");
  
  // // Open button opens a modal dialog
  // openButton.addEventListener("click", () => {
  //   dialog.showModal();

  // });
  
  // // Close button closes the dialog box
  // closeButton.addEventListener("click", () => {
  //   dialog.close();
  // });

  document.addEventListener("DOMContentLoaded", () => {
    const box = document.getElementById("box");
    const openButton = document.getElementById("inertia");
    const closeButton = document.getElementById("x");
  
    openButton.addEventListener("click", () => {
      box.style.display = "grid"; // or "block" if you prefer
    });
  
    closeButton.addEventListener("click", () => {
      box.style.display = "none";
    });
  });
  