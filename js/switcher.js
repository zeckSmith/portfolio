
//---------  Toggle style switcher  --------------
const switcherToggleBox = document.querySelector(".style-switcher")
const switcherToggle = document.querySelector(".style-switcher-toggler")

switcherToggle.addEventListener("click", () =>{
    switcherToggleBox.classList.toggle("open")
})

// ----   hide switcher on scroll

window.addEventListener("scroll", () => {
    if(switcherToggleBox.classList.contains("open"))
    {
        switcherToggleBox.classList.remove("open")

    }
})

// ======== theme colors =========

const alternateStyles = document.querySelectorAll(".alternat-style");

function setActiveStyle(color) {
    alternateStyles.forEach((style) => {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        }
        else{
            style.setAttribute("disabled", "true");
            
        }
    })
}
// ======== theme colors =========

const dayNight = document.querySelector(".day-night")
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon")
    document.body.classList.toggle("dark")
})

window.addEventListener("load", () => {
    if (document.body.classList.contains("dark")) {
        dayNight.querySelector("i").classList.add("fa-sun")
    }
    else{
        dayNight.querySelector("i").classList.add("fa-moon")

    }
})






