'use strict';

(function($) {
	'use strict';
	$(function() {

    var btnOpen = $('.js-open-catalog');
    var btnClose = $('.js-close-catalog');
    var catalog = $('.js-catalog');
    var overlay = $('.js-catalog-overlay')
    var lvl1 = $('.js-catalog-lvl-1');
    var links1 = lvl1.find('.js-link-lvl-1');
    var links2 = lvl1.find('.js-link-lvl-2');
    var item = '.catalog__item';
    var lvl2 = '.js-catalog-lvl-2';
    var lvl3 = '.js-catalog-lvl-3';
    var el;
    var ESC = 27;
    var WIDTH = 768;

    var toggle = function() {
      btnOpen.toggleClass('active');
      catalog.toggleClass('active');
      overlay.toggleClass('active');

      if (+$(window).width() > WIDTH) {
        overlay.toggleClass('active');
        links1.parent(item).toggleClass('active');
        links2.parent(item).toggleClass('active');
      }
    };

    var close = function() {
      btnOpen.removeClass('active');
      catalog.removeClass('active');
      overlay.removeClass('active');

      if (+$(window).width() > WIDTH) {
        overlay.removeClass('active');
        links1.parent(item).removeClass('active');
        links2.parent(item).removeClass('active');
      }
    };

    var onOpenClick = function(e) {
      e.preventDefault();
      toggle();
    };

    var onCloseClick = function(e) {
      e.preventDefault();
      close();
    };

    var onLink1Click = function(e) {
      e.preventDefault();
      el = $(this);
      links1.not(el).parent(item).removeClass('active');
      el.parent(item).toggleClass('active');

      if (+$(window).width() > WIDTH && links1.parent(item).hasClass('active')) {
        overlay.addClass('active');
      } else if (+$(window).width() > WIDTH) {
        overlay.removeClass('active');
      }
    };

    var onLink2Click = function(e) {
      e.preventDefault();
      el = $(this);
      links2.not(el).parent(item).removeClass('active');
      el.parent(item).toggleClass('active');
    };

    var onEscKeyup = function(e) {
      if (e.keyCode === ESC) {
        e.preventDefault();
        close();
      }
    };

    links1.on('click', onLink1Click);
    links2.on('click', onLink2Click);
    btnOpen.on('click', onOpenClick);
    overlay.on('click', onCloseClick);
    btnClose.on('click', onCloseClick);
    $(document).on('keyup', onEscKeyup);

	});
})(jQuery);
