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
