'use strict';

(function() {
  var btn = document.querySelector('.js-aside-nav-button');

  if(btn) {
    btn.addEventListener('click', function(e) {
      e.currentTarget.parentNode.classList.toggle('active');
    });
  }

})();

'use strict';

(function(){
  var items = document.querySelectorAll('.js-cart-item');

  var prettify = function (num) {
    var n = num.toString();
    return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ');
  }

  if (items) {
    var total = 0;
    var upClass = 'js-counter-up';
    var downClass = 'js-counter-down';

    for (var i = 0; i < items.length; i += 1) {
      var value = items[i].querySelector('.js-price');
      var input = items[i].querySelector('.js-counter-input');
      var sumValue = items[i].querySelector('.js-price-sum');
      var price = parseInt(input.getAttribute('data-price'), 10);
      var count = parseInt(input.getAttribute('data-count'), 10);

      var sum = price * count;
      value.innerHTML = prettify(price);
      sumValue.innerHTML = prettify(sum);
      input.setAttribute('data-price-sum', sum)

      items[i].addEventListener('click', function(e) {
        var input = e.currentTarget.querySelector('.js-counter-input');
        var sumValue = e.currentTarget.querySelector('.js-price-sum');
        var price = parseInt(input.getAttribute('data-price'), 10);
        var count = parseInt(input.getAttribute('data-count'), 10);
        var priceSum = parseInt(input.getAttribute('data-price-sum'), 10);
        var elem = e.target;

        if (elem.classList.contains(downClass)) {
          count = count == 0 ? count : (count - 1);
        } else if (elem.classList.contains(upClass)){
          count += 1;
        }
        var sum = price * count;
        input.value = count;
        sumValue.innerHTML = prettify(sum);
        input.setAttribute('data-count', count);
        input.setAttribute('data-price-sum', sum);
      });
    }
  }
})();

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

'use strict';

(function() {
  var btnHorizontal = document.querySelector('.js-horizontal-direction');
  var btnVertical = document.querySelector('.js-vertical-direction');
  var productList = document.querySelector('.js-product-list');

  if (btnHorizontal) {
    btnHorizontal.addEventListener('click', function(e) {
      e.preventDefault();
      productList.classList.add('horizontal');
    });
  }

  if (btnVertical) {
    btnVertical.addEventListener('click', function(e) {
      e.preventDefault();
      productList.classList.remove('horizontal');
    });
  }

})();

'use strict';

(function() {
  var btns = document.querySelectorAll('.js-aside-dropdown-button');
  var btnsOpen = document.querySelectorAll('.js-aside-dropdown-open-tablet');
  var WIDTH = 840;

  if(btns) {
    for (var i = 0; i < btns.length; i += 1) {
      btns[i].addEventListener('click', function(e) {
        e.preventDefault();
        e.currentTarget.parentNode.classList.toggle('active');
      });
    }
  }

  if (btnsOpen && +$(window).width() > WIDTH) {
    for (var j = 0; j < btnsOpen.length; j += 1) {
      btnsOpen[j].classList.add('active');
    }
  }
})();

'use strict';

(function() {
  var inputsTel = document.querySelectorAll('input[type="tel"]');
  var textareas = document.querySelectorAll('textarea');

  for (var i = 0; i < inputsTel.length; i += 1) {
    var maskTel = new IMask(
      inputsTel[i], {
        mask: '+{7}(000)000-00-00',
      }
    );
  };

  for (var i = 0; i < textareas.length; i += 1) {
    textareas[i].innerHTML = textareas[i].innerHTML.trim();
  }

})();

'use strict';

(function() {
  var btn = document.querySelector('.js-filters-button');
  var content = document.querySelector('.js-filters-content');

  if(btn) {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      e.currentTarget.parentNode.classList.toggle('active');
    });
  }
})();

objectFitImages();
svg4everybody();
picturefill();

'use strict';

(function() {

  var block = document.querySelector('.js-main-nav');
  var btnOpen = document.querySelector('.js-open-nav');
  var btnClose = document.querySelector('.js-close-nav');
  var overlay = document.querySelector('.js-header-overlay');
  var ESC = 27;

  var open = function() {
    block.classList.add('active');
    overlay.classList.add('active');
  };

  var close = function() {
    block.classList.remove('active');
    overlay.classList.remove('active');
  }

  var onOpenClick = function(e) {
    e.preventDefault();
    open();
  };

  var onCloseClick = function(e) {
    e.preventDefault();
    close();
  };

  var onEscKeyup = function(e) {
    if (e.keyCode === ESC) {
      e.preventDefault();
      close();
    }
  };

  btnOpen.addEventListener('click', onOpenClick);
  overlay.addEventListener('click', onCloseClick);
  btnClose.addEventListener('click', onCloseClick);
  document.addEventListener('keyup', onEscKeyup);

})();

