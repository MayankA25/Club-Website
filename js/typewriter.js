let text = document.getElementsByClassName("text")[0]
let blink = document.getElementsByClassName("blink")[0]
let texts = ["Webinars","Workshops", "Projects", "Sessions", "Hackathons", "Communities", "Sessions"]

let blinkFunc = ()=>{
    // blinking = setInterval(()=>{
    //     blink.classList.toggle("opacity-0")
    // }, 350)

    blink.style.animationName ="blinking";
    blink.style.animationDuration = "0.7s"
    blink.style.animationTimingFunction = "ease-in-out";
    blink.style.animationIterationCount = "infinite"

}

// Removing Text

let removingTextFunc = ()=>{
    // clearInterval(blinking)
    blink.style.animation = "none"
    let removingCounter = text.innerText.length-1
    let removingTextInt = setInterval(()=>{
        text.innerText = text.innerText.slice(0, removingCounter-1)
        if(removingCounter == 0){
            clearInterval(removingTextInt)
            removedElement = texts.shift()
            texts.push(removedElement)
            setTimeout(()=>{

                addingTextFunc()
            }, 20)
        }
        removingCounter -= 1

    },10)


    
}


// Adding text 

addingTextFunc = ()=>{
    let addingCounter = 0
    let wordCounter = 0
    
    let addingTextInt = setInterval(()=>{
        // if(texts[wordCounter].charAt(addingCounter) === " "){
        //     text.innerText += "&nbsp;"
        // }
        // console.log(texts[wordCounter].charAt(addingCounter))
        text.innerHTML = text.innerHTML + texts[wordCounter].charAt(addingCounter)
        addingCounter += 1
        if(text.innerText == texts[wordCounter]){
            clearInterval(addingTextInt)
            blinkFunc()
            setTimeout(()=>{
                blink.classList.remove("display-none")
                removingTextFunc()
            }, 2000)
        }
    }, 50)
}

setTimeout(()=>{

    addingTextFunc()
}, 3500)