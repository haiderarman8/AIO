// Declare user input with extra spaces
const userInput = "   Hello World!   ";

// Display original input
console.log("Original input:");
console.log(userInput);

// Remove whitespace from both ends
const cleanedInput = userInput.trim();
console.log("Result of trimming whitespace from both ends:");
console.log(cleanedInput); // Print trimmed input

// Remove whitespace from the start only
const trimmedStart = userInput.trimStart();
console.log("After using the trimStart() method, leading spaces removed:");
console.log(trimmedStart); // Print result

// Remove whitespace from the end only
const trimmedEnd = userInput.trimEnd();
console.log("After using the trimEnd() method, trailing spaces removed:");
console.log(trimmedEnd); // Print result

// Convert text to uppercase
const upperCaseInput = cleanedInput.toUpperCase();
console.log("Result of using the toUpperCase() method:");
console.log(upperCaseInput); // Print uppercase version

// Convert text to lowercase
const lowerCaseInput = cleanedInput.toLowerCase();
console.log("Result of using the toLowerCase() method:");
console.log(lowerCaseInput); // Print lowercase version

// Declare a lowercase word
const lowercaseWord = "camelcase";

// Convert part of the word to uppercase (manual camelCase example)
const camelCasedVersion = lowercaseWord.slice(0, 5) + lowercaseWord[5].toUpperCase() + lowercaseWord.slice(-3);

// Display camelCase result
console.log("Camel cased version:");
console.log(camelCasedVersion); // Print camelCase word