const stars = document.querySelector(".stars")
const moon = document.querySelector(".moon");
const mountains3 = document.querySelector(".mountains3");
const mountains4 = document.querySelector(".mountains4");
const river = document.querySelector(".river");
const boat = document.querySelector(".boat");
const windowText = document.querySelector(".window");
const main = document.querySelector("main");
const scrollToTop = document.querySelector(".scroll__to-top");


window.addEventListener("scroll", () =>{
    let valueScrollY = scrollY
    stars.style.left = valueScrollY + "px";
    moon.style.top = valueScrollY * 5 + "px";
    moon.style.left = valueScrollY * 4 + "px";
    mountains3.style.top = valueScrollY * 2 + "px";
    mountains4.style.top = valueScrollY * 1.5 + "px";
    river.style.top = valueScrollY + "px";
    boat.style.top = valueScrollY + "px";
    boat.style.left = valueScrollY * 3 + "px";
    windowText.style.fontSize = valueScrollY + "px";
    if (scrollY >= 60) {
        windowText.style.fontSize = 60 + "px";
        windowText.style.position = "fixed"
        if (scrollY >= 290) {
            windowText.style.display = "none"
        }else{
            windowText.style.display = "block"
        }
    }
    if (scrollY >= 88) {
        main.style.background = "linear-gradient(#376281, #10001f)"
    }else{
        main.style.background = "transparent"
    }

    if (scrollY <= 150) {
        scrollToTop.style.display = "none"
    }else{
        scrollToTop.style.display = "flex"
    }
})

scrollToTop.addEventListener("click", () =>{
    scrollTo({
        top: 0,
        behavior: "smooth"
    })
})