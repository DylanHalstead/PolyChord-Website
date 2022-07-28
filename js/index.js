// Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Carousel Code
new Glide('.glide', {
    type: 'carousel',
    perView: 3
}).mount();


// https://usefulangle.com/post/313/css-flex-order-carousel-infinite
const FlexSlider = {
	// total num of items
	num_items: document.querySelectorAll(".slider-item").length,
	// position of current item in view
	current: 1,

	init: function() {
        const items = Array.from(document.querySelectorAll(".slider-item"));

		// set CSS order of each item initially
		items.forEach(function(element, index) {
			element.style.order = index+1;
		});

        let length = items.length;
        let extraDOM = [];

        for( let i = 2; items.length >= i; i++){
            extraDOM.unshift(items.pop());
        }
        console.log(extraDOM)

		this.addEvents();
	},

	addEvents: function() {
        document.querySelector("#prev-button").addEventListener('click', () => {
			this.goBack();
		});

		document.querySelector("#next-button").addEventListener('click', () => {
			this.gotoNext();
		});

		// after each item slides in, update order
		document.querySelector("#slider-container").addEventListener('transitionend', () => {
			this.changeOrder();
		});
	},

	changeOrder: function() {
		this.current += 3;

        if(this.current > this.num_items){
            this.current = this.current%this.num_items
        }

		let order = 1;

		// change order from current position till last
		for(let i=this.current; i<=this.num_items; i++) {
			document.querySelector(".slider-item[data-position='" + i + "']").style.order = order;
			order++;
		}

		// change order from first position till current
		for(let i=1; i<this.current; i++) {
			document.querySelector(".slider-item[data-position='" + i + "']").style.order = order;
			order++;
		}

		// translate back to 0 from -100%
		// we don't need transitionend to fire for this translation, so remove transition CSS
		document.querySelector("#slider-container").classList.remove('slider-container-transition');
		document.querySelector("#slider-container").style.transform = 'translateX(0)';
	},

    goBack: function() {
        // Add items behind
        // 

        document.querySelector("#slider-container").classList.add('slider-container-transition');
		document.querySelector("#slider-container").style.transform = 'translateX(100%)';
    },

	gotoNext: function() {
		// translate from 0 to -100% 
		// we need transitionend to fire for this translation, so add transition CSS
		document.querySelector("#slider-container").classList.add('slider-container-transition');
		document.querySelector("#slider-container").style.transform = 'translateX(-100%)';
	}
};

FlexSlider.init();