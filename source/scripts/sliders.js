(function($) {
	'use strict';
	$(function() {

    $('.js-slider').slick({
      arrows: true,
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipeToSlide: true,
      autoplay: true,
			autoplaySpeed: 5000,
      infinite: true,
      dotsClass: 'slick-dots',
      prevArrow: '<button class="slider-button slider-button--prev" type="button" tabindex="0" aria-lable="Назад"></button>',
      nextArrow: '<button class="slider-button slider-button--next" type="button" tabindex="0" aria-lable="Вперёд"></button>',
    });

    $('.js-brends').slick({
      arrows: true,
      dots: false,
      slidesToShow: 5,
      slidesToScroll: 1,
      swipeToSlide: true,
      autoplay: true,
      autoplaySpeed: 5000,
      infinite: true,
      prevArrow: '<button class="brends__button brends__button--prev" type="button" tabindex="0" aria-lable="Назад"></button>',
      nextArrow: '<button class="brends__button brends__button--next" type="button" tabindex="0" aria-lable="Вперёд"></button>',
      responsive: [
        {
          breakpoint: 1020,
          settings: {
            slidesToShow: 4,
          }
        },
        {
          breakpoint: 890,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 4,
          }
        },
        {
          breakpoint: 620,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 520,
          settings: {
            slidesToShow: 1,
          }
        },
      ]
    });

	});
})(jQuery);
