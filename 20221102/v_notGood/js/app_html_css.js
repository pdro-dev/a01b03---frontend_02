// insert bootstrap css
const bootstrap = document.createElement('link');
bootstrap.setAttribute('rel', 'stylesheet');
bootstrap.setAttribute('href', 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css');
document.head.appendChild(bootstrap);


// calculator app

// create calculator container
const calculator = document.createElement('div');
calculator.setAttribute('class', 'container');
document.body.appendChild(calculator);

// create calculator div for display
const display = document.createElement('div');
display.setAttribute('class', 'row');
display.setAttribute('id', 'display');
display.innerText = "0";
calculator.appendChild(display);


// create buttons
const buttons = [
    ['', 'C', 'CE', '/'],
    ['7', '8', '9', '*'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '=']
]; // array of arrays for buttons values

for (let i = 0; i < buttons.length; i++) {
    for (let j = 0; j < buttons[i].length; j++) {
        const button = document.createElement('button');
        button.setAttribute('class', 'btn btn-default');
        button.setAttribute('id', `btn-${buttons[i][j]}`);
        button.innerText = buttons[i][j];

        button.style.width = '100%';
        button.style.height = '100%';
        button.style.fontSize = '30px';
        button.style.borderRadius = '10px';
        // // gridArea: 'row-start / column-start / row-end / column-end';
        button.style.gridArea = `${i + 2} / ${j + 1} / auto / auto`;
        // // center button in grid cell
        //button.style.display = 'flex';
        //button.style.justifyContent = 'center';
        //button.style.alignItems = 'center';

        calculator.appendChild(button);
    }
}



/////////////////////////////////STYLES //////////////////////////////////////


// style calculator container
calculator.style.display = 'grid'; // organize container as css grid
calculator.style.gridTemplateColumns = '1fr 1fr 1fr 1fr'; // 4 columns 
calculator.style.gridTemplateRows = '1fr 1fr 1fr 1fr 1fr 1fr'; // 6 rows
calculator.style.gap = '10px'; // space between elements
calculator.style.backgroundColor = 'lightgray';
calculator.style.border = '1px solid black';
calculator.style.borderRadius = '10px';
// set container position
calculator.style.height = '100vh'; // 100% viewport height
calculator.style.width = '100vw'; // 100% viewport width
// calculator.style.position = 'absolute';
// calculator.style.top = '50%';
// calculator.style.left = '50%';
// calculator.style.transform = 'translate(-50%, -50%)';


// style display
display.style.backgroundColor = 'black';
display.style.color = 'white';
display.style.height = '150px';
display.style.fontSize = '50px';
display.style.textAlign = 'right';
display.style.padding = '10px';
display.style.margin = '0';
display.style.borderRadius = '10px';
display.style.marginTop = '20px';
display.style.gridArea = '1 / 1 / auto / span 4'; // row 1, column 1, auto height, 4 columns


// complementary styles for buttons
// set button to be Dark Mode Button
let btn_darkmode = document.getElementsByClassName("btn-default")[0];
btn_darkmode.innerText = "Dark Mode";
btn_darkmode.style.backgroundColor = "black";
btn_darkmode.style.color = "white";
btn_darkmode.style.fontSize = "10px";

// create css for dark mode
const darkMode = document.createElement('style');
darkMode.setAttribute('id', 'darkMode');
darkMode.innerText = `
    body {
        background-color: black;
        color: white;
    }
    .btn-default {
        background-color: black;
        color: white;
    }
    #display {
        background-color: black;
        color: white;
    }
`;
document.head.appendChild(darkMode);

// add event listener to dark mode button
btn_darkmode.addEventListener('click', () => {
    if (darkMode.disabled) {
        darkMode.disabled = false;
    } else {
        darkMode.disabled = true;
    }
});







// export objects to other modules
export { 
    calculator, 
    display,
    buttons
};