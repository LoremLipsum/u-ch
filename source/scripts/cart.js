'use strict';

(function(){
  var items = document.querySelectorAll('.js-cart-item');

  var prettify = function (num) {
    var n = num.toString();
    return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ');
  }

  if (items) {
    var sum;
    var sumChange;
    var total = 0;
    var upClass = 'js-counter-up';
    var downClass = 'js-counter-down';

    for (var i = 0; i < items.length; i += 1) {
      var value = items[i].querySelector('.js-price');
      var input = items[i].querySelector('.js-counter-input');
      var sumValue = items[i].querySelector('.js-price-sum');
      var price = parseInt(input.getAttribute('data-price'), 10);
      var count = parseInt(input.getAttribute('data-count'), 10);

      sum = price * count;
      value.innerHTML = prettify(price);
      sumValue.innerHTML = prettify(sum);
      input.setAttribute('data-price-sum', sum)

      items[i].addEventListener('click', function(e) {
        var inputChange = e.currentTarget.querySelector('.js-counter-input');
        var sumValueChange = e.currentTarget.querySelector('.js-price-sum');
        var priceChange = parseInt(inputChange.getAttribute('data-price'), 10);
        var countChange = parseInt(inputChange.getAttribute('data-count'), 10);
        var priceSumChange = parseInt(inputChange.getAttribute('data-price-sum'), 10);
        var elem = e.target;

        if (elem.classList.contains(downClass)) {
          countChange = countChange == 0 ? countChange : (countChange - 1);
        } else if (elem.classList.contains(upClass)){
          countChange += 1;
        }
        sumChange = priceChange * countChange;
        inputChange.value = countChange;
        sumValueChange.innerHTML = prettify(sumChange);
        inputChange.setAttribute('data-count', countChange);
        inputChange.setAttribute('data-price-sum', sumChange);
      });
    }
  }
})();
