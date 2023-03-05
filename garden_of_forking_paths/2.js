
gsap.registerPlugin(ScrollTrigger);
gsap.to("#eyeballs1", {
    duration: 3,
    scrollTrigger: {
        trigger:"#eyeballs1",
        start: "top 5vh",
        end: "bottom 600vh",
        /*markers: {
            startColor: "purple",
            endColor: "blue", 
        }, */
        toggleClass: "blue",
    }
})

