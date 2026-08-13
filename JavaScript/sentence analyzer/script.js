// Define a function that counts the number of vowels in a given sentence
function getVowelCount(sentence) {

  // Declare a string containing all vowels to check against
  const vowels = "aeiou";

  // Initialize a counter to track the number of vowels found
  let count = 0;

  // Loop through each character of the sentence converted to lowercase
  // toLowerCase() ensures uppercase vowels like "A" are also counted
  for (const char of sentence.toLowerCase()) {

    // If the current character is found in the vowels string, increment the counter
    if (vowels.includes(char)) {
      count++;
    }
  }

  // Return the final vowel count
  return count;
}

// Call getVowelCount and store the result, then display it
const vowelCount = getVowelCount("Apples are tasty fruits");
console.log(`Vowel Count: ${vowelCount}`); // Expected output: Vowel Count: 7

// Define a function that counts the number of consonants in a given sentence
function getConsonantCount(sentence) {

  // Declare a string containing all consonants to check against
  const consonants = "bcdfghjklmnpqrstvwxyz";

  // Initialize a counter to track the number of consonants found
  let count = 0;

  // Loop through each character of the sentence converted to lowercase
  // toLowerCase() ensures uppercase consonants are also counted
  for (const char of sentence.toLowerCase()) {

    // If the current character is found in the consonants string, increment the counter
    if (consonants.includes(char)) {
      count++;
    }
  }

  // Return the final consonant count
  return count;
}

// Call getConsonantCount and store the result, then display it
const consonantCount = getConsonantCount("Coding is fun");
console.log(`Consonant Count: ${consonantCount}`); // Expected output: Consonant Count: 7

// Define a function that counts the number of punctuation marks in a given sentence
function getPunctuationCount(sentence) {

  // Declare a string containing all punctuation characters to check against
  const punctuations = ".,!?;:-()[]{}\"'–";

  // Initialize a counter to track the number of punctuation marks found
  let count = 0;

  // Loop through each character of the sentence
  // No toLowerCase() needed since punctuation is not affected by case
  for (const char of sentence) {

    // If the current character is found in the punctuations string, increment the counter
    if (punctuations.includes(char)) {
      count++;
    }
  }

  // Return the final punctuation count
  return count;
}

// Call getPunctuationCount and store the result, then display it
const punctuationCount = getPunctuationCount("WHAT?!?!?!?!?");
console.log(`Punctuation Count: ${punctuationCount}`); // Expected output: Punctuation Count: 9

// Define a function that counts the number of words in a given sentence
function getWordCount(sentence) {

  // If the sentence is empty or contains only spaces, return 0 immediately
  if (sentence.trim() === "") {
    return 0;
  }

  // Remove leading and trailing spaces, then split the sentence into an array of words by spaces
  const words = sentence.trim().split(" ");

  // Initialize a counter to track the number of valid words found
  let count = 0;

  // Loop through each word in the words array
  for (const word of words) {

    // Only count the word if it is not an empty string
    // This handles cases where multiple spaces appear between words
    if (word !== "") {
      count++;
    }
  }

  // Return the final word count
  return count;
}

// Call getWordCount and store the result, then display it
const wordCount = getWordCount("I love freeCodeCamp");
console.log(`Word Count: ${wordCount}`); // Expected output: Word Count: 3