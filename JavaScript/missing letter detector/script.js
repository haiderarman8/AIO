// Define a function that finds the first missing letter in a consecutive alphabetical string
function fearNotLetter(str) {

    // Loop through each character in the string by index
    for (let i = 0; i < str.length; i++) {

        // Check if the current character's char code is not what it should be
        // In a consecutive sequence, each character's char code should equal
        // the first character's char code plus its index position
        // e.g. "abce" — 'a' is 97, so index 0 = 97, index 1 = 98, index 2 = 99, index 3 should be 100 but 'e' is 101
        if (str.charCodeAt(i) !== str.charCodeAt(0) + i) {

            // The missing letter sits just before the current character
            // so subtract 1 from the current char code to get it
            // then convert the char code back to a letter using String.fromCharCode()
            return String.fromCharCode(str.charCodeAt(i) - 1);
        }
    }

    // If no missing letter is found, return undefined
    return undefined;
}

// Test with various strings that have one or more missing letters
console.log(fearNotLetter("abce"));                      // Expected output: "d"
console.log(fearNotLetter("abcdefghjklmno"));            // Expected output: "i"
console.log(fearNotLetter("stvwx"));                     // Expected output: "u"
console.log(fearNotLetter("bcdf"));                      // Expected output: "e"

// Test with a complete alphabet — no missing letters, should return undefined
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz")); // Expected output: undefined