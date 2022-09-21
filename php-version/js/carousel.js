new Glide('.glide', {
    type: 'carousel',
    perView: 3,
    gap: 30,
    animationDuration: 750,
    breakpoints: {
        1920: {
            perView: 3
        },
        768: {
            perView: 2
        }
    }
}).mount();