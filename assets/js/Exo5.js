// Variables
let firstNumber = 5;
let secondNumber = 4;
// Instruction
while (firstNumber*secondNumber<250) {    
    document.write(`<div>${secondNumber}</div>`);
    secondNumber= firstNumber*secondNumber;
}