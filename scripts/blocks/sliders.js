(function($) {
	'use strict';
	$(function() {

    var sliderMain = $('.js-main-slider');
    var sliderBrends = $('.js-brends-slider');
    var sliderProductLine = $('.js-product-line-slider');
    var sliderProductGalleryPreview = $('.js-product-gallery-preview');
    var sliderProductGallery = $('.js-product-gallery');

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
        dotsClass: 'main-slider__dots',
        prevArrow: '<button class="main-slider__button main-slider__button--prev" type="button" tabindex="0" aria-lable="Назад"></button>',
        nextArrow: '<button class="main-slider__button main-slider__button--next" type="button" tabindex="0" aria-lable="Вперёд"></button>',
      });
    };

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
        prevArrow: '<button class="arrow arrow--left" type="button" tabindex="0" aria-lable="Назад"></button>',
        nextArrow: '<button class="arrow arrow--right" type="button" tabindex="0" aria-lable="Вперёд"></button>',
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
    };

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
        prevArrow: '<button class="arrow arrow--left" type="button" tabindex="0" title="Назад"></button>',
        nextArrow: '<button class="arrow arrow--right" type="button" tabindex="0" title="Вперёд"></button>',
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
    };

    if(sliderProductGalleryPreview) {
      sliderProductGalleryPreview.slick({
        arrows: true,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        swipeToSlide: true,
        vertical: true,
        adaptiveHeight: true,
        asNavFor: sliderProductGallery,
        focusOnSelect: true,
        prevArrow: '<button class="arrow arrow--left" type="button" tabindex="0" title="Назад"></button>',
        nextArrow: '<button class="arrow arrow--right" type="button" tabindex="0" title="Вперёд"></button>',
        responsive: [
          {
            breakpoint: 520,
            settings: {
              vertical: false,
              adaptiveHeight: false,
            }
          },
        ]
      });
    };
    if(sliderProductGallery) {
      sliderProductGallery.slick({
        arrows: false,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        asNavFor: sliderProductGalleryPreview,
      });
    };

	});
})(jQuery);
