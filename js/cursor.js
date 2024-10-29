let cursor = document.getElementById("cursor")
// let nav2 = document.getElementsByClassName("nav-2")[0]
let shortIcon = document.getElementsByClassName("show")[0]
let fullIcon = document.querySelector(".nav-2 i")
let links = document.getElementsByTagName("a")
let closeBtn = document.getElementsByClassName("close")[0]





this.addEventListener("mousemove", (e)=>{
    let posX = e.clientX;
    let posY = e.clientY;
    // cursor.style.transition = "all 0.5s"
    gsap.to("#cursor", {
        x: posX,
        y: posY,
        duration : 0.15
    })


    
})


function cursorAnim(elem){

    elem.addEventListener("mouseenter", ()=>{
        gsap.to("#cursor", {
            scale: 0,
            duration: 0.15,
        })
    })

    elem.addEventListener("mouseleave", ()=>{
        gsap.to("#cursor", {
            scale : 1, 
            duration : 0.15
        })
    })
}

cursorAnim(shortIcon)
cursorAnim(closeBtn)

for(let i = 0; i<links.length; i++){
    cursorAnim(links[i])
}