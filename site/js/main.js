//Carousel slider
function animation_Carousel() {
    const carouselSlide = document.getElementById("box_animationID")
    const carouselImage = document.querySelectorAll("#box_animationID img")
    let counter = 0

    function carousel() {
        counter++
        
        const size = carouselImage[0].clientWidth

        if(counter > carouselImage.length-4) {
            counter = 0
        }

        carouselSlide.style.transform = `translateX(${(-size * counter)+1}px)` 
    }

    setInterval(carousel, 1300)
}

animation_Carousel()