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
