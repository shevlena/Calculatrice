let header = document.querySelector('h1');
let firstNumber = document.querySelector('.num_1');
let secondNumber = document.querySelector('.num_2');
let sumButton = document.querySelector('.sum');
let subButton = document.querySelector('.sub');
let prodButton = document.querySelector('.prod');
let fractButton = document.querySelector('.fract');
let result = document.querySelector('.result');


function addition() {
    let sumResult = parseFloat(firstNumber.value) + parseFloat(secondNumber.value);
    result.textContent = sumResult;
}

function subtraction() {
    let subResult = parseFloat(firstNumber.value) - parseFloat(secondNumber.value);
    result.textContent = subResult;
}

function multiplication() {
    let subResult = parseFloat(firstNumber.value) * parseFloat(secondNumber.value);
    result.textContent = subResult;
}

function division() {
    let subResult = parseFloat(firstNumber.value) / parseFloat(secondNumber.value);
    result.textContent = subResult.toFixed(3);
}

sumButton.addEventListener('click', addition)
subButton.addEventListener('click', subtraction);
prodButton.addEventListener('click', multiplication);
fractButton.addEventListener('click', division);