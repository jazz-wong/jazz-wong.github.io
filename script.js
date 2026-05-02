document.body.addEventListener("click", soundEffects);

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function soundEffects() {
    const randomNum = getRandomInt(29);
    const audio = new Audio(`sound/${randomNum}.wav`);
    audio.play()
    audio.volume = 0.3;
}
gsap.registerPlugin(ScrollToPlugin);

document.querySelectorAll("nav button").forEach((btn, index) => {
    btn.addEventListener("click", () => {
      gsap.to(".left", {duration: 1, scrollTo:{y:"#section" + (index + 1), offsetY:20}});
    });
  });


  document.addEventListener("DOMContentLoaded", () => {
    const box = document.getElementById("box");
    const openButton = document.getElementById("inertia");
    const closeButton = document.getElementById("x");

  openButton.addEventListener("click", () => {
    gsap.set(box, { display: "grid" });
  
    gsap.fromTo(box,{ 
      opacity: 0, 
      scale: 0.95 
    },
      { opacity: 1, 
        scale: 1, 
        duration: 0.3, 
        ease: "power2.out" }
    );
  });
  
  closeButton.addEventListener("click", () => {
  gsap.to(box, {
    opacity: 0,
    scale: 0.95,
    duration: 0.2,
    ease: "power2.in",
    onComplete: () => {
      box.style.display = "none";
    }
  });
});
});

document.addEventListener("DOMContentLoaded", () => {
  const box = document.getElementById("box2");
  const openButton = document.getElementById("shapeshifter");
  const closeButton = document.getElementById("x2");

openButton.addEventListener("click", () => {
  gsap.set(box, { display: "grid" });

  gsap.fromTo(box,{ 
    opacity: 0, 
    scale: 0.95 
  },
    { opacity: 1, 
      scale: 1, 
      duration: 0.3, 
      ease: "power2.out" }
  );
});

closeButton.addEventListener("click", () => {
gsap.to(box, {
  opacity: 0,
  scale: 0.95,
  duration: 0.2,
  ease: "power2.in",
  onComplete: () => {
    box.style.display = "none";
  }
});
});
});


document.addEventListener("DOMContentLoaded", () => {
  const box = document.getElementById("box3");
  const openButton = document.getElementById("spark");
  const closeButton = document.getElementById("x3");

openButton.addEventListener("click", () => {
  gsap.set(box, { display: "grid" });

  gsap.fromTo(box,{ 
    opacity: 0, 
    scale: 0.95 
  },
    { opacity: 1, 
      scale: 1, 
      duration: 0.3, 
      ease: "power2.out" }
  );
});

closeButton.addEventListener("click", () => {
gsap.to(box, {
  opacity: 0,
  scale: 0.95,
  duration: 0.2,
  ease: "power2.in",
  onComplete: () => {
    box.style.display = "none";
  }
});
});
});

document.addEventListener("DOMContentLoaded", () => {
  const box = document.getElementById("box4");
  const openButton = document.getElementById("nasa");
  const closeButton = document.getElementById("x4");

openButton.addEventListener("click", () => {
  gsap.set(box, { display: "grid" });

  gsap.fromTo(box,{ 
    opacity: 0, 
    scale: 0.95 
  },
    { opacity: 1, 
      scale: 1, 
      duration: 0.3, 
      ease: "power2.out" }
  );
});

closeButton.addEventListener("click", () => {
gsap.to(box, {
  opacity: 0,
  scale: 0.95,
  duration: 0.2,
  ease: "power2.in",
  onComplete: () => {
    box.style.display = "none";
  }
});
});
});