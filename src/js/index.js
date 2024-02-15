let burger = document.querySelector(".burger")
let menu = document.querySelector(".menu")
burger.onclick = function() {
    menu.classList.toggle ("adaptive_menu")
    burger.classList.toggle ("burger_open")
}