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

        switch(this.operator) {
            case '+' :
                result = parsedCurrentValue + parsedPreviousValue;
            break;
            case '-':
                result = parsedPreviousValue - parsedCurrentValue;
            break;
            case '/':
                result = parsedPreviousValue / parsedCurrentValue;
            break;
            case 'x':
                result = parsedPreviousValue * parsedCurrentValue;
            break;
        }
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

