let num1, num2;
let output = document.getElementById("outputNumber");
let result;

function callValues() {
    num1 = parseFloat(document.getElementById("firstInput").value);
    num2 = parseFloat(document.getElementById("secondInput").value);
}

function add() {
    callValues();
    output.textContent = num1 + num2;
}

function subtract() {
    callValues();
    if(num2 > num1){
        output.textContent = num2 - num1;
        return;
    }
    output.textContent = num1 - num2;
}

function multiply() {
    callValues();
    output.textContent = num1*num2;
}

function divide() {
    callValues();
    output.textContent = num1/num2;
}