/*==================== SHOW MENU ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* MENU HIDDEN */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/* REMOVE MENU MOBILE */
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

//Carousel slider
function animation_Carousel() {
    const carouselSlide = document.getElementById("teste")
    const carouselImage = document.querySelectorAll("#teste img")
    let counter = 0

    function carousel() {
     counter++
        counter++
        const size = carouselImage[0].clientWidth

        if(counter > carouselImage.length-2) {
            counter = 0
        }

        carouselSlide.style.transform = `translateX(${(-size * counter)+1}px)` 
    }

    setInterval(carousel, 1300)
}

animation_Carousel()