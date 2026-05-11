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






//section_design

const images = [
  image1 = {
      src: "section_photography/hello_ladybird/ladybird6.jpg",
      alt: "First image",
      w: 2256,
      h: 1504,
  },
  image2 = {
      src: "section_bonus/bag_summer.gif",
      alt: "Second image",
      w: 1504,
      h: 1840,
  },
  image3 = {
      src: "section_design/TXTbooks/TXTbooks_poster.jpg",
      alt: "Third image",
      w: 1688,
      h: 1592,
  },
  image4 = {
      src: "star_moles/starmole.png",
      alt: "Fourth image",
      w: 662,
      h: 1466,
  },
  image5 = {
      src: "images/image5.jpg",
      alt: "Fifth image",
      w: 1504,
      h: 1504,
  },
  image6 = {
      src: "section_bonus/Backpack/backpack.jpg",
      alt: "Sixth image",
      w: 3416,
      h: 2744,
  },
  image7 = {
      src: "section_design/black_dada/black_dada_poster_mockup.jpg",
      alt: "7th image",
      w: 300,
      h: 400,
  },
  image8 = {
      src: "images/image8.jpg",
      alt: "8th image",
      w: 400,
      h: 300,
  },
  image9 = {
      src: "images/image9.jpg",
      alt: "9th image",
      w: 500,
      h: 500,
  },
  image10 = {
      src: "images/image10.jpg",
      alt: "10th image",
      w: 500,
      h: 500,
  },
  image11 = {
      src: "images/image11.jpg",
      alt: "11th image",
      w: 1200,
      h: 800,
  },
  image12 = {
      src: "images/image12.jpg",
      alt: "12th image",
      w: 1200,
      h: 800,
  },
];

// Declare initial global variables
let columnHeights; 
let columnStrings;

// Function to set the number of columns based on screen size
function updateNumOfColumns() {
  if (window.innerWidth < 600) {
      columnHeights = Array(1).fill(0);
      columnStrings = Array(1).fill("");
  }
  else if (window.innerWidth < 1200) {
      columnHeights = Array(3).fill(0);
      columnStrings = Array(3).fill("");
  }
  else {
      columnHeights = Array(4).fill(0);
      columnStrings = Array(4).fill("");
  }
  setGallery();
}

// Add each image to the column with the shortest height
function addImagesToColumns(img) {
  let shortestColumn = columnHeights.indexOf(Math.min(...columnHeights));
  let imageHeight = (img.h / img.w) * 100;

  columnStrings[shortestColumn] += '<img src="' + img.src + '" alt="' + img.alt + '" title="' + img.alt + '" />';
  columnHeights[shortestColumn] += imageHeight;
}

// Combine the column html code and insert into DOM
function setGallery() {
  images.forEach(addImagesToColumns);
  let galleryHTML = "";
  for (var i = 0; i < columnStrings.length; i++) {
      galleryHTML += '<div>' + columnStrings[i] + '</div>';
  }

  document.getElementById("gallery").innerHTML = galleryHTML;
}

// Initial set up of columns on page load
updateNumOfColumns();

// Add event listener for window resize
window.addEventListener('resize', updateNumOfColumns);
