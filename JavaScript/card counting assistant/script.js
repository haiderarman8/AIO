// Declare a global count variable to track the running card count
let count = 0;

// Define a function that updates and returns the card count with a betting suggestion
function cardCounter(card) {

    // Increment count for low cards (2-6), these favor the player
    if (card >= 2 && card <= 6) {
        count++;

        // Decrement count for high cards (10, J, Q, K, A), these favor the dealer
    } else if (card === 10 || card === "J" || card === "Q" || card === "K" || card === "A") {
        count--;

        // Mid cards (7, 8, 9) have no effect on the count
    }

    // Determine betting suggestion based on current count
    // Positive count means Bet, zero or negative means Hold
    const suggestion = count > 0 ? "Bet" : "Hold";

    // Return the current count and betting suggestion separated by a space
    return `${count} ${suggestion}`;
}

// Test 1: Cards 2, 3, 4, 5 played before this call (+4 count), then card 6 pushes to +5
console.log(cardCounter(2));
console.log(cardCounter(3));
console.log(cardCounter(4));
console.log(cardCounter(5));
console.log(cardCounter(6)); // Expected output: 5 Bet

// Reset count for next test
count = 0;

// Test 2: Cards 7, 8 have no effect (0 count), then card 9 also has no effect
console.log(cardCounter(7));
console.log(cardCounter(8));
console.log(cardCounter(9)); // Expected output: 0 Hold

// Reset count for next test
count = 0;

// Test 3: Cards 10, J, Q, K are high cards (-4 count), then A pushes to -5
console.log(cardCounter(10));
console.log(cardCounter("J"));
console.log(cardCounter("Q"));
console.log(cardCounter("K"));
console.log(cardCounter("A")); // Expected output: -5 Hold

// Reset count for next test
count = 0;

// Test 4: 3 increments (+1), 7 holds (0 effect), Q decrements (-1 = 0... wait, +1-1=0), 8 holds, A decrements to -1
console.log(cardCounter(3));
console.log(cardCounter(7));
console.log(cardCounter("Q"));
console.log(cardCounter(8));
console.log(cardCounter("A")); // Expected output: -1 Hold

// Reset count for next test
count = 0;

// Test 5: 2 increments (+1), J decrements (0), 9 holds (0), 2 increments (+1), 7 holds
console.log(cardCounter(2));
console.log(cardCounter("J"));
console.log(cardCounter(9));
console.log(cardCounter(2));
console.log(cardCounter(7)); // Expected output: 1 Bet

// Reset count for next test
count = 0;

// Test 6: 2 increments (+1), 2 increments (+2), 10 decrements (+1)
console.log(cardCounter(2));
console.log(cardCounter(2));
console.log(cardCounter(10)); // Expected output: 1 Bet

// Reset count for next test
count = 0;

// Test 7: 3 increments (+1), 2 increments (+2), A decrements (+1), 10 decrements (0), K decrements (-1)
console.log(cardCounter(3));
console.log(cardCounter(2));
console.log(cardCounter("A"));
console.log(cardCounter(10));
console.log(cardCounter("K")); // Expected output: -1 Hold