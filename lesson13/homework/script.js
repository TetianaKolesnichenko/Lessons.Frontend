let currentInput = '';
let lastOperation = null;
let lastValue = null;

function appendValue(value) {
    currentInput += value;
    updateDisplay();
}

function operate(operation) {
    if (currentInput !== '') {
        if (lastOperation !== null) {
            calculate();
        }
        lastValue = parseFloat(currentInput);
        lastOperation = operation;
        currentInput = '';
        if (operation === '=') {
            lastOperation = null;
        }
        updateDisplay();
    }
}

function calculate() {
    const currentValue = parseFloat(currentInput);
    let result;
    switch (lastOperation) {
        case '+':
            result = lastValue + currentValue;
            break;
        case '-':
            result = lastValue - currentValue;
            break;
        case '*':
            result = lastValue * currentValue;
            break;
        case '/':
            result = lastValue / currentValue;
            break;
        default:
            return;
    }
    currentInput = result.toString();
}

function clearInput() {
    currentInput = '';
    lastOperation = null;
    lastValue = null;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = currentInput || '0';
}