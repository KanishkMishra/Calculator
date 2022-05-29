let displayValue = "";
let prev = "";
let change = false;
let operation = "";


// Operations
function add(a, b) {
    return Number(a)+Number(b);
}

function subtract(a, b) {
    return a-b;
}

function multiply(a, b) {
    return a*b;
}

function divide(a, b) {
    return a/b;
}

// Determine necessary operation
function operate(a, b, operator) {
    let result;
    switch (operator) {
        case '+':
            result = add(a,b);
            break;
        case '-':
            result = subtract(a,b);
            break;
        case 'x':
            result = multiply(a, b);
            break;
        case '/':
            result = divide(a, b);
            break;
    }
    return result;
}

// update numbers within screen
const numbers = document.querySelectorAll('.num').forEach(num => {
    num.addEventListener('click', () => {
        if (change==false)  addDisplay(num.textContent);
        else                updateDisplay(num.textContent);
        change=false;
    });
});

function addDisplay(num) {//add digit
    displayValue += "" + num; // record display

    const screen = document.querySelector('.screen');
    screen.textContent = displayValue;
}

function updateDisplay(num) {//new number
    prev = displayValue;
    displayValue = num; // record display

    const screen = document.querySelector('.screen');
    screen.textContent = displayValue;
}

// run operators
const operators = document.querySelectorAll('.op').forEach(op => {
    op.addEventListener('click', () => {
        change=true;

        if(operation!="") updateDisplay(operate(prev, displayValue, operation));

        operation = op.textContent;
    });
});

// run equation
const equal = document.querySelector('.equal').addEventListener('click', () => {
    updateDisplay(operate(prev, displayValue, operation));
});

//clear
const clear = document.querySelector('.clear').addEventListener('click', () => {
    updateDisplay("");
    prev="";
    operation="";
});