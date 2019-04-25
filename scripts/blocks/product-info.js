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
