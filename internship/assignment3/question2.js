let num1 = Number(prompt("Enter the first number:"));
let num2 = Number(prompt("Enter the second number:"));
let operator = prompt("Enter the operation (+, -, *, /):");

let result;

if (operator == "+") {
    result = num1 + num2;
} else if (operator == "-") {
    result = num1 - num2;
} else if (operator == "*") {
    result = num1 * num2;
} else if (operator == "/") {
    result = num1 / num2;
}


document.write("First Number: " + num1 + " " );
document.write("Second Number: " + num2 + " " );
document.write("Operation: " + operator + " " );
document.write("Result: " + result + " " );