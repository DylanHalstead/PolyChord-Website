new Glide('.glide', {
    type: 'carousel',
    perView: 3,
    gap: 30,
    animationDuration: 750,
    breakpoints: {
        2560: {
            perView: 4
        },
        1920: {
            perView: 3
        },
        1024: {
            perView: 2
        },
        768: {
            perView: 1
        }
    }
}).mount();