const toggleButton = document.getElementById("toggle")
const navDisplay = document.getElementsByTagName("nav")
// const mainNav = document.querySelector("#navigation-bar")
const body = document.getElementsByTagName("body")


const navClose = document.getElementById("close")

if (screen.width <= 768) {
     toggleButton.addEventListener("click", () => {
     getMenu()
     })

     navClose.addEventListener("click", function() {
          closeMenu()
     })

     // body.addEventListener("click", () => {
     //      bodyClose()
     // })
}


function getMenu() {
     navDisplay[0].className = "active"
}


function closeMenu () {
     navDisplay[0].className = ""
}

// function bodyClose() {
//      navDisplay[0].className = ""
// }