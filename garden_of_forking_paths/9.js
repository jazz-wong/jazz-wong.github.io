gsap.to("#beatles_1", {
    duration: 3,
    scrollTrigger: {
        trigger:"#beatles_1",
        start: "top 60%",
        end: "bottom 60%",
        /*markers: {
            startColor: "purple",
            endColor: "blue", 
        }, */
        toggleClass: "blue",
    }
})
