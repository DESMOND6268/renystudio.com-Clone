gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,

    // for tablet smooth
    tablet: { smooth: true },

    // for mobile
    smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
        return arguments.length
            ? locoScroll.scrollTo(value, 0, 0)
            : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight
        };
    }
});
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();


function buttonEffect() {
    var box = document.querySelector(".navbar-part .part1")
    var i = document.querySelector(".navbar-part .part1 i")
    var h2 = document.querySelector(".navbar-part .part1 h2")
    box.addEventListener("mouseenter", function () {
        i.style.color = "#20201F"
        h2.style.color = "#20201F"
    })
    box.addEventListener("mouseleave", function () {
        i.style.color = " #F9EEDB"
        h2.style.color = "#F9EEDB"
    })
}
buttonEffect()

gsap.to(".page1 img", {
    scale: 1.1,
    duration: 10,
})
function scrollEffect() {
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".page1",
            scroller: ".main",
            start: "top -10%",
            scrub: true,
        }
    })
    tl.to(".page1 img", {
        top: -60,
    })
}
scrollEffect()

Shery.mouseFollower({
    skew: true,
})
Shery.makeMagnet(".navbar h1")

function mouseFun() {
    var msfollower = document.querySelector(".mousefollower")
    // var navPart=document.querySelector(".navbar-part")
    var h1 = document.querySelector(".page1 h1")
    // navPart.addEventListener("mouseenter",function(){
    //    msfollower.style.scale=4
    // })
    // navPart.addEventListener("mouseleave",function(){
    //   msfollower.style.scale=1
    // })
    h1.addEventListener("mouseenter", function () {
        msfollower.style.scale = 5
    })
    h1.addEventListener("mouseleave", function () {
        msfollower.style.scale = 1
    })
}
mouseFun()

function navFun() {
    var navBar = document.querySelector(".navbar")
    var i = document.querySelector(".navbar-part h4 i")
    setTimeout(function () {
        navBar.style.backgroundColor = "#20201F"
        // i.style.opacity=0
    }, 10000)
}
navFun()



// window.onscroll=function(){
//     scrollFunction();
// }
// function scrollFunction(){
//     if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
//         document.getElementById("navbar").style.backgroundColor = "#20201F"
//     }
//     else{
//         document.getElementById("navbar").style.backgroundColor = "transparent"
//     }
// }


// page2 

function scrollEffect2() {
    var tl = gsap.timeline({
        scrollTrigger: {
            scroller: ".main",
            trigger: ".page2",
            start: "top 10%",
            scrub: 1,
        }
    })

    tl.to(".page2 img", {
        y: 50,
    })
}
scrollEffect2()

function showing1() {
    var left = document.querySelector(".page2 .left")
    var middle = document.querySelector(".page2 .middle")
    var right = document.querySelector(".page2 .right")
    var leftPart = document.querySelector(".page2 .left-part")
    var middlePart = document.querySelector(".page2 .middle-part")
    var rightPart = document.querySelector(".page2 .right-part")
    var p1 = document.querySelector(".page2 .left p")
    var p2 = document.querySelector(".page2 .middle p")
    var p3 = document.querySelector(".page2 .right p")

    left.addEventListener("mouseenter", function () {
        leftPart.style.top = "52%"
        p1.style.opacity = 1
    })
    left.addEventListener("mouseleave", function () {
        leftPart.style.top = "75%"
        p1.style.opacity = 0
    })
    middle.addEventListener("mouseenter", function () {
        middlePart.style.top = "20%"
        p2.style.opacity = 1
    })
    middle.addEventListener("mouseleave", function () {
        middlePart.style.top = "75%"
        p2.style.opacity = 0
    })
    right.addEventListener("mouseenter", function () {
        rightPart.style.top = "30%"
        p3.style.opacity = 1
    })
    right.addEventListener("mouseleave", function () {
        rightPart.style.top = "75%"
        p3.style.opacity = 0
    })

}
showing1()

