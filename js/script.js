let preloader = document.getElementsByClassName("preloader")[0]
let body = document.getElementsByTagName("body")[0]
let video = document.getElementsByClassName("video")[0]
let main = document.getElementsByTagName("main")[0]
let stringElem = document.querySelector("#string")



function removePreloader(){
    gsap.to(".box", {
        width: "0%", 
        duration: 1.5,
        onComplete:()=>{
            preloader.style.display = "none"
        }
    })
}

function showText(){
    // gsap.fromTo("header", {
    //     opacity: 0,
    //     y: "-100%"
    // }, {
    //     opacity: 1,
    //     y: 0,
    //     duration: 0.5,
    //     onComplete: ()=>{
    //         gsap.fromTo("ul li", {
    //             opacity:0,
    //             y : "-100%"
    //         }, {
    //             opacity: 1,
    //             y: 0,
    //             duration: 0.5,
    //             stagger: 0.5
    //         })

    //     }
    // })
    gsap.fromTo("header", {
        opacity:0,
        y:"-100%"
    }, {
        opacity: 1,
        y:0,
        duration : 0.5,
        onComplete:()=>{
            gsap.fromTo(".short i", {
                opacity : 0,
                x : "100%",
            }, {
                opacity:1,
                x:0,
                duration : 0.5
            })
        }
    })
    gsap.to(".intro h1 span", {
        opacity : 1,
        stagger: 0.15
    })

    gsap.fromTo(".desc h2",{
        y:30,
        opacity:0
    }, {
        opacity: 1,
        y:0,
        stagger: 0.25,
        delay : 0.5
    })

    gsap.fromTo(".container",{
        opacity: 0,
        y: 30
    } ,{
        opacity : 1,
        y:0,
        delay: 1
    })
}

function videoAnimation(){
    gsap.fromTo(".video video", {
        width : "20%"
    }, {
        width: "100%", 
        duration : 0.5,
        attr: { autoplay : "autoplay" },
        scrollTrigger : {
            trigger : "video", 
            // markers : true,
            end:"top 30%",
            scrub : 1
        }
    })
}
function showMainContent(){
    gsap.from(".main-content", {
        scale: "0.2",
        duration: 1.5,
        delay: 4.25,
        onComplete: ()=>{
            body.style.overflowY = "visible"
            video.style.display = "flex"
            stringElem.style.display = "flex"
            showText()
            videoAnimation()
        } 
        })
}


function loadPage(){
    let tl = gsap.timeline()
    tl.from(".progress-bar-1", {
        width : "0%", 
        duration : 1
    })
    tl.from(".preloader .box-1 .text-2", {
        clipPath: "polygon(0 100%, 14% 100%, 27% 100%, 38% 100%, 50% 100%, 63% 100%, 76% 100%, 89% 100%, 100% 100%, 100% 100%, 0 100%)",
        duration : 1,
    })
    tl.from(".preloader .box-2 .text-2", {
        clipPath: "polygon(0 100%, 14% 100%, 27% 100%, 38% 100%, 50% 100%, 63% 100%, 76% 100%, 89% 100%, 100% 100%, 100% 100%, 0 100%)",
        duration : 1,
    })
    tl.from(".progress-bar-2", {
        width : "0%",
        duration : 1,
        onComplete : ()=>{
                removePreloader()
        }
    })
}

let string = ()=>{
    stringElem.addEventListener("mousemove", (e)=>{
        console.log(e)
        gsap.to("#string svg path", {
            duration: 0.1,
            attr: { d:`M 0 150 Q ${e.x} ${-(780-e.y)} 1400 150` }
        })
    })

    stringElem.addEventListener("mouseleave", ()=>{
        gsap.to("#string svg path", {
            duration : 0.5,
            attr : { d:"M 0 150 Q 700 150 1400 150" },
            ease : "elastic.out(1.75, 0.2)"
        })
    })
}



function showHideFullNavbar(){
    let nav2 = document.getElementsByClassName("nav-2")[0]
    let shortIcon = document.querySelector(".short i")
    let fullIcon = document.querySelector(".nav-2 i")


    shortIcon.addEventListener("click", ()=>{
        nav2.style.display = "block"
        gsap.to(".nav-2", {
            width: "100%", 
            duration: 0.5,
            onComplete: ()=>{
                shortIcon.style.display = "none"
                gsap.fromTo(".nav-2 i", {
                    opacity: 0,
                    y: "-100%"
                }, {
                    opacity: 1,
                    y:0,
                    duration: 0.25
                })

                gsap.fromTo(".nav-2 .full h1", {
                    opacity: 0,
                    x: "100%",
                    
                }, {
                    opacity: 1,
                    x: 0,
                    duration: 0.25,
                    stagger: 0.15
                })
            }
        })
    })


    fullIcon.addEventListener("click", ()=>{
        gsap.fromTo(".nav-2 .full h1", {
            opacity: 1,
            x:0
        }, {
            opacity: 0,
            x: "-100%", 
            duration : 0.25,
            stagger: 0.15,
            onComplete : ()=>{
                gsap.fromTo(".nav-2 i", {
                    opacity: 1,
                    y: 0, 
                }, {
                    opacity: 0,
                    y:"-100%",
                    duration: 0.25
                })

                gsap.fromTo(".nav-2", {
                    width:"100%",
                    
                }, {
                    width:"0%", 
                    duration: 0.25,
                    onComplete : ()=>{
                        nav2.style.display = "none"
                        shortIcon.style.display = "block"
                    }
                })
            }
        })
    })




}



window.onload = ()=>{
    body.style.overflowY = "hidden";
    video.style.display = "none"
    stringElem.style.display = "none"
    // window.scrollY(0)
}
window.addEventListener("DOMContentLoaded", ()=>{
    loadPage()
    showMainContent()
    string()
    showHideFullNavbar()
})