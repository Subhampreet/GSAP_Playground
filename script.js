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