// page3 
function scrollEffect3() {
    var tl = gsap.timeline({
        scrollTrigger: {
            scroller: ".main",
            trigger: ".page3",
            start: "top 10%",
            scrub: 1,
        }
    })

    tl.to(".page3 img", {
        y: 50,
    })
}
scrollEffect3()

function showing2() {
    var left = document.querySelector(".page3 .left")
    var middle = document.querySelector(".page3 .middle")
    var right = document.querySelector(".page3 .right")
    var leftPart = document.querySelector(".page3 .left-part")
    var middlePart = document.querySelector(".page3 .middle-part")
    var rightPart = document.querySelector(".page3 .right-part")
    var p1 = document.querySelector(".page3 .left p")
    var p2 = document.querySelector(".page3 .middle p")
    var p3 = document.querySelector(".page3 .right p")

    left.addEventListener("mouseenter", function () {
        leftPart.style.top = "20%"
        p1.style.opacity = 1
    })
    left.addEventListener("mouseleave", function () {
        leftPart.style.top = "75%"
        p1.style.opacity = 0
    })
    middle.addEventListener("mouseenter", function () {
        middlePart.style.top = "15%"
        p2.style.opacity = 1
    })
    middle.addEventListener("mouseleave", function () {
        middlePart.style.top = "75%"
        p2.style.opacity = 0
    })
    right.addEventListener("mouseenter", function () {
        rightPart.style.top = "25%"
        p3.style.opacity = 1
    })
    right.addEventListener("mouseleave", function () {
        rightPart.style.top = "75%"
        p3.style.opacity = 0
    })

}
showing2()


//page4
function textEffect() {
    var h1 = document.querySelector(".page4 h1").textContent
    // console.log(h1)
    var splittedText = h1.split("")
    // console.log(splittedText)

    var clutter = ""
    splittedText.forEach(function (elem) {
        clutter += `<span>${elem}</span>`
    })
    // console.log(clutter)
    document.querySelector(".page4 h1").innerHTML = clutter

    gsap.from("h1 span", {
        color: "rgb(74, 74, 74)",
        stagger: 0.1,
        duration: 1.5,
        scrollTrigger: {
            scroller: ".main",
            trigger: ".page4",
            start: "top 10%",
            scrub: 2,
            pin: true,
        }
    })
}
textEffect()

//page5-effects
//scale-effect
function scaleFunction() {
    var topPart = document.querySelectorAll(".page5 .topPart")
    var bottomPart = document.querySelectorAll(".page5 .bottomPart")
    topPart.forEach(function (elem) {
        var image = elem.childNodes[1]
        elem.addEventListener("mouseenter", function () {
            image.style.scale = 1.2
        })
        elem.addEventListener("mouseleave", function () {
            image.style.scale = 1
        })
    })
    bottomPart.forEach(function (elem) {
        var image = elem.childNodes[1]
        elem.addEventListener("mouseenter", function () {
            image.style.scale = 1.2
        })
        elem.addEventListener("mouseleave", function () {
            image.style.scale = 1
        })
    })
}
scaleFunction()

function mouseFunction() {
    var circle = document.querySelector(".page5 .circle");

    gsap.set(circle, {
        opacity: 0,
        scale: 0
    });

    var page5 = document.querySelector(".page5");

    page5.addEventListener("mousemove", function (event) {
        var rect = page5.getBoundingClientRect();
        var mouseX = event.clientX - rect.left;
        var mouseY = event.clientY - rect.top;

        gsap.to(circle, {
            x: mouseX,
            y: mouseY,
            duration: 0.1,
            ease: "none"
        });
    });

    var imgs = document.querySelectorAll(".page5 img");

    imgs.forEach(function (img) {
        img.addEventListener("mouseenter", function () {
            gsap.to(circle, {
                opacity: 1,
                scale: 1
            });
        });

        img.addEventListener("mouseleave", function () {
            gsap.to(circle, {
                opacity: 0,
                scale: 0
            });
        });
    });
}
mouseFunction();


