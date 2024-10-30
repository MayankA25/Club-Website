let string1 = document.getElementsByClassName("string-1")[0]
let string2 = document.getElementsByClassName("string-2")[0]

let path1 = "M 0 80 Q 475 80 950 80"
let path2 = "M 0 80 Q 475 80 950 80"
string1.addEventListener("mousemove", (e)=>{
    let posX = e.clientX;
    let posY = e.clientY;

    console.log(posX, posY)


    gsap.to(".string-1 svg path", {
        duration : 0.20,
        attr:{ d:`M 0 80 Q ${e.x} ${-(675-e.y)} 950 80` },
    })

})
string2.addEventListener("mousemove", (e)=>{
    let posX = e.clientX;
    let posY = e.clientY;

    console.log(posX, posY)


    gsap.to(".string-2 svg path", {
        duration : 0.20,
        attr:{ d:`M 0 80 Q ${-(950-e.x)} ${-(675-e.y)} 950 80` },
    })

})


string1.addEventListener("mouseleave", ()=>{
    gsap.to(".string-1 svg path", {
        duration: 0.25,
        attr: { d:path1 },
        ease: "elastic.out(1.75, 0.2)"
    })
})
string2.addEventListener("mouseleave", ()=>{
    gsap.to(".string-2 svg path", {
        duration: 0.25,
        attr: { d:path2 },
        ease: "elastic.out(1.75, 0.2)"
    })
})