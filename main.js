'use strict';

// class Calculator {
//     sum(num1, num2){
//         return num1 + num2; 
//     }

//     subtract(num1, num2){
//         return num1 - num2; 
//     }

//     multiply(num1, num2){
//         return num1 * num2; 
//     }

//     divide (num1, num2){
//         return num1 / num2; 
//     }
// }

// class Screen{
//     constructor(screenValue){
//         this.screenValue = screenValue;
//         this.calculator = new Calculator();
//         this.currentValue = '';
//         this.previousValue = '';
//     }
//     addNumber(number){
//         this.currentValue = number;
//     }
// }


const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const deleteButton = document.querySelector('[data-delete]');
const resetButton = document.querySelector('[data-reset]');
const equalsButton = document.querySelector('[data-equals]');
const screenResult = document.querySelector('.screen-result');

// const screen = new Screen(result);

resetButton.addEventListener( 'click', () => {
    screenResult.innerHTML = "";
})

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        screenResult.innerHTML += button.id;
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () =>{
        screenResult.innerHTML += button.id;
    } )
})


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

