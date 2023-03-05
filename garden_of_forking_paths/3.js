gsap.registerPlugin(ScrollTrigger);
gsap.to("#one", {
    duration: 3,
    scrollTrigger: {
        trigger:"#one",
        start: "top 20%",
        end: "bottom 60%",
        /*markers: {
            startColor: "purple",
            endColor: "blue", 
        }, */
        toggleClass: "blue", 
    }
})