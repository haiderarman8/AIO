// Declare five unique fortune strings
const fortune1 = "A great opportunity is just around the corner.";
const fortune2 = "Your hard work will soon pay off.";
const fortune3 = "Adventure awaits you on the horizon.";
const fortune4 = "A surprise is heading your way.";
const fortune5 = "Good things come to those who wait.";

// Generate a random integer between 1 and 5 (inclusive)
// Math.random() returns a value from 0 to <1, so multiplying by 5 and flooring gives 0-4, then +1 shifts it to 1-5
const randomNumber = Math.floor(Math.random() * 5) + 1;

// Declare variable to hold the selected fortune
let selectedFortune;

// Assign a fortune based on the value of randomNumber
if (randomNumber === 1) {
    selectedFortune = fortune1;
} else if (randomNumber === 2) {
    selectedFortune = fortune2;
} else if (randomNumber === 3) {
    selectedFortune = fortune3;
} else if (randomNumber === 4) {
    selectedFortune = fortune4;
} else {
    selectedFortune = fortune5;
}

// Display the randomly selected fortune
console.log(selectedFortune);