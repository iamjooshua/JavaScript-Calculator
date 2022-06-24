const number1 = parseFloat(prompt ('Enter the first number: '));  
const number2 = parseFloat(prompt ('Enter the second number: '));  

const operator = prompt('Enter any of the operator to perform the calculation ( either +, -, * or / ): ');

if (operator == '+') { // Addition
    result = number1 + number2;  
}
else if (operator == '-') { // Subtraction
    result = number1 - number2;  
}  
else if (operator == '*') { // Multiplication
    result = number1 * number2;  
}  
else {  
    result = number1 / number2; // Division
}

window.alert(" Result is " + result);  