jQuery(function($) {

	$('.tab').click(function() {

		/*
		Change Tab Content
		 */
		var id = $(this).data('id');
		$('.tab-content').removeClass('open');
		$('#'+id).addClass('open');

		/*
		Change Open class on tab
		 */
		$('.tab').removeClass('open');
		$(this).addClass('open');


	});


});