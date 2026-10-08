// Define a function that checks if every letter in the second word exists in the first word
function mutation(arr) {

    // Convert both words to lowercase to make the comparison case-insensitive
    const firstWord = arr[0].toLowerCase();
    const secondWord = arr[1].toLowerCase();

    // Loop through each character in the second word
    for (let i = 0; i < secondWord.length; i++) {

        // If the current character is not found anywhere in the first word, return false
        // indexOf() returns -1 when the character is not found
        if (firstWord.indexOf(secondWord[i]) === -1) {
            return false;
        }
    }

    // If all characters in the second word were found in the first word, return true
    return true;
}

// Test cases where every letter in the second word exists in the first word
console.log(mutation(["hello", "hey"]));                          // Expected output: false ("y" not in "hello")
console.log(mutation(["hello", "Hello"]));                        // Expected output: true (case-insensitive match)
console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));  // Expected output: true (all letters present)
console.log(mutation(["Mary", "Army"]));                          // Expected output: true (same letters)
console.log(mutation(["Mary", "Aarmy"]));                         // Expected output: true (duplicates don't matter)
console.log(mutation(["Alien", "line"]));                         // Expected output: true (all letters present)
console.log(mutation(["floor", "for"]));                          // Expected output: true (all letters present)
console.log(mutation(["hello", "neo"]));                          // Expected output: false ("n" not in "hello")
console.log(mutation(["voodoo", "no"]));                          // Expected output: true (all letters present)
console.log(mutation(["ate", "date"]));                           // Expected output: false ("d" not in "ate")
console.log(mutation(["Tiger", "Zebra"]));                        // Expected output: false ("z" not in "tiger")
console.log(mutation(["Noel", "Ole"]));                           // Expected output: true (all letters present)