// program for a simple calculator
let result;

// take the operator input
const operator = "+";

// take the operand input
const number1 = 12;
const number2 = 22;

switch (operator) {
  case "+":
    result = number1 + number2;
    console.log(`${number1} + ${number2} = ${result}`);
    break;
  case "-":
    result = number1 - number2;
    console.log(`${number1} - ${number2} = ${result}`);
    break;
  case "*":
    result = number1 * number2;
    console.log(`${number1} * ${number2} = ${result}`);
    break;
  case "/":
    result = number1 / number2;
    console.log(`${number1} / ${number2} = ${result}`);
    break;

  default:
    console.log("Invalid operator");
    break;
}
