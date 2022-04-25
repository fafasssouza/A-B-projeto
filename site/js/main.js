function method_carousel() {
        function mediaQuerry_in_carousel($carouselQuerry) {
        if($carouselQuerry.matches) {
            //Carousel slider mobile
            function animation_Carousel_mobile() {
                const carouselSlide = document.getElementById("box_animationID")
                const carouselImage = document.querySelectorAll("#box_animationID img")
                let counter = 0
        
                function carousel() {
                    counter++
                    
                    const size = carouselImage[0].clientWidth
        
                    if(counter > carouselImage.length-2) {
                        counter = 0
                    }
        
                    carouselSlide.style.transform = `translateX(${(-size * counter)+1}px)` 
                }
        
                setInterval(carousel, 1300)
            }
        
            animation_Carousel_mobile()
        }else {
            //Carousel slider desktop
            function animation_Carousel_desktop() {
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

            animation_Carousel_desktop()
        }
    
    }
    const mMCSS = window.matchMedia("(max-width: 767px)") 

    mediaQuerry_in_carousel(mMCSS)

    mMCSS.addtListener(mediaQuerry_in_carousel)

}
method_carousel()