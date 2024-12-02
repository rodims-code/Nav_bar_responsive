const menuHamburger = document.querySelector(".menu")
const navLinks = document.querySelector(".nav_link")

menuHamburger.addEventListener('click',()=>{
navLinks.classList.toggle('mobile-menu')
})