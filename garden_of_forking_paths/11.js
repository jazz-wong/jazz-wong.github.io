gsap.to("#gun_1", {
    duration: 3,
    scrollTrigger: {
        trigger:"#gun_1",
        start: "top 5%",
        end: "bottom 50%",
        /*markers: {
            startColor: "purple",
            endColor: "blue", 
        },*/
        toggleClass: "blue",
    }
}) 

gsap.to("#gun_3", {
    duration: 3,
    scrollTrigger: {
        trigger:"#gun_3",
        start: "top 10%",
        end: "center 30%",
        /*markers: {
            startColor: "red",
            endColor: "green", 
        },*/
        toggleClass: "blue",
    }
}) 


