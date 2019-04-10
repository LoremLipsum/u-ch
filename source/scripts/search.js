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
