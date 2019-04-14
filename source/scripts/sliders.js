(function($) {
	'use strict';
	$(function() {

    var sliderMain = $('.js-main-slider');
    var sliderBrends = $('.js-brends-slider');
    var sliderProductLine = $('.js-product-line-slider');

    if(sliderMain) {
      sliderMain.slick({
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
    }

    if(sliderBrends) {
      sliderBrends.slick({
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
    }

    if(sliderProductLine) {
      sliderProductLine.slick({
        arrows: true,
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        prevArrow: '<button class="button-arrow button-arrow--prev" type="button" tabindex="0" aria-lable="Назад"></button>',
        nextArrow: '<button class="button-arrow button-arrow--next" type="button" tabindex="0" aria-lable="Вперёд"></button>',
        responsive: [
          {
            breakpoint: 1020,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 890,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 620,
            settings: {
              slidesToShow: 1,
            }
          },
        ]
      });
    }

	});
})(jQuery);
