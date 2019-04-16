'use strict';

(function() {

  var counter = document.querySelector('.js-counter');

  if (counter) {
    var input = counter.querySelector('.js-counter-input');
    var sum = counter.querySelector('.js-price');
    var minus = counter.querySelector('.js-counter-minus');
    var plus = counter.querySelector('.js-counter-plus');

    var value = parseInt(document.querySelector('.js-counter-value').value, 10);

    var up = function () {
      value += 1;
      input.innerHTML = value;
    }

    var down = function () {
      value = value == 1 ? value : (value - 1);
      input.innerHTML = value;
    }

    var onPlusClick = function () {
      up();
    }

    var onMinusClick = function () {
      down();
    }

    if(counter) {
      plus.addEventListener('click', onPlusClick)
      minus.addEventListener('click', onMinusClick)
    }
  }
})();
