gsap.registerPlugin(ScrollTrigger) 

function sectionOneAnimation(){
    var tl = gsap.timeline()

    tl.from("nav h1, nav h4, nav button", {
        y:-30,
        opacity:0,
        delay:1,
        duration:1,
        stagger:0.2
    })
    
    tl.from(".center-part1 h1", {
        x:-300,
        opacity:0,
        duration:0.5,
    })
    
    tl.from(".center-part1 p", {
        x:-200,
        opacity:0,
        duration:0.4,
    })
    
    tl.from(".center-part1 button", {
        opacity:0,
        duration:0.4,
    })
    
    tl.from(".center-part2 img", {
        opacity:0,
        duration:0.5,
        x: 200
    },"-=0.5")
    
    tl.from(".section1bottom img", {
        opacity:0,
        y: 30,
        stagger:0.15,
        duration:0.6,
    })
}

sectionOneAnimation()

// gsap.from(".services h3", {
//     y: 150,
//     // opacity:0,
//     duration:0.5,
//     scrollTrigger: {
//         trigger:".section2",
//         scroller:"body",
//         start:"top 10%",
//         markers:true,
//     }
// })

// gsap.from(".elem", {
//     x: -150,
//     // opacity:0,
//     // duration:0.7,
//     // delay: 1,    
//     scrollTrigger: {
//         trigger: '.section1',
//         // pin: true, // pin the trigger element while active
//         start: 'top 75%',
//         markers: true
//     }
// })

let currentScroll = 0;
let isScrollingDown = true;
let arrows = document.querySelectorAll(".arrow");

let tween = gsap.to(".marquee_part", {
    xPercent: -100,
    repeat: -1,
    duration: 5, 
    ease: "linear"
}).totalProgress(0.5);


gsap.set("marquee_inner", {xPercent: -50});

window.addEventListener("scroll", function() {

    if(this.window.pageYOffset > currentScroll){
        isScrollingDown = true;
    } else {
        isScrollingDown = false;
    }

    gsap.to(tween, {
        timeScale: isScrollingDown ? 1 : -1,    
    });

    arrows.forEach((arrow) => {
        if(isScrollingDown) {
            arrow.classList.remove("active");
        } else {
            arrow.classList.add("active");
        }
    });

    currentScroll = window.pageYOffset;
})




