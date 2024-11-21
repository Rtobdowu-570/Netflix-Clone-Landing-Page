"use strict";

var tabItems = document.querySelectorAll('.tab-item');
var tabContentItems = document.querySelectorAll('.tab-content-item'); // Select tab content item

function selectItem(e) {
  removeBorder();
  removeShow(); // Add Border to current tab

  this.classList.add('tab-border'); // Grab content item from DOM

  var tabContentItem = document.querySelector("#".concat(this.id, "-content")); // Add show class 

  tabContentItem.classList.add('show');
}

function removeBorder() {
  tabItems.forEach(function (item) {
    return item.classList.remove('tab-border');
  });
}

function removeShow() {
  tabContentItems.forEach(function (item) {
    return item.classList.remove('show');
  });
} // Listen for tab click


tabItems.forEach(function (item) {
  return item.addEventListener('click', selectItem);
});
//# sourceMappingURL=net.dev.js.map
