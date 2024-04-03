console.log("sopas");

let colorGame = document.querySelector(".colorGame")

let toDoList = document.querySelector(".toDoList")

let weatherChanel = document.querySelector(".weatherChanel")

const navbar = document.getElementById("navbar");

let prevScrollPos = window.pageYOffset;

window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollPos < currentScrollPos) { //agamos hacia abajo
        navbar.style.top = `-${navbar.offsetHeight}px`;
    } else { //agamos hacia arriba
        navbar.style.top = "0";
        navbar.style.transition = ".2s";
    }
    prevScrollPos = currentScrollPos;
}


colorGame.addEventListener("mouseover", function () {
    toDoList.classList.add("blur")
    weatherChanel.classList.add("blur")
})

colorGame.addEventListener("mouseout", function () {
    toDoList.classList.remove("blur")
    weatherChanel.classList.remove("blur")
})



toDoList.addEventListener("mouseover", function () {
    colorGame.classList.add("blur")
    weatherChanel.classList.add("blur")
})
toDoList.addEventListener("mouseout", function () {
    colorGame.classList.remove("blur")
    weatherChanel.classList.remove("blur")
})

weatherChanel.addEventListener("mouseover", function () {
    toDoList.classList.add("blur")
    colorGame.classList.add("blur")
})
weatherChanel.addEventListener("mouseout", function () {
    toDoList.classList.remove("blur")
    colorGame.classList.remove("blur")
})