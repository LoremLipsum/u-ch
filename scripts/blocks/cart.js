// 'use strict';
//
// (function(){
//   var items = document.querySelectorAll('.js-cart-item');
//
//   var prettify = function (num) {
//     var n = num.toString();
//     return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ');
//   }
//
//   if (items) {
//     var total = 0;
//     var upClass = 'js-counter-up';
//     var downClass = 'js-counter-down';
//
//     for (var i = 0; i < items.length; i += 1) {
//       var value = items[i].querySelector('.js-price');
//       var input = items[i].querySelector('.js-counter-input');
//       var sumValue = items[i].querySelector('.js-price-sum');
//       var price = parseInt(input.getAttribute('data-price'), 10);
//       var count = parseInt(input.getAttribute('data-count'), 10);
//       var total =
//
//       var sum = price * count;
//       value.innerHTML = prettify(price);
//       sumValue.innerHTML = prettify(sum);
//       input.setAttribute('data-price-sum', sum)
//
//       items[i].addEventListener('click', function(e) {
//         var input = e.currentTarget.querySelector('.js-counter-input');
//         var sumValue = e.currentTarget.querySelector('.js-price-sum');
//         var price = parseInt(input.getAttribute('data-price'), 10);
//         var count = parseInt(input.getAttribute('data-count'), 10);
//         var priceSum = parseInt(input.getAttribute('data-price-sum'), 10);
//         var elem = e.target;
//
//         if (elem.classList.contains(downClass)) {
//           count = count == 0 ? count : (count - 1);
//         } else if (elem.classList.contains(upClass)){
//           count += 1;
//         }
//         var sum = price * count;
//         input.value = count;
//         sumValue.innerHTML = prettify(sum);
//         input.setAttribute('data-count', count);
//         input.setAttribute('data-price-sum', sum);
//       });
//     }
//   }
// })();
