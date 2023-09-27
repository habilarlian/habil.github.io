let menu = document.getElementById("menu")
let close =document.querySelector(".bars-close")    
let bars = document.getElementById("bars")
function muncul (){
    menu.style.left = "40px"
    bars.style.display = "none"
    close.style.display = "inline"
}
function tutup (){
    menu.style.left = "-200px"
    bars.style.display = "inline"
    close.style.display = "none"
}
    const navbar = document.querySelector(".navbar")
    window.addEventListener("scroll",() =>{
        const positionwindow = window.scrollY >120;
        navbar.classList.toggle("scrolling-active",positionwindow)
    })

    // swiper effect start
const swiper = new Swiper('.swiper', {
    autoplay :{
        delay :3000,
    },
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable :true,
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

   

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});
// swipper effect end
