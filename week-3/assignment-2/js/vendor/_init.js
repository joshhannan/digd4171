jQuery(function($) {

	/*
		Accordion function
	 */
	$('.accordion-widget header').click(function() {
		$('.accordion-widget .item').removeClass('active');
		$(this).parents('.item').addClass( 'active' );
	});

	var header_height = $('header').outerHeight(true);

	$(window).resize(function() {

		header_height = $('header').outerHeight(true);

	});

	$(window).scroll(function() {

		var scrolling = $(window).scrollTop();

		if( scrolling >= header_height ) {
			$('.site-header').addClass('small');
		} else {
			$('.site-header').removeClass('small');
		}

	});
	
});