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