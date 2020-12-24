// Tabs
const tabsBtn = document.querySelectorAll(".tabs__btn");
const tabsItems = document.querySelectorAll(".tabs__item");

function onTabClick(item) {
   item.addEventListener("click", function () {
      let currentBtn = item;
      let tabId = currentBtn.getAttribute("data-tab");
      let currentTab = document.querySelector(tabId);

      if (!currentBtn.classList.contains('active-tabs__btn')) {
         tabsBtn.forEach(function (item) {
            item.classList.remove('active-tabs__btn');
         });

         tabsItems.forEach(function (item) {
            item.classList.remove('active');
         });

         currentBtn.classList.add('active-tabs__btn');
         currentTab.classList.add('active');
      }

   });
}

tabsBtn.forEach(onTabClick);

document.querySelector('.tabs__btn').click();