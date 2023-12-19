var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")

document.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x - 12 +"px"
    crsr.style.top = dets.y - 12 +"px"
    blur.style.left = dets.x - 200 +"px"
    blur.style.top = dets.y - 200 +"px"
})

var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        crsr.style.scale = 3,
        crsr.style.border = ".1px solid #fff",
        crsr.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave", function(){
        crsr.style.scale = 1,
        crsr.style.border = "0px solid #95c11e",
        crsr.style.backgroundColor = "95c11e"
    })
})


// mouse,dets means the movement of the mouse in x or y direcrion dets.x gives the value for mouse movement through x-axis and dets.y for y-axis

gsap.to("#nav", {
    backgroundColor: "black",
    duration : 1,
    height: "10vh",
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1.1
    }
})

gsap.to(".main",{
    backgroundColor: "black",
    scrollTrigger: {
        trigger: ".main",
        scroller: "body",
        // markers: true
        start: "top -10%",
        end: "top -100%",
        scrub: 3
    }
})

gsap.from("#about-us img, .about-us-text-content", {
    y: 50,
    opacity: 0,
    duration: 1,
    // stagger: 0.4,
    scrollTrigger: {
        trigger: "#about-us",
        scroller: "body",
        // markers: true
        start: "top 70%",
        end: "top 55%",
        scrub: 1
    }
})
gsap.from(".card", {
    scale: 0.8,
    // y: 50,
    opacity: 0,
    duration: 1,
    // stagger: 0.4,
    scrollTrigger: {
        trigger: ".card",
        scroller: "body",
        // markers: true
        start: "top 70%",
        end: "top 65%",
        scrub: 2
    }
})

gsap.from("#up", {
    y: -70,
    x: -70,
    scale : 1.4,
    scrollTrigger: {
        trigger: "#up",
        scroller: "body",
        start: "top 55%",
        end: "top 45%",
        scrub: 4
    }
})
gsap.from("#down", {
    y: 70,
    x: 70,
    scale : 1.4,
    scrollTrigger: {
        trigger: "#up",
        scroller: "body",
        start: "top 55%",
        end: "top 45%",
        scrub: 4
    }
})
gsap.from("#page4 h1", {
    y: 70,
    // scale : 1.4,
    scrollTrigger: {
        trigger: "#page4 h1",
        scroller: "body",
        start: "top 75%",
        end: "top 70%",
        scrub: 3 
    }
})