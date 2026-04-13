// Define a function that returns the sum of two numbers
function calculateSum(num1, num2) {
    return num1 + num2;
}

// Test calculateSum with different values
console.log(calculateSum(2, 5));   // Expected output: 7
console.log(calculateSum(10, 10)); // Expected output: 20
console.log(calculateSum(5, 5));   // Expected output: 10

// Define a function that returns the difference of two numbers
function calculateDifference(num1, num2) {
    return num1 - num2;
}

// Test calculateDifference with different values
console.log(calculateDifference(22, 5)); // Expected output: 17
console.log(calculateDifference(12, 1)); // Expected output: 11
console.log(calculateDifference(17, 9)); // Expected output: 8

// Define a function that returns the product of two numbers
function calculateProduct(num1, num2) {
    return num1 * num2;
}

// Test calculateProduct with a set of values
console.log(calculateProduct(13, 5)); // Expected output: 65

// Define a function that returns the quotient of two numbers
// Returns an error message if the divisor is 0 to prevent division by zero
function calculateQuotient(num1, num2) {
    return num2 === 0 ? "Error: Division by zero" : num1 / num2;
}

// Test calculateQuotient with a valid division and a division by zero case
console.log(calculateQuotient(7, 11)); // Expected output: 0.6363...
console.log(calculateQuotient(3, 0));  // Expected output: Error: Division by zero

// Define a function that returns the square of a number using the exponentiation operator (**)
function calculateSquare(num) {
    return num ** 2;
}

// Test calculateSquare with different values
console.log(calculateSquare(2)); // Expected output: 4
console.log(calculateSquare(9)); // Expected output: 81

// Define a function that returns the square root of a number using Math.sqrt()
function calculateSquareRoot(num) {
    return Math.sqrt(num);
}

// Test calculateSquareRoot with perfect squares
console.log(calculateSquareRoot(25));  // Expected output: 5
console.log(calculateSquareRoot(100)); // Expected output: 10