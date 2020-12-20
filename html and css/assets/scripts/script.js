// Tabs
const tabsBtn = document.querySelectorAll(".stat-games__item");
const tabsItems = document.querySelectorAll(".stat-games__content");

function onTabClick(item) {
   item.addEventListener("click", function () {
      let currentBtn = item;
      let tabId = currentBtn.getAttribute("data-tab");
      let currentTab = document.querySelector(tabId);

      if (!currentBtn.classList.contains('stat-games__item-active')) {
         tabsBtn.forEach(function (item) {
            item.classList.remove('stat-games__item-active');
         });

         tabsItems.forEach(function (item) {
            item.classList.remove('active');
         });

         currentBtn.classList.add('stat-games__item-active');
         currentTab.classList.add('active');
      }

   });
}

tabsBtn.forEach(onTabClick);

document.querySelector('.stat-games__item').click();