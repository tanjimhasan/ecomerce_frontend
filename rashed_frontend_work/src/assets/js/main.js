$(document).ready(function($){
    
    $(".hero-slider-container").owlCarousel({
        items: 1,
        autoplay: true,
        autoplayTimeout: 7000,
        loop: true,
        mouseDrag: true,
        dots: true,
        nav: true,
        navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
        responsiveClass: true,
        responsive: {
        	0: {
        		items: 1,
        		nav: false,
        		autoplay: true,
        		autoplayTimeout: 5000,
        		mouseDrag: true,
        		dots: false
        	},

        	767: {
        		items: 1,
        		nav: false,
        		mouseDrag: true
        	},

        	1000: {
        		items: 1,
        		nav: false
        	},

        	1200: {
        		nav: true
        	}
        }
    });

    $(".brand-logo-container").owlCarousel({
        items: 6,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 3000,
        loop: true,
        mouseDrag: true,
        dots: false,
        nav: false,
        responsiveClass: true,
        responsive: {
        	0: { 
        		items: 2,
        		nav: false,
        		autoplay: true,
        		autoplayTimeout: 5000,
        		mouseDrag: true,
        		dots: false
        	},

        	767: {
        		items: 4,
        		nav: false,
        		mouseDrag: true
        	},

        	1000: {
        		items: 4,
        		nav: false
        	},

        	1200: {
        		nav: false
        	}
        }
    });


    

});


$(".product-slider-container").owlCarousel({
	items: 4,
	margin: 30,
	autoplay: false,
	autoplayTimeout: 3000,
	loop: true,
	mouseDrag: true,
	dots: false,
	nav: true,
	navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
	responsiveClass: true,
	responsive: {
		0: { 
			items: 1,
			nav: true,
			autoplay: true,
			autoplayTimeout: 5000,
			mouseDrag: true,
			dots: false
		},

		767: {
			items: 4,
			nav: false,
			mouseDrag: true
		},

		1000: {
			items: 4,
			nav: true
		},

		1200: {
			nav: true
		}
	}
});

jQuery(document).ready(function(){

    var navOffset = jQuery(".main-navigation").offset().top;

    jQuery(window).scroll(function(){

        var scrollpos = jQuery(window).scrollTop();

        if (scrollpos >= navOffset) {
            jQuery(".sticky").addClass("is-sticky");
        }else{
            jQuery(".sticky").removeClass("is-sticky");
        }

    });
});