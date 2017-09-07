(function($) {
	$.fn.overlay_it = function( options ) {
		var settings = $.extend({
			html: '<h1>Testing</h1>',
			close_html: '<span>Close</span>'
		}, options );
		$(this).each(function() {
			if( !$('.ip-overlay-it-container').length ) {
				$(this).append('<div class="ip-overlay-it-container"><div class="ip-overlay-it-box">'+settings.html+'<div class="close">'+settings.close_html+'</div></div></div>');
			}
			$('.ip-overlay-it-box .close').click(function() {
				$('.ip-overlay-it-container').remove();
			});
			$('.ip-overlay-it-container .ip-overlay-it-box').click(function(e) {
				e.stopPropagation();
			});
			$('.ip-overlay-it-container').click(function() {
				$('.ip-overlay-it-container').remove();
			});
		});
		return this;
	}; //  END OVERLAY_IT FUNCTION
}(jQuery));