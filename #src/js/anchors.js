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
var btnNext = document.querySelector(".liked__btn-next");
var btnPrev = document.querySelector(".liked__btn-prev");
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

btnNext.onclick = () => {
   if (i < items.length - 1) {
      i++;
      scrollTo((elementWidth + 24) * i);
   }
}

btnPrev.onclick = () => {
   if (i == 0) { }
   else {
      i--;
      scrollTo((elementWidth + 24) * i);
   }
}