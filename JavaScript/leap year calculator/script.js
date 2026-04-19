// Define a function that checks if a given year is a leap year
function isLeapYear(year) {

    // A leap year is divisible by 4, except for century years (divisible by 100)
    // Century years must also be divisible by 400 to qualify as a leap year
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return `${year} is a leap year.`;
    } else {
        return `${year} is not a leap year.`;
    }
}

// Declare a year variable to check if it is a leap year
const year = 2024;

// Call isLeapYear with the year variable and store the returned message
const result = isLeapYear(year);

// Display the result
console.log(result); // Expected output: 2024 is a leap year.

// Test with additional years to verify all leap year rules
console.log(isLeapYear(2000)); // Expected output: 2000 is a leap year. (divisible by 400)
console.log(isLeapYear(1900)); // Expected output: 1900 is not a leap year. (divisible by 100 but not 400)
console.log(isLeapYear(2023)); // Expected output: 2023 is not a leap year. (not divisible by 4)