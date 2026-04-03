// Display greeting message
console.log("Hi there!");

// Declare bot name
const botName = "teacherBot";

// Create greeting using template literals
const greeting = `My name is ${botName}.`;
console.log(greeting); // Print greeting

// Declare subject and topic
const subject = "JavaScript";
const topic = "strings";

// Create sentence about today's lesson
const sentence = `Today, you will learn about ${topic} in ${subject}.`;
console.log(sentence); // Print lesson sentence

// Introduce length property example
const strLengthIntro = `Here is an example of using the length property on the word ${subject}.`;
console.log(strLengthIntro);

// Print length of subject string
console.log(subject.length);

// Show length example for topic
console.log(`Here is an example of using the length property on the word ${topic}.`);
console.log(topic.length); // Print length of topic

// Access first character of subject
console.log(`Here is an example of accessing the first letter in the word ${subject}.`);
console.log(subject[0]); // Print first letter

// Access second character of subject
console.log(`Here is an example of accessing the second letter in the word ${subject}.`);
console.log(subject[1]); // Print second letter

// Access last character of subject
console.log(`Here is an example of accessing the last letter in the word ${subject}.`);

// Calculate last character using length
const lastCharacter = subject[subject.length - 1];
console.log(lastCharacter); // Print last letter

// Declare a sentence
const learningIsFunSentence = "Learning is fun.";

// Introduce indexOf examples
console.log("Here are examples of finding the positions of substrings in the sentence.");

// Find position of "Learning"
console.log(learningIsFunSentence.indexOf("Learning"));

// Find position of "fun"
console.log(learningIsFunSentence.indexOf("fun"));

// Try finding "learning" (case-sensitive, will return -1)
console.log(learningIsFunSentence.indexOf("learning"));

// Closing message
console.log("I hope you enjoyed learning today.");
