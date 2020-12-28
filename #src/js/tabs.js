// Tabs
const tabsBtn = document.querySelectorAll(".profile-games__item");
const tabsItems = document.querySelectorAll(".stats-games__content");

function onTabClick(item) {
   item.addEventListener("click", function () {
      let currentBtn = item;
      let tabId = currentBtn.getAttribute("data-tab");
      let currentTab = document.querySelector(tabId);

      if (!currentBtn.classList.contains('active')) {
         tabsBtn.forEach(function (item) {
            item.classList.remove('active');
         });

         tabsItems.forEach(function (item) {
            item.classList.remove('active');
         });

         currentBtn.classList.add('active');
         currentTab.classList.add('active');
      }

   });
}

tabsBtn.forEach(onTabClick);

//! Проблема из-за этого, но хз почему >:[
//? PS: Когда подключаю отедльно эти скрипты, то все работает 
document.querySelector('.profile-games__item').click();