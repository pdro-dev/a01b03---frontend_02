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
// set container height and width
calculator.style.height = '100vh'; // 100% viewport height
calculator.style.width = '100vw'; // 100% viewport width
// set container background color
calculator.style.backgroundColor = 'lightgray';
// set container border
calculator.style.border = '1px solid black';
calculator.style.borderRadius = '10px';
// set container position
calculator.style.position = 'absolute';
calculator.style.top = '50%';
calculator.style.left = '50%';
calculator.style.transform = 'translate(-50%, -50%)';

// organize container as css grid
calculator.style.display = 'grid'; // display as grid
calculator.style.gridTemplateColumns = '1fr 1fr 1fr 1fr'; // 4 columns
calculator.style.gridTemplateRows = '1fr 1fr 1fr 1fr 1fr 1fr'; // 6 rows
calculator.style.gap = '10px'; // space between elements

// create calculator div for display
const display = document.createElement('div');
display.setAttribute('class', 'row');
display.setAttribute('id', 'display');
calculator.appendChild(display);
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
// grid position
display.style.gridArea = '1 / 1 / auto / span 4'; // row 1, column 1, auto height, 4 columns
// display text
display.innerText = '0';


// array of arrays for buttons values
const buttons = [
    ['C', 'CE', '%', '/'],
    ['7', '8', '9', '*'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '=']
];

// create buttons on each grid position
for (let i = 0; i < buttons.length; i++) {
    for (let j = 0; j < buttons[i].length; j++) {
        const button = document.createElement('button');
        button.setAttribute('class', 'btn btn-default');
        button.innerText = buttons[i][j];
        button.style.width = '100%';
        button.style.height = '100%';
        button.style.fontSize = '30px';
        button.style.borderRadius = '10px';
        button.style.gridArea = `${i + 2} / ${j + 1} / auto / auto`; // row 2, column 1, auto height, auto width
        // center button in grid cell
        button.style.display = 'flex';
        button.style.justifyContent = 'center';
        button.style.alignItems = 'center';

        calculator.appendChild(button);
    }
}



