'use strict';

(function() {
  var btnToggle = document.querySelector('.js-toggle-search');
  var btnSubmit = document.querySelector('.js-submit-search');
  var search = document.querySelector('.js-search');
  var ESC = 27;

  var toggle = function() {
    search.classList.toggle('active');
  }

  var close = function() {
    search.classList.remove('active');
  }

  var onToggleClick = function(e) {
    e.preventDefault();
    toggle();
  };

  var onSubmitClick = function(e) {
    e.preventDefault();
    close();
  };

  var onEscKeyup = function(e) {
    if (e.keyCode === ESC) {
      e.preventDefault();
      close();
    }
  };

  btnToggle.addEventListener('click', onToggleClick);
  btnSubmit.addEventListener('click', onSubmitClick);
})();
