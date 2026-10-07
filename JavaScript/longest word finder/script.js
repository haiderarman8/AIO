// Define a function that returns the length of the longest word in a given sentence
function findLongestWordLength(sentence) {

    // Split the sentence into an array of individual words using spaces as the delimiter
    const words = sentence.split(" ");

    // Initialize a variable to track the longest word length found so far
    let maxLength = 0;

    // Loop through each word in the words array
    for (let i = 0; i < words.length; i++) {
        const currentWord = words[i];

        // If the current word is longer than the current maximum, update maxLength
        if (currentWord.length > maxLength) {
            maxLength = currentWord.length;
        }
    }

    // Return the length of the longest word found
    return maxLength;
}

// Test with various sentences
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));         // Expected output: 6 ("jumped")
console.log(findLongestWordLength("May the force be with you"));                            // Expected output: 5 ("force")
console.log(findLongestWordLength("Google do a barrel roll"));                              // Expected output: 6 ("Google" / "barrel")
console.log(findLongestWordLength("Googling do a barrel roll"));                            // Expected output: 8 ("Googling")
console.log(findLongestWordLength("What is the average airspeed velocity of an unladen swallow")); // Expected output: 8 ("airspeed" / "velocity" / "unladen")
console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology")); // Expected output: 19 ("otorhinolaryngology")