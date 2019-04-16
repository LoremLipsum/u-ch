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
