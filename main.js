'use strict';

var toggleButtons = document.getElementsByClassName("toggle-button");
var toggleArr = [...toggleButtons];

toggleArr.forEach((element, index) => {
    element.addEventListener("click", () => {
      element.style.opacity = "1";

      toggleArr.filter(function (item) {
        return item != element;
      })
      .forEach((item) => {
        item.style.opacity = "0";
      });
  });
});