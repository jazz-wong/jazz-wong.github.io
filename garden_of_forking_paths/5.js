gsap.to("#pool_1", {
    duration: 3,
    scrollTrigger: {
        trigger:"#pool_1",
        start: "top 70%",
        end: "bottom 70%",
        /*markers: {
            startColor: "purple",
            endColor: "blue", 
        }, */
        toggleClass: "blue",
    }
})

gsap.to("#pool_2", {
    duration: 3,
    scrollTrigger: {
        trigger:"#pool_2",
        start: "center 70%",
        end: "bottom 70%",
        /* markers: {
            startColor: "red",
            endColor: "green", 
        }, */
        toggleClass: "blue", 
    }
})