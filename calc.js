let displayValue = 0;

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
const numbers = document.querySelectorAll('button').forEach(num => {
    num.addEventListener('click', () => {
        displayValue = num.textContent;

        const screen = document.querySelector('.screen');
        screen.textContent = displayValue;
    });
});