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






