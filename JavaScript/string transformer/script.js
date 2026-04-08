// Declare original string
const originalString = "I love cats.";

// Display original string
console.log("Original string:");
console.log(originalString);

// Replace "cats" with "dogs"
const replacedString = originalString.replace("cats", "dogs");
console.log("After using the replace() method:");
console.log(replacedString); // Print updated string

// Declare sentence with multiple "cats"
const exampleSentence = "I love cats and cats are so much fun!";

// Display original sentence
console.log("Original sentence:");
console.log(exampleSentence);

// Replace all occurrences of "cats" with "dogs"
const dogsOnlySentence = exampleSentence.replaceAll("cats", "dogs");
console.log("Replacing all occurrences of cats with dogs:");
console.log(dogsOnlySentence); // Print updated sentence

// Declare learning sentence
const learningSentence = "I love learning!";

// Display original learning sentence
console.log("Original learning sentence:");
console.log(learningSentence);

// Repeat the word "love" 3 times and remove extra space at the end
const repeatedLove = "love ".repeat(3).trimEnd();
console.log(repeatedLove); // Print repeated word

// Create new sentence using repeated words
const newSentence = `I ${repeatedLove} learning.`;
console.log(newSentence); // Print final sentence