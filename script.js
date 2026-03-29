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

