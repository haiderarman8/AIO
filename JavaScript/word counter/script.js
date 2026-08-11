// Define a function that prints each character of a string on a separate line
function printCharacters(str) {

  // Loop through each character in the string one at a time using for...of
  for (const char of str) {

    // Print the current character to the console
    console.log(char);
  }
}

// Call printCharacters with "hello" — prints h, e, l, l, o each on a new line
printCharacters("hello");

// Define a function that counts how many times a word appears in an array of words
function getMatchedWordCount(sentence, match) {

  // Initialize a counter variable to track the number of matches found
  let count = 0;

  // Loop through each word in the sentence array one at a time using for...of
  for (const word of sentence) {

    // If the current word exactly matches the target word, increment the counter
    if (word === match) {
      count++;
    }

    // Log the current word being checked, the target word, and the running count
    console.log(`Checking "${word}" against "${match}" | Running count: ${count}`);
  }

  // Return the final count after all words have been checked
  return count;
}

// Call getMatchedWordCount with a sentence array and "really" as the target word
// Expected output: 3 (since "really" appears three times in the array)
console.log(
  getMatchedWordCount(
    ["I", "really", "really", "really", "like", "to", "code"],
    "really"
  )
);

// Call getMatchedWordCount with a different sentence array and "dandy" as the target word
// Expected output: 1 (since "dandy" appears once in the array)
console.log(getMatchedWordCount(["Do", "not", "fear", "the", "dandy", "lion"], "dandy"));