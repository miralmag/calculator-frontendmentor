'use strict';

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const deleteButton = document.querySelector('[data-delete]');
const resetButton = document.querySelector('[data-reset]');
const equalsButton = document.querySelector('[data-equals]');
const screenResult = document.querySelector('.screen-down-value');
const screenUpValue = document.querySelector('.screen-up-value');


resetButton.addEventListener( 'click', () => {
    screenResult.innerHTML = "";
})

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.addNumber(button.id);
        calculator.display();
    })
})

class Calculator {
    constructor(screenResult, screenUpValue){
        this.screenResult = screenResult;
        this.screenUpValue = screenUpValue;
        this.lowerValue = '';
        this.upperValue = '';
        this.operator = undefined;
    }

    addNumber(number){
        this.lowerValue = number;
    }

    display() {
        this.screenResult.innerText = this.lowerValue;
    }
}

const calculator = new Calculator (screenResult, screenUpValue);


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

