gsap.to("#green", {
    duration: 3,
    scrollTrigger: {
        trigger:"#green",
        start: "top 60%",
        end: "bottom 60%",
        /* markers: {
            startColor: "purple",
            endColor: "blue", 
        }, */
        toggleClass: "blue",
    }
})

gsap.to("#pink", {
    duration: 3,
    scrollTrigger: {
        trigger:"#pink",
        start: "center 60%",
        end: "bottom 60%",
        /*markers: {
            startColor: "green",
            endColor: "red", 
        }, */
        toggleClass: "blue",
    }
})

