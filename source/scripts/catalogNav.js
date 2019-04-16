'use strict';

(function($) {
	'use strict';
	$(function() {

    var main = $('.page--main')[0];
    var catalog = $('.js-catalog-nav');
    var btnOpen = $('.js-open-catalog-nav');
    var btnClose = $('.js-close-catalog-nav');
    var dialog = $('.js-catalog-nav-dialog');
    var overlay = $('.js-catalog-nav-overlay');
    var lvl1 = $('.js-catalog-nav-lvl-1');
    var lvl2 = $('.js-catalog-nav-lvl-2');
    var lvl3 = $('.js-catalog-nav-lvl-3');
    var links1 = lvl1.find('.js-link-lvl-1');
    var links2 = lvl1.find('.js-link-lvl-2');
    var item = '.catalog-nav__item';
    var el;
    var ESC = 27;
    var WIDTH = 840;

    var toggle = function() {
      if (+$(window).width() < WIDTH) {
        btnOpen.toggleClass('active');
        dialog.toggleClass('active');
        overlay.toggleClass('active');
      } else if (!main && +$(window).width() > WIDTH ) {
        catalog.toggleClass('active');
        overlay.toggleClass('active');
      } else if (main && +$(window).width() > WIDTH && links1.parent(item).hasClass('active')) {
        links1.parent(item).removeClass('active');
        overlay.removeClass('active');
      }
    };

    var close = function() {
      if (+$(window).width() < WIDTH) {
        btnOpen.removeClass('active');
        dialog.removeClass('active');
        overlay.removeClass('active');
      } else if (!main && +$(window).width() > WIDTH ) {
        catalog.removeClass('active');
        overlay.removeClass('active');
      } else if (main && +$(window).width() > WIDTH && links1.parent(item).hasClass('active')) {
        links1.parent(item).removeClass('active');
        overlay.removeClass('active');
      }
    };

    var onToggleClick = function(e) {
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

      if (main && +$(window).width() > WIDTH && links1.parent(item).hasClass('active')) {
        overlay.addClass('active');
      } else if (main && +$(window).width() > WIDTH) {
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
    btnOpen.on('click', onToggleClick);
    btnClose.on('click', onCloseClick);
    overlay.on('click', onCloseClick);
    $(document).on('keyup', onEscKeyup);

	});
})(jQuery);
