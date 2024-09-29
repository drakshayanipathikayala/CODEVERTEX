let display = document.getElementById("display");
let currentInput = '';
let operatorPressed = false;

function appendNumber(number) {
    if (operatorPressed) {
        display.value = '';
        operatorPressed = false;
    }
    display.value += number;
}

function appendOperator(operator) {
    if (currentInput === '') {
        currentInput = display.value;
    } else {
        currentInput = eval(currentInput + display.value);
        display.value = currentInput;
    }
    currentInput += operator;
    operatorPressed = true;
}

function calculate() {
    if (currentInput !== '') {
        currentInput += display.value;
        display.value = eval(currentInput);
        currentInput = '';
    }
}

function clearDisplay() {
    display.value = '';
    currentInput = '';
}

function deleteDigit() {
    display.value = display.value.slice(0, -1);
}
