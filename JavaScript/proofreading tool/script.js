// Define a function that checks whether a given word is a palindrome
// A palindrome reads the same forwards and backwards (e.g. "racecar", "level")
function isPalindrome(word) {

    // If the input is not a string, return false immediately
    if (typeof word !== 'string') return false;

    // Convert the word to lowercase to make the check case-insensitive
    const lowerWord = word.toLowerCase();

    // Reverse the word by splitting it into characters, reversing the array, and joining it back
    const reversedWord = lowerWord.split('').reverse().join('');

    // Return true if the original and reversed words are identical, false otherwise
    return lowerWord === reversedWord;
}

// Define a function that returns the indices of all non-palindrome words in an array
function findPalindromeBreaks(words) {

    // If the input is empty or missing, return an empty array
    if (!words || words.length === 0) return [];

    // Declare an array to store the indices of words that are not palindromes
    const breaks = [];

    // Loop through each word and check if it is a palindrome
    for (let i = 0; i < words.length; i++) {

        // If the word is not a palindrome, record its index as a "break" in the sequence
        if (!isPalindrome(words[i])) {
            breaks.push(i);
        }
    }

    // Return the array of indices where palindrome breaks occur
    return breaks;
}

// Define a function that finds the starting indices of any repeated phrases of a given length
function findRepeatedPhrases(words, phraseLength) {

    // If the input is invalid, the phrase length is out of bounds, or non-positive, return empty
    if (!words || phraseLength >= words.length || phraseLength <= 0) {
        return [];
    }

    // Declare an object to map each phrase to the list of indices where it starts
    const phraseMap = {};

    // Declare an array to store the indices of all repeated phrase occurrences
    const resultIndices = [];

    // Slide a window of phraseLength across the words array, building a phrase at each position
    for (let i = 0; i <= words.length - phraseLength; i++) {

        // Extract a phrase of the given length starting at index i and join the words with spaces
        const phrase = words.slice(i, i + phraseLength).join(' ');

        // Initialize the phrase's index list if it has not been seen before
        if (!phraseMap[phrase]) {
            phraseMap[phrase] = [];
        }

        // Record the starting index of this phrase occurrence
        phraseMap[phrase].push(i);
    }

    // Loop through the phrase map and collect indices of phrases that appear more than once
    for (const phrase in phraseMap) {
        if (phraseMap[phrase].length > 1) {

            // Spread all starting indices of the repeated phrase into the results array
            resultIndices.push(...phraseMap[phrase]);
        }
    }

    // Return the repeated phrase indices sorted in ascending order
    return resultIndices.sort((a, b) => a - b);
}

// Define a function that analyzes an array of texts, returning palindrome breaks
// and repeated phrase indices for each text
function analyzeTexts(texts, phraseLength) {

    // If the input is empty or missing, return an empty array
    if (!texts || texts.length === 0) return [];

    // Map over each text and return an analysis object for each one
    return texts.map(text => {
        return {

            // Find the starting indices of any repeated phrases of the given length in this text
            repeatedPhrases: findRepeatedPhrases(text, phraseLength),

            // Find the indices of words in this text that are not palindromes
            palindromeBreaks: findPalindromeBreaks(text)
        };
    });
}