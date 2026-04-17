// Convert Celsius to Fahrenheit using standard formula
function convertCtoF(temp) {
    return temp * (9 / 5) + 32
}

console.log(convertCtoF(0));   // Expected output: 32
console.log(convertCtoF(-30)); // Expected output: -22
console.log(convertCtoF(-10)); // Expected output: 14
console.log(convertCtoF(0));   // Expected output: 32
console.log(convertCtoF(20));  // Expected output: 68