// Declare a sentence
const fccSentence = "freeCodeCamp is a great place to learn web development.";

// Introduce includes() method examples
console.log("Here are some examples of the includes() method:");

// Check if "freeCodeCamp" exists in the sentence
const hasFreeCodeCamp = fccSentence.includes("freeCodeCamp");
console.log(`fccSentence.includes("freeCodeCamp") returns ${hasFreeCodeCamp} because the word "freeCodeCamp" is in the sentence.`);

// Check if "JavaScript" exists in the sentence
const hasJavaScript = fccSentence.includes("JavaScript");
console.log(`fccSentence.includes("JavaScript") returns ${hasJavaScript} because the word "JavaScript" is not in the sentence.`);

// Check for lowercase "freecodecamp" (case-sensitive example)
const hasLowercaseFCC = fccSentence.includes("freecodecamp");
console.log(`fccSentence.includes("freecodecamp") returns ${hasLowercaseFCC} because includes is case-sensitive.`);

// Declare a new message
const message = "Welcome to freeCodeCamp!";

// Introduce slice() method examples
console.log("Here are some examples of the slice() method:");

// Extract "freeCodeCamp" from the message
const platform = message.slice(11, 23);
console.log(`The word "${platform}" was sliced from the message.`);

// Extract the first word
const greetingWord = message.slice(0, 7);
console.log(`The first word is "${greetingWord}".`);

// Extract last character using negative index
const endPunctuation = message.slice(-1);
console.log(`The ending punctuation mark is a "${endPunctuation}"`);

// Final message
console.log("Workshop complete! You now know how to use includes() and slice().");