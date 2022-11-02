'use strict';

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const deleteButton = document.querySelector('[data-delete]');
const resetButton = document.querySelector('[data-reset]');
const equalsButton = document.querySelector('[data-equals]');
const screenDownResult = document.querySelector('.screen-down-value');
const screenUpResult = document.querySelector('.screen-up-value');


class Calculator {
    constructor(screenDownResult, screenUpResult){
        this.screenUpResult = screenUpResult;
        this.screenDownResult = screenDownResult;
        this.previousValue = '';
        this.currentValue = '';
        this.operator = undefined;
    }

    addNumber(number){
        if (number === '.' && this.previousValue.includes('.')) return;
        this.previousValue = this.previousValue + number;
    }

    display() {
        this.screenDownResult.innerText = this.previousValue;
        this.screenUpResult.innerText = this.currentValue;
    }

    delete() {
        this.previousValue = this.previousValue.slice(0,-1)
    }

    reset() {
        this.previousValue = '';
        this.currentValue = '';
        this.operator = undefined;
    }

    chooseOperator(operator) {
        if (this.previousValue === '') return;
        if (this.currentValue !== '') {
            this.calculate();
        }

        this.operator = operator;
        this.currentValue = this.previousValue;
        this.previousValue = '';
    }

    calculate() {
        let result;
        let parsedCurrentValue = parseFloat(this.currentValue);
        let parsedPreviousValue = parseFloat(this.previousValue);
        if (isNaN(parsedCurrentValue) || isNaN(parsedPreviousValue)) return;
        switch(this.operator) {
            case '+' :
                result = parsedCurrentValue + parsedPreviousValue;
            break;
            case '-':
                result = parsedCurrentValue - parsedPreviousValue;
            break;
            case '/':
                result = parsedCurrentValue /parsedPreviousValue;
            break;
            case 'x':
                result = parsedCurrentValue * parsedPreviousValue;
            break;
            default: return;
        }

        this.previousValue = result;
        this.operator = undefined;
        this.currentValue = '';
    }

}

const calculator = new Calculator (screenDownResult, screenUpResult);

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.addNumber(button.id);
        calculator.display();
    })
})

resetButton.addEventListener('click', () => {
    calculator.reset();
    calculator.display();
})

deleteButton.addEventListener('click', () =>{
    calculator.delete();
    calculator.display();
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperator(button.id);
        calculator.display();
    })
})

equalsButton.addEventListener('click', () => {;
    calculator.calculate();
    calculator.display();
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

