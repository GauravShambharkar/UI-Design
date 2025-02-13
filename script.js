

const follower = document.querySelector("#cursor")
const body = document.querySelector("#body")

body.addEventListener("mousemove", function(location){

    gsap.to(follower,{
        x:location.x,
        y:location.y,
        duration: 2,
        ease: "power4.out", 
        
    })
   
})