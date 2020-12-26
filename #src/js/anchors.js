//* Anchors
// const anchors = document.querySelectorAll('a[href*="#"]')

// for (let anchor of anchors) {
//    anchor.addEventListener("click", function (event) {
//       event.preventDefault();
//       const blockID = anchor.getAttribute('href')
//       document.querySelector('' + blockID).scrollIntoView({
//          behavior: "smooth",
//          block: "start"
//       })
//    })
// }

var wrapper = document.querySelector('.liked');
var elementWidth = document.querySelector('.liked__item').clientWidth;
var i = 0;
const items = document.querySelectorAll(".liked__item");


function scrollTo(e) {
   wrapper.scroll({
      top: 0,
      left: e,
      behavior: 'smooth'
   })
}


var initialPoint;
var finalPoint;
document.addEventListener('touchstart', function (event) {
   event.preventDefault();
   event.stopPropagation();
   initialPoint = event.changedTouches[0];
}, false);
document.addEventListener('touchend', function (event) {
   event.preventDefault();
   event.stopPropagation();
   finalPoint = event.changedTouches[0];
   var xAbs = Math.abs(initialPoint.pageX - finalPoint.pageX);
   var yAbs = Math.abs(initialPoint.pageY - finalPoint.pageY);
   if (xAbs > 20 || yAbs > 20) {
      if (xAbs > yAbs) {
         if (finalPoint.pageX < initialPoint.pageX) {
            /*СВАЙП ВЛЕВО*/
            if (i < items.length - 1) {
               i++;
               scrollTo((elementWidth + 24) * i);
            }
         }
         else {
            /*СВАЙП ВПРАВО*/
            if (i == 0) { }
            else {
               i--;
               scrollTo((elementWidth + 24) * i);
            }
         }
      }
   }
}, false);