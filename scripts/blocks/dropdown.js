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
