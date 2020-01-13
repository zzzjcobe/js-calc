import './assets/styles.sass';

const calculator = document.getElementById('calc');
const symbols = calculator.querySelectorAll('.symbolButton');
const display = calculator.querySelector('.currentDisplay'); // Current display
const previousDisplay = calculator.querySelector('.previousDisplay');
const clear = calculator.querySelector('.clearButton');
const result = calculator.querySelector('.resultButton');
const backButton = calculator.querySelector('.backButton');
const operators = calculator.querySelectorAll('.operatorButton');
const operationDisplay = calculator.querySelector('.operationDisplay');

let calcOperator = undefined;

operators.forEach(operator => {
    operator.addEventListener('click', event => {
        event.preventDefault();

        if ( previousDisplay.innerHTML.trim().length && display.innerHTML.trim().length && !!calcOperator ) {
            let answer = calculate(previousDisplay.innerHTML.trim(), display.innerHTML.trim(), calcOperator);
            display.innerHTML = answer.toString();
            goToPrevious();
            cleanOperation();
            setOperation(operator.getAttribute('data-symbol'));
        } else {
            let operation = operator.getAttribute('data-symbol');
            calcOperator = operation;
            operationDisplay.innerHTML = operation;
        }
    });
});

for ( let symbol of symbols ) {
    symbol.addEventListener('click', event => {
        event.preventDefault();
        let symbolValue = symbol.getAttribute('data-symbol');

        if (!!calcOperator) {
            if ( symbolValue === '.' && display.innerHTML.includes('.') ) return;
            addSymbolToCurrent(symbolValue);
            return;
        }
        if ( symbolValue === '.' && previousDisplay.innerHTML.includes('.') ) return;
        addSymbolToPrevious(symbolValue);        
    });
}

clear.addEventListener('click', event => {
    calcOperator = undefined;
    event.preventDefault();
    clearDisplay();
    cleanOperation();
});

backButton.addEventListener('click', event => {
    event.preventDefault();
    removeLastSymbolFromCurrent();
    
    if ( !display.innerHTML.length ) {
        cleanOperation();        
    }
    if ( !operationDisplay.innerHTML.length && !display.innerHTML.length ) {
        removeLastSymbolFromPrevious();
    }
});

result.addEventListener('click', event => {
    event.preventDefault();
    let previousValue = +previousDisplay.innerHTML.trim();   

    let displayValue = getDisplayValue();
    
    // console.log(previousValue, displayValue, calcOperator);
    
    let answer = calculate(previousValue, displayValue, calcOperator);
    display.innerHTML = answer.toString();
    goToPrevious();

    cleanOperation();    
});

function setOperation(operation) {
    calcOperator = operation;
    operationDisplay.innerHTML = operation;
}

function cleanOperation() {
    calcOperator = undefined;
    operationDisplay.innerHTML = '';
}

function addSymbolToCurrent(symbol) {
    display.innerHTML += symbol;
}

function addSymbolToPrevious(symbol) {
    previousDisplay.innerHTML += symbol;
}

function clearDisplay() {
    display.innerHTML = '';
    previousDisplay.innerHTML = '';
}

function getDisplayValue() {
    let result = display.innerHTML.toString().toUpperCase().trim();
    return result;
}

function calculate(a, b, operator) {
    switch (operator) {
        case '+':
            return +a + +b;
        case '-':
            return +a - +b;
        case '*':
            return +a * +b;
        case '/':
            return +a / +b;
        default:
            return;
    }
}

function removeLastSymbolFromCurrent() {
    const value = display.innerHTML.toString();
    let result = value.slice(0, -1);
    display.innerHTML = result;
}

function removeLastSymbolFromPrevious() {
    const prevValue = previousDisplay.innerHTML.toString();
    let prevResult = prevValue.slice(0, -1);
    previousDisplay.innerHTML = prevResult;
}

function goToPrevious() {
    let current = display.innerHTML;
    previousDisplay.innerHTML = current;
    display.innerHTML = '';
}