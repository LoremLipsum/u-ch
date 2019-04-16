(function($) {
	'use strict';
	$(function() {

    var btns = $('.js-show-more-button');
    var items = '.js-show-more-item:nth-child(n+6)';

    btns.on('click', function(e){
      e.preventDefault();
      $(this).parent().find(items).toggleClass('active');
    });

	});
})(jQuery);
