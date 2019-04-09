// (function() {
//   var sClose = document.querySelectorAll('.modal__close');
//   var overlays = document.querySelectorAll('.modal__overlay');
//   var sModal = document.querySelectorAll('.js-appointment');
//   var modal = document.querySelector('.modal--appointment');
//   var Video =document.querySelector('.intro__video-');
//   var video = document.querySelector('.modal--intro-video');
//   var ESC = 27;
//
//   // Закрывает модальное окно по клику на крестик
//   for (var i = 0; i < sClose.length; i += 1) {
//     sClose[i].addEventListener('click', function(e) {
//       e.preventDefault();
//       e.currentTarget.parentNode.parentNode.parentNode.classList.remove('active');
//     });
//   }
//
//   // Закрывает модальное окно по клику на оверлей
//   for (var i = 0; i < overlays.length; i += 1) {
//     overlays[i].addEventListener('click', function(e) {
//       e.preventDefault();
//       e.currentTarget.parentNode.classList.remove('active');
//     });
//   }
//
//   // включает модальное окно "Записаться на прием"
//   for (var i = 0; i < sModal.length; i += 1) {
//     sModal[i].addEventListener('click', function(e) {
//       e.preventDefault();
//       modal.classList.add('active');
//     });
//   }
//
//   // включает модальное окно видео
//   if(Video){
//     Video.addEventListener('click', function(e) {
//       e.preventDefault();
//       video.classList.add('active');
//     }, false);
//   }
//
//   if(video){
//     video.querySelector('.modal__close').addEventListener('click', function() {
//       video.querySelector('.modal__video').contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
//     });
//
//     video.querySelector('.modal__overlay').addEventListener('click', function() {
//       video.querySelector('.modal__video').contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
//     });
//   }
//
//   var onEscKeyup = function(e) {
//     if (e.keyCode === ESC) {
//       e.preventDefault();
//       close();
//     }
//   };
// })()
