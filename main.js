'use strict';

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[operation-number]');
const deleteButton = document.querySelector('[data-delete]');
const resetButton = document.querySelector('[data-reset]');
const equalsButton = document.querySelector('[data-equals]');
const result = document.querySelector('.screen-result');

//toggle movement

const toggleButtons = document.getElementsByClassName("toggle-button");
const toggleArr = [...toggleButtons];

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

