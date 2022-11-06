// calculator app

/*
--> VERSION WITH INCONSISTENCIES AND BUGS <--
--> Using eval() is a security risk
--> Was not able to elaborate a function to replace eval()
//// The thought process to develop the feature is :
    1. Store inputs from buttons in an array
    2. When the equal button is pressed, join the array into a string and pass it to a function that will evaluate the string and return the result to the display (replacing eval())
    3. The function will have to identify the operator and call the appropriate function from the calculadora object
    4. The function will have to identify the numbers and pass them to the appropriate function from the calculadora object
    5. The function will have to identify operators position and the number of operators in the string and split the string into an array of numbers and an array of operators to pass to the appropriate function from the calculadora object in the correct order
    6. The function will have to identify floating point numbers and concatenate them into a single number to be passed to the appropriate function from the calculadora object
    7. There must be a prioritazaion of operators to be able to evaluate the string correctly


/////////////////////////////////////////////////
// import calcular from './modules/calcular.js';

// // testar funcoes calcular
// console.log(calcular.somar(1, 2));
// console.log(calcular.subtrair(1, 2));
// console.log(calcular.multiplicar(1, 2));
// console.log(calcular.dividir(1, 2));


/////////////////////////////////////////////////
// import * as html_objs from "./modules/app_html_css.js"; 
// import all html objects // it works, but it's not necessary to import all html objects. It's possible to acess them directly from the DOM using document.getElementById() or document.getElementsByClassName() or document.getElementsByTagName() or document.querySelector() or document.querySelectorAll() ...

// // testar objetos html_objs
// console.log(html_objs.calculator);
// console.log(html_objs.display);
// console.log(html_objs.buttons);

*/



/////////////////////////////////////////////////

// get display element and set to 0
let display = document.getElementById("display");
display.innerText = "Mesa 4 : Hello World";
setTimeout(() => {
    display.innerText = "0";
}, 3000); // show 'hello world' in display for 3 seconds and then set to 0


// build logic for calculator app

// create variables to store values
let buttons_values = [];
let result = '';

// add event listeners to buttons, store button values in array and show in display
let buttons = document.getElementsByClassName("btn");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => {
        if (buttons[i].innerText === "C") {
            buttons_values = [];
            display.innerText = "0";
        } else if (buttons[i].innerText === "CE") {
            buttons_values.pop();
            display.innerText = buttons_values.join("");
        } else if (buttons[i].innerText === "=") {
            result = eval(buttons_values.join(""));
            display.innerText = result;
        } else {
            console.log(buttons[i].innerText);
            buttons_values.push(buttons[i].innerText);
            display.innerText = buttons_values.join("");
            console.log(buttons_values);
        }
    });
}





