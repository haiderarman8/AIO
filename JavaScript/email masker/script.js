// Define a function that masks the local part of an email address
// The first and last characters are kept, and everything in between is replaced with asterisks
function maskEmail(email) {

    // Split the email into local part and domain at the "@" symbol
    const atIndex = email.indexOf("@");
    const localPart = email.slice(0, atIndex);
    const domain = email.slice(atIndex);

    // Extract the first and last characters of the local part
    const firstChar = localPart[0];
    const lastChar = localPart[localPart.length - 1];

    // Create a string of asterisks to replace the middle characters
    // The number of asterisks equals the number of hidden characters (length minus first and last)
    const maskedMiddle = "*".repeat(localPart.length - 2);

    // Combine the first character, masked middle, last character, and domain
    return firstChar + maskedMiddle + lastChar + domain;
}

// Declare an email variable with a valid email address
const email = "haider@example.com";

// Test maskEmail with various email addresses
console.log(maskEmail("apple.pie@example.com"));  // Expected output: a*******e@example.com
console.log(maskEmail("freecodecamp@example.com")); // Expected output: f**********p@example.com
console.log(maskEmail("info@test.dev"));           // Expected output: i**o@test.dev
console.log(maskEmail("user@domain.org"));         // Expected output: u**r@domain.org

// Log the result of calling maskEmail with the declared email variable
console.log(maskEmail(email));