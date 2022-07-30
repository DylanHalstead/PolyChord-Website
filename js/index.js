// Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navDropdowns = document.querySelectorAll('.nav-item-dropdown')
navDropdowns.forEach(element => {
    element.addEventListener('click', () => {
        element.classList.toggle('active')
    });
});

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Carousel Code
new Glide('.glide', {
    type: 'carousel',
    perView: 3,
    gap: 30,
    animationDuration: 750,
    breakpoints: {
        1024: {
            perView: 2
        },
        768: {
            perView: 1
        }
    }
}).mount();