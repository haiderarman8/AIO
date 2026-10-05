// Declare the number to calculate the factorial of
const num = 11;

// Define a function that calculates the factorial of a given number
// The factorial of n is the product of all integers from 1 to n (e.g. 5! = 5 * 4 * 3 * 2 * 1)
function factorialCalculator(num) {

    // Initialize the result to 1, since multiplying by 1 does not change the product
    let factorial = 1;

    // Loop from 1 up to and including num, multiplying the result by each number
    for (let i = 1; i <= num; i++) {
        factorial *= i; // Equivalent to factorial = factorial * i
    }

    // Return the final factorial result
    return factorial;
}

// Call factorialCalculator with num and store the result
const factorial = factorialCalculator(num);

// Build a result message using a template literal and display it
const resultMsg = `Factorial of ${num} is ${factorial}`;
console.log(resultMsg); // Expected output: Factorial of 11 is 39916800