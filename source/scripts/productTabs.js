'use strict';

(function() {

  var buttonsTabs = document.querySelectorAll('.js-product-tabs-button');
  var contentsTabs = document.querySelectorAll('.js-product-tabs-content');

  for (var i = 0; i < buttonsTabs.length; i++) {
    buttonsTabs[i].addEventListener('click', function (e) {
      e.preventDefault();
      var tab = e.currentTarget;
      var atr = tab.getAttribute('data-tab');

      for (var j = 0; j < contentsTabs.length; j++) {
        contentsTabs[j].classList.remove('active');
      };

      for (var j = 0; j < buttonsTabs.length; j++) {
        buttonsTabs[j].classList.remove('active');
      };

      tab.classList.add('active');
      document.querySelector("." + atr).classList.add('active');
    });
  }

})();
