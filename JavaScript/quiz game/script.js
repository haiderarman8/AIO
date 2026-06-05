// Declare an array of quiz question objects, each with a category, question, choices, and correct answer
const questions = [
    {
        category: "Science",
        question: "What is the chemical symbol for water?",
        choices: ["H2O", "CO2", "O2"],
        answer: "H2O"
    },
    {
        category: "Geography",
        question: "What is the capital city of Japan?",
        choices: ["Beijing", "Tokyo", "Seoul"],
        answer: "Tokyo"
    },
    {
        category: "Math",
        question: "What is the value of Pi rounded to two decimal places?",
        choices: ["3.12", "3.14", "3.16"],
        answer: "3.14"
    },
    {
        category: "History",
        question: "In which year did World War II end?",
        choices: ["1943", "1944", "1945"],
        answer: "1945"
    },
    {
        category: "Technology",
        question: "What does CPU stand for?",
        choices: ["Central Processing Unit", "Computer Personal Unit", "Central Program Utility"],
        answer: "Central Processing Unit"
    }
];

// Define a function that returns a random question object from the questions array
function getRandomQuestion(questionsArr) {
    // Generate a random index within the bounds of the array
    const randomIndex = Math.floor(Math.random() * questionsArr.length);

    // Return the question object at the random index
    return questionsArr[randomIndex];
}

// Define a function that returns a random choice from a question's choices array
function getRandomComputerChoice(choices) {
    // Generate a random index within the bounds of the choices array
    const randomIndex = Math.floor(Math.random() * choices.length);

    // Return the choice at the random index
    return choices[randomIndex];
}

// Define a function that checks if the computer's choice matches the correct answer
function getResults(question, computerChoice) {
    // Use strict equality to compare the computer's choice against the correct answer
    if (computerChoice === question.answer) {
        return "The computer's choice is correct!";
    } else {
        return `The computer's choice is wrong. The correct answer is: ${question.answer}`;
    }
}

// Pick a random question from the questions array
const randomQuestion = getRandomQuestion(questions);
console.log("Category:", randomQuestion.category);
console.log("Question:", randomQuestion.question);
console.log("Choices:", randomQuestion.choices);

// Pick a random answer from the selected question's choices
const computerChoice = getRandomComputerChoice(randomQuestion.choices);
console.log("Computer's choice:", computerChoice);

// Evaluate the computer's choice and display the result
const result = getResults(randomQuestion, computerChoice);
console.log(result);