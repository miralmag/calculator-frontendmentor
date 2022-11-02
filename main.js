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

//toggle themes

function handleThemes (ev) {
ev.preventDefault;
if (ev.currentTarget.id === 'two') {
    document.documentElement.style.setProperty('--main-bg', 'hsl(0, 0%, 90%)');
    document.documentElement.style.setProperty('--keypad-bg', 'hsl(0, 5%, 81%)');
    document.documentElement.style.setProperty('--screen-bg', 'hsl(0, 0%, 93%)');
    document.documentElement.style.setProperty('--toggle-btn', 'hsl(25, 98%, 40%)');
    document.documentElement.style.setProperty('--del-reset-bg', 'hsl(185, 42%, 37%)');
    document.documentElement.style.setProperty('--del-reset-shadow', 'hsl(185, 58%, 25%)');
    document.documentElement.style.setProperty('--equals-bg', 'hsl(25, 98%, 40%)');
    document.documentElement.style.setProperty('--equals-shadow', 'hsl(25, 99%, 27%)');
    document.documentElement.style.setProperty('--key-bg', 'hsl(45, 7%, 89%)');
    document.documentElement.style.setProperty('--key-shadow', 'hsl(35, 11%, 61%)');
    document.documentElement.style.setProperty('--result-color', 'hsl(60, 10%, 19%)');
    document.documentElement.style.setProperty('--text2', 'hsl(0, 0%, 100%)');
    document.documentElement.style.setProperty('--text1', 'hsl(60, 10%, 19%)');
    document.documentElement.style.setProperty('--text-header', 'hsl(60, 10%, 19%)');
    document.documentElement.style.setProperty('--equals-text', 'hsl(0, 0%, 100%)');
}
else if (ev.currentTarget.id === 'one') {
    document.documentElement.style.setProperty('--main-bg', 'hsl(222, 26%, 31%)');
    document.documentElement.style.setProperty('--keypad-bg', 'hsl(223, 31%, 20%)');
    document.documentElement.style.setProperty('--screen-bg', 'hsl(224, 36%, 15%)');
    document.documentElement.style.setProperty('--toggle-btn', 'hsl(6, 63%, 50%)');
    document.documentElement.style.setProperty('--del-reset-bg', 'hsl(225, 21%, 49%)');
    document.documentElement.style.setProperty('--del-reset-shadow', 'hsl(224, 28%, 35%)');
    document.documentElement.style.setProperty('--equals-bg', 'hsl(6, 63%, 50%)');
    document.documentElement.style.setProperty('--equals-shadow', 'hsl(6, 70%, 34%)');
    document.documentElement.style.setProperty('--key-bg', 'hsl(30, 25%, 89%)');
    document.documentElement.style.setProperty('--key-shadow', 'hsl(28, 16%, 65%)');
    document.documentElement.style.setProperty('--result-color', 'hsl(0, 0%, 100%)');
    document.documentElement.style.setProperty('--text2', 'hsl(0, 0%, 100%)');
    document.documentElement.style.setProperty('--text1', 'hsl(221, 14%, 31%)');
    document.documentElement.style.setProperty('--text-header', 'hsl(0, 0%, 100%)');
    document.documentElement.style.setProperty('--equals-text', 'hsl(0, 0%, 100%)');
}
else if (ev.currentTarget.id === 'three') {
    document.documentElement.style.setProperty('--main-bg', 'hsl(268, 75%, 9%)');
    document.documentElement.style.setProperty('--keypad-bg', 'hsl(268, 71%, 12%)');
    document.documentElement.style.setProperty('--screen-bg', 'hsl(268, 71%, 12%)');
    document.documentElement.style.setProperty('--toggle-btn', 'hsl(176, 100%, 44%)');
    document.documentElement.style.setProperty('--del-reset-bg', 'hsl(281, 89%, 26%)');
    document.documentElement.style.setProperty('--del-reset-shadow', 'hsl(285, 91%, 52%)');
    document.documentElement.style.setProperty('--equals-bg', 'hsl(176, 100%, 44%)');
    document.documentElement.style.setProperty('--equals-shadow', 'hsl(177, 92%, 70%)');
    document.documentElement.style.setProperty('--key-bg', 'hsl(268, 47%, 21%)');
    document.documentElement.style.setProperty('--key-shadow', 'hsl(290, 70%, 36%)');
    document.documentElement.style.setProperty('--result-color', 'hsl(52, 100%, 62%)');
    document.documentElement.style.setProperty('--text2', 'hsl(0, 0%, 100%)');
    document.documentElement.style.setProperty('--text1', 'hsl(52, 100%, 62%)');
    document.documentElement.style.setProperty('--text-header', 'hsl(52, 100%, 62%)');
    document.documentElement.style.setProperty('--equals-text', 'hsl(198, 20%, 13%);');
}
}

toggleArr.forEach((element, index) => {
    element.addEventListener("click", handleThemes)
})