(function() {
  var btnsClose = document.querySelectorAll('.js-close-modal');
  var modals = document.querySelectorAll('.js-modal');
  var overlays = document.querySelectorAll('.js-overlay-modal');
  var btnsCallback = document.querySelectorAll('.js-open-callback');
  var callback = document.querySelector('.js-modal-callback');
  var ESC = 27;

  var closeModal = function() {
    for (var i = 0; i < modals.length; i += 1) {
      modals[i].classList.remove('active');
    }
  }

  // Закрывает модальное окно по клику на крестик
  for (var i = 0; i < btnsClose.length; i += 1) {
    btnsClose[i].addEventListener('click', function(e) {
      e.preventDefault();
      e.currentTarget.parentNode.parentNode.classList.remove('active');
    });
  }

  // Закрывает модальное окно по клику на оверлей
  for (var i = 0; i < overlays.length; i += 1) {
    overlays[i].addEventListener('click', function(e) {
      e.preventDefault();
      e.currentTarget.parentNode.classList.remove('active');
    });
  }

  // включает модальное окно "Записаться на прием"
  for (var i = 0; i < btnsCallback.length; i += 1) {
    btnsCallback[i].addEventListener('click', function(e) {
      e.preventDefault();
      callback.classList.add('active');
    });
  }

  var onEscKeyup = function(e) {
    if (e.keyCode === ESC) {
      e.preventDefault();
      close();
    }
  };

  document.addEventListener('keyup', onEscKeyup);
})()

'use strict';

(function(){
  var item = document.querySelector('.js-product-info');

  var prettify = function (num) {
    var n = num.toString();
    return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ');
  }

  if (item) {
    var upClass = 'js-counter-up';
    var downClass = 'js-counter-down';

    var value = item.querySelector('.js-price');
    var input = item.querySelector('.js-counter-input');
    var price = parseInt(input.getAttribute('data-price'), 10);
    var count = parseInt(input.getAttribute('data-count'), 10);
    var sumValue = parseInt(input.getAttribute('data-price-sum'), 10);

    var sum = price * count;
    value.innerHTML = prettify(price);
    input.setAttribute('data-price-sum', sum)

    item.addEventListener('click', function(e) {
      var input = e.currentTarget.querySelector('.js-counter-input');
      var price = parseInt(input.getAttribute('data-price'), 10);
      var count = parseInt(input.getAttribute('data-count'), 10);
      var priceSum = parseInt(input.getAttribute('data-price-sum'), 10);
      var elem = e.target;

      if (elem.classList.contains(downClass)) {
        count = count == 0 ? count : (count - 1);
      } else if (elem.classList.contains(upClass)){
        count += 1;
      }
      var sum = price * count;
      input.value = count;
      input.setAttribute('data-count', count);
      input.setAttribute('data-price-sum', sum);
    });
  }
})();

'use strict';

(function() {

})();

'use strict';

(function() {
  var btnToggle = document.querySelector('.js-toggle-search');
  var btnSubmit = document.querySelector('.js-submit-search');
  var search = document.querySelector('.js-search');
  var ESC = 27;

  var toggleSearch = function() {
    search.classList.toggle('active');
  }

  var closeSearch = function() {
    search.classList.remove('active');
  }

  var onToggleClick = function(e) {
    e.preventDefault();
    toggleSearch();
  };

  var onSubmitClick = function(e) {
    e.preventDefault();
    closeSearch();
  };

  var onEscKeyup = function(e) {
    if (e.keyCode === ESC) {
      e.preventDefault();
      closeSearch();
    }
  };

  btnToggle.addEventListener('click', onToggleClick);
  if(btnSubmit) {
    btnSubmit.addEventListener('click', onSubmitClick);
  }
})();

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

'use strict';

(function() {

  var btnsTabs = document.querySelectorAll('.js-button-tabs');
  var contentsTabs = document.querySelectorAll('.js-content-tabs');

  var btnProductTabs = document.querySelectorAll('.js-product-tabs-button');
  var contentsProductTabs = document.querySelectorAll('.js-product-tabs-content');

  var switchTabs = function(btn, content) {
    for (var i = 0; i < btn.length; i++) {
      btn[i].addEventListener('click', function (e) {
        e.preventDefault();
        var tab = e.currentTarget;
        var atr = tab.getAttribute('data-tab');

        for (var j = 0; j < content.length; j++) {
          content[j].classList.remove('active');
        };

        for (var j = 0; j < btn.length; j++) {
          btn[j].classList.remove('active');
        };

        tab.classList.add('active');
        document.querySelector("." + atr).classList.add('active');
      });
    }
  };

  switchTabs(btnsTabs, contentsTabs);
  switchTabs(btnProductTabs, contentsProductTabs);

})();
