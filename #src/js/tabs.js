// Tabs
const tabsBtn = document.querySelectorAll(".profile-games__item");
const tabsItems = document.querySelectorAll(".stats-games__content");

function onTabClick(item) {
   item.addEventListener("click", function () {
      let currentBtn = item;
      let tabId = currentBtn.getAttribute("data-tab");
      let currentTab = document.querySelector(tabId);

      if (!currentBtn.classList.contains('profile-games__item-active')) {
         tabsBtn.forEach(function (item) {
            item.classList.remove('profile-games__item-active');
         });

         tabsItems.forEach(function (item) {
            item.classList.remove('active');
         });

         currentBtn.classList.add('profile-games__item-active');
         currentTab.classList.add('active');
      }

   });
}

tabsBtn.forEach(onTabClick);

document.querySelector('.profile-games__item').click();