// Define a function that checks if a string ends with a given target string
// Uses slice() instead of the built-in endsWith() method
function confirmEnding(str, target) {

    // Slice the end of str using the target's length as a negative index
    // A negative index in slice() counts backwards from the end of the string
    // For example: "Bastian".slice(-1) returns "n"
    return str.slice(-target.length) === target;
}

// Test cases where the string ends with the target — should return true
console.log(confirmEnding("Bastian", "n"));                  // Expected output: true
console.log(confirmEnding("Congratulation", "on"));          // Expected output: true
console.log(confirmEnding("He has to give me a new name", "name")); // Expected output: true
console.log(confirmEnding("Open sesame", "same"));           // Expected output: true
console.log(confirmEnding("Abstraction", "action"));         // Expected output: true

// Test cases where the string does not end with the target — should return false
console.log(confirmEnding("Connor", "n"));                   // Expected output: false
console.log(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification")); // Expected output: false
console.log(confirmEnding("Open sesame", "sage"));           // Expected output: false
console.log(confirmEnding("Open sesame", "game"));           // Expected output: false
console.log(confirmEnding("If you want to save our world, you must hurry. We don't know how much longer we can withstand the nothing", "mountain")); // Expected output: false