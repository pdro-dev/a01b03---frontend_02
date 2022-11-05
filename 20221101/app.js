

import somar from './js/somar.js';
import subtrair from './js/subtrair.js';
import multiplicar from './js/multiplicar.js';
import dividir from './js/dividir.js';

// 

// add event listener to buttons
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        let value = e.target.innerText;
        let display = document.getElementById('display');
        let displayValue = display.innerText;
        let displayValueArray = displayValue.split(' ');
        let lastValue = displayValueArray[displayValueArray.length - 1];
        let lastValueArray = lastValue.split('');
        let lastValueLastChar = lastValueArray[lastValueArray.length - 1];
        const operators = ['+', '-', '*', '/'];

        // clear display
        if (value === 'C') {
            display.innerText = '0';
        }
        // clear last entry
        else if (value === 'CE') {
            if (displayValueArray.length === 1) {
                display.innerText = '0';
            } else {
                displayValueArray.pop();
                display.innerText = displayValueArray.join(' ');
            }
        }
        // percent
        else if (value === '%') {
            if (displayValueArray.length === 1) {
                display.innerText = `${displayValue / 100}`;
            } else {
                displayValueArray.pop();
                display.innerText = `${displayValueArray.join(' ')} ${displayValue / 100}`;
            }
        }
        // operators
        else if (operators.includes(value)) {
            if (displayValueArray.length === 1) {
                display.innerText = `${displayValue} ${value} `;
            } else {
                const operator = displayValueArray[displayValueArray.length - 2];
                const firstValue = displayValueArray[0];
                const secondValue = displayValueArray[2];
                let result = '';

                if (operator === '+') {
                    result = somar(firstValue, secondValue);
                } else if (operator === '-') {
                    result = subtrair(firstValue, secondValue);
                } else if (operator === '*') {
                    result = multiplicar(firstValue, secondValue);
                } else if (operator === '/') {
                    result = dividir(firstValue, secondValue);
                }

                display.innerText = `${result} ${value} `;
            }
        }
        // equal
        else if (value === '=') {
            const operator = displayValueArray[displayValueArray.length - 2];
            const firstValue = displayValueArray[0];
            const secondValue = displayValueArray[2];
            let result = '';

            if (operator === '+') {
                result = somar(firstValue, secondValue);
            } else if (operator === '-') {              
                result = subtrair(firstValue, secondValue);
            } else if (operator === '*') {
                result = multiplicar(firstValue, secondValue);
            } else if (operator === '/') {
                result = dividir(firstValue, secondValue);
            } else {
                result = displayValue;
            }
        }
        // decimal
        else if (value === '.') {
            if (lastValue.includes('.')) {
                return;
            } else {
                display.innerText = `${displayValue} ${value}`;
            }
        }
        // numbers
        else {
            if (displayValue === '0') {
                display.innerText = value;
            } else if (operators.includes(lastValueLastChar)) {
                display.innerText = `${displayValue} ${value}`;
            } else {
                display.innerText = `${displayValue}${value}`;
            }
        }
    });
});
