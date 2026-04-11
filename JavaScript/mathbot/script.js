// Declare bot name and greeting message using template literal
const botName = "MathBot";
const greeting = `Hi there! My name is ${botName} and I am here to teach you about the Math object!`;

// Display greeting
console.log(greeting);

// Introduce Math.random() method
console.log("The Math.random() method returns a pseudo random number greater than or equal to 0 and less than 1.");

// Generate and display a random number between 0 and 1
const randomNum = Math.random();
console.log(randomNum);

// Introduce generating a random number within a range
console.log("Now, generate a random number between two values.");

// Declare min and max bounds for the range
const min = 1;
const max = 100;

// Generate and display a random number between min and max
const randomNum2 = Math.random() * (max - min) + min;
console.log(randomNum2);

// Introduce Math.floor() method
console.log("The Math.floor() method rounds the value down to the nearest whole integer.");

// Round 6.7 down to the nearest integer and display the result
const numRoundedDown = Math.floor(6.7);
console.log(numRoundedDown); // Expected output: 6

// Introduce generating a random integer within a range
console.log("Now, generate a random integer between two values.");

// Generate and display a random integer between min and max using Math.floor()
const randomInt = Math.floor(Math.random() * (max - min) + min);
console.log(randomInt);

// Introduce Math.ceil() method
console.log("The Math.ceil() method rounds the value up to the nearest whole integer.");

// Round 3.2 up to the nearest integer and display the result
const numRoundedUp = Math.ceil(3.2);
console.log(numRoundedUp); // Expected output: 4

// Introduce Math.round() method
console.log("The Math.round() method rounds the value to the nearest whole integer.");

// Round 2.7 to the nearest integer and display the result
const numRounded = Math.round(2.7);
console.log(numRounded); // Expected output: 3

// Round 11.2 to the nearest integer and display the result
const numRounded2 = Math.round(11.2);
console.log(numRounded2); // Expected output: 11

// Introduce Math.max() and Math.min() methods
console.log("The Math.max() and Math.min() methods are used to get the maximum and minimum number from a range.");

// Find and display the largest number from the given values
const maxNum = Math.max(3, 125, 55, 24);
console.log(maxNum); // Expected output: 125

// Find and display the smallest number from the given values
const minNum = Math.min(6, 90, 14, 90, 2);
console.log(minNum); // Expected output: 2

// Display closing message
console.log("It was fun learning about the different Math methods with you!");