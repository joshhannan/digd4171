jQuery(function($) {

	/*
		Accordion function
	 */
	$('.accordion-widget header').click(function() {
		$('.accordion-widget .item').removeClass('active');
		$(this).parents('.item').addClass( 'active' );
	});

	var header_height = $('header').outerHeight(true);
	var window_width = $(window).outerWidth(true); 
	
	console.log( 'Header Height is: '+header_height );

	$(window).resize(function() {

		window_width = $(window).outerWidth(true); 
		header_height = $('header').outerHeight(true);
		console.log( window_width );
	});

	$(window).scroll(function() {

		var scrolling = $(window).scrollTop();
		console.log( 'Scrolltop is: '+scrolling+'px' );

		if( scrolling >= header_height ) {
			$('.site-header').addClass('small');
		} else {
			$('.site-header').removeClass('small');
		}

	});

	$('.banner').owlCarousel({
		items: 4,
		margin: 15,
		autoplayTimeout: 7000,
		autoplay: true,
		loop: true,
		responsive : {
			0 : {
				items: 1,
				margin: 10,
				dots: true,
				nav: false
			},
			480 : {
				items: 2,
				margin: 10,
				dots: true,
				nav: false

			},
			769 : {
				items: 3,
				margin: 15,
				dots: true,
				nav: false
			},
			1000 : {
				items: 4,
				margin: 15,
				dots: true,
				nav: false
			},
			1340 : {
				items: 4,
				margin: 15,
				dots: false,
				nav: true,
				navText: ['', '']
			}
		}
	});



});