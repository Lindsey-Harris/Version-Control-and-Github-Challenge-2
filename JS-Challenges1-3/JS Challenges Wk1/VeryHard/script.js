// The parseFloat() function parses a string argument and returns a floating point number.
let number1 = parseInt(prompt('Enter a number'));

let operator = prompt('Enter operator to perform the calculation ( either +, -, * or / ): ');

let number2 = parseInt(prompt('Enter a number'));

if (operator == '+') { // use the (addition) operator to add two numbers
   result = (number1 + number2);
}

else if (operator == '-') { // use the (subtraction) operator to subtract two numbers
    result = (number1 - number2);
}
else if (operator == '*') { // use the (multiplication) operator to multiply two numbers
    result = (number1 * number2);
}
else {
    result = (number1 / number2); // use the (division) operator to divide two numbers
}
// // displays the result of the Calculator
// // displays an alert box with a message and an OK button
window.alert(" Result is " + result);