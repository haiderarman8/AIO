// Define a function that checks if the argument is strictly a boolean value
function booWho(bool) {
    // Use typeof to check if the value is exactly "boolean" (true or false)
    // Returns true only for actual booleans, false for everything else
    return typeof bool === "boolean";
}

// Test with actual boolean values
console.log(booWho(true));  // Expected output: true
console.log(booWho(false)); // Expected output: true

// Test with non-boolean values — all should return false
console.log(booWho([1, 2, 3]));   // Expected output: false (array)
console.log(booWho([].slice));    // Expected output: false (function)
console.log(booWho({ "a": 1 })); // Expected output: false (object)
console.log(booWho(1));           // Expected output: false (number)
console.log(booWho(NaN));         // Expected output: false (NaN)
console.log(booWho("a"));         // Expected output: false (string)
console.log(booWho("true"));      // Expected output: false (string, not a real boolean)
console.log(booWho("false"));     // Expected output: false (string, not a real boolean)