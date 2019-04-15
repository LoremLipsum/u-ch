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