//page7-parallex-effect
function scrollEffect4() {
    var tl = gsap.timeline({
        scrollTrigger: {
            scroller: ".main",
            trigger: ".page7",
            start: "top 10%",
            scrub: 1,
        }
    })

    tl.to(".page7 img", {
        y: 80,
    })
}
scrollEffect4()

//page9 -parallex effect
function scrollEffect5() {
    var tl = gsap.timeline({
        scrollTrigger: {
            scroller: ".main",
            trigger: ".page9",
            start: "top 10%",
            scrub: 2,
        }
    })
    tl.to(".page9 img", {
        y: 150,
        // duration:3,
    })
}
scrollEffect5()

function buttonEffect2() {
    var button = document.querySelector(".page9 .text button")
    var i = document.querySelector(".page9 .text button i")

    button.addEventListener("mouseenter", function () {
        // i.innerHTML=`<i class="ri-arrow-right-line"></i>`
        i.style.color = "#F9EEDB"
    })
    button.addEventListener("mouseleave", function () {
        // i.innerHTML=`<i class="ri-arrow-right-line"></i>`
        i.style.color = "#20201F"
    })
}
buttonEffect2()

//page11 left-animation
function scaleFunction2() {
    var left = document.querySelector(".page11 .left")
    var image = document.querySelector(".page11 .left img")
    var line = document.querySelector(".page11 .left .left-line")
    var i = document.querySelector(".page11 .left .left-part .part2 i")
    left.addEventListener("mouseenter", function () {
        image.style.scale = 1.2
        line.style.width = "100%"
        i.style.border = "none"
    })
    left.addEventListener("mouseleave", function () {
        image.style.scale = 1
        line.style.width = "0%"
        i.style.border = "1px solid white"
    })
}
scaleFunction2()
//page11 right-animation
function scaleFunction3() {
    var right = document.querySelector(".page11 .right")
    var image = document.querySelector(".page11 .right img")
    var line = document.querySelector(".page11 .right .right-line")
    var i = document.querySelector(".page11 .right .right-part .part2 i")
    right.addEventListener("mouseenter", function () {
        image.style.scale = 1.2
        // image.style.filter='brightness(80%)'
        line.style.width = "100%"
        i.style.border = "none"
    })
    right.addEventListener("mouseleave", function () {
        image.style.scale = 1
        line.style.width = "0%"
        i.style.border = "1px solid white"
    })
}
scaleFunction3()

//page12 top
function mouseFunction2() {
    gsap.from(".page12 .top h1", {
        y: 50,
        opacity: 0,
        scrollTrigger: {
            scroller: ".main",
            trigger: ".page12",
            start: "top 50%"
        }
    })


    var top = document.querySelector(".page12 .top")
    var mouse = document.querySelector(".page12 .mouse")

    top.addEventListener("mouseenter", function () {
        mouse.style.opacity = 1
        mouse.style.transform = 'translate(-50%,-50%) scale(1)'
    })
    top.addEventListener("mouseleave", function () {
        mouse.style.opacity = 0
        mouse.style.transform = 'translate(-50%,-50%) scale(0)'
    })

    top.addEventListener("mousemove", function (dets) {
        mouse.style.left = (dets.x - top.getBoundingClientRect().x) + "px"
        mouse.style.top = (dets.y - top.getBoundingClientRect().y) + "px"

    })
}
mouseFunction2()

//page12 bottom
function scaleFunction4() {

    var bottom = document.querySelectorAll(".page12 .bottom .bottom-part")
    bottom.forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {
            elem.childNodes[5].style.width = "100%"
        })
        elem.addEventListener("mouseleave", function () {
            elem.childNodes[5].style.width = "0%"
        })
    })
}
scaleFunction4()