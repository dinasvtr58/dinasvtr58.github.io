const numbers = document.querySelectorAll(".number");
const calculatorScreen = document.querySelector(".calculator-screen");
const operators = document.querySelectorAll(".operator");
const equalSign = document.querySelector(".equal-sign");
const clearBtn = document.querySelector(".all-clear");
const decimal = document.querySelector(".decimal");

let currentNumber = "0";
let prevNumber = "";
let calculationOperator = "";

const inputNumber = function(number){
    if (currentNumber === "0") {
        currentNumber = number;
    } else {
        currentNumber += number;
    }
};

const updateScreen = function (number) {
    calculatorScreen.value = number;
};

const inputOperator = function(operator) {
    if(calculationOperator === "") {
        prevNumber = currentNumber;
    }
    calculationOperator = operator;
    currentNumber = "0";
};

const calculate = function(){
    let result = "";
    switch(calculationOperator){
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber);
            break;
        case "-":
            result = prevNumber - currentNumber;
            break;
        case "*":
            result = prevNumber * currentNumber;
            break;
        case "/":
            result = prevNumber / currentNumber;
            break;
        case "%":
            result = prevNumber % currentNumber;
            break;
        default:
            break;
    }
    currentNumber = result;
    calculationOperator = "";
};

const clearAll = function (){
    currentNumber = "0";
    prevNumber = "";
    calculationOperator = "";
};

clearBtn.addEventListener("click", function (){
    clearAll();
    updateScreen(currentNumber);
});

equalSign.addEventListener("click", function (e){
    calculate();
    updateScreen(currentNumber);
});

numbers.forEach(function(number) {
    number.addEventListener("click", function(e) {
        inputNumber(e.target.value);
        updateScreen(currentNumber);
    });
});

operators.forEach(function (operator) {
    operator.addEventListener('click', function (e) {
        inputOperator(e.target.value);
    });
});

inputDecimal = function(dot){
    if(currentNumber.includes('.'))
    {
        return;
    }
    currentNumber += dot;
};

decimal.addEventListener("click", function (e){
    inputDecimal(e.target.value);
    updateScreen(currentNumber);
});