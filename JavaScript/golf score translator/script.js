// Define a function that returns a golf score name based on par and strokes taken
function golfScore(par, strokes) {

    // Return "Hole-in-one!" if the ball was sunk in a single stroke
    if (strokes === 1) {
        return "Hole-in-one!";

        // Return "Eagle" if strokes are 2 or more under par
    } else if (strokes <= par - 2) {
        return "Eagle";

        // Return "Birdie" if strokes are exactly 1 under par
    } else if (strokes === par - 1) {
        return "Birdie";

        // Return "Par" if strokes match the par exactly
    } else if (strokes === par) {
        return "Par";

        // Return "Bogey" if strokes are exactly 1 over par
    } else if (strokes === par + 1) {
        return "Bogey";

        // Return "Double Bogey" if strokes are exactly 2 over par
    } else if (strokes === par + 2) {
        return "Double Bogey";

        // Return "Go Home!" if strokes are 3 or more over par
    } else {
        return "Go Home!";
    }
}

// Test Hole-in-one (strokes = 1 regardless of par)
console.log(golfScore(1, 1)); // Expected output: Hole-in-one!
console.log(golfScore(3, 1)); // Expected output: Hole-in-one!
console.log(golfScore(4, 1)); // Expected output: Hole-in-one!
console.log(golfScore(5, 1)); // Expected output: Hole-in-one!

// Test Eagle (2 or more under par)
console.log(golfScore(4, 2)); // Expected output: Eagle
console.log(golfScore(5, 2)); // Expected output: Eagle

// Test Birdie (1 under par)
console.log(golfScore(3, 2)); // Expected output: Birdie
console.log(golfScore(4, 3)); // Expected output: Birdie
console.log(golfScore(5, 4)); // Expected output: Birdie

// Test Par (strokes match par exactly)
console.log(golfScore(3, 3)); // Expected output: Par
console.log(golfScore(4, 4)); // Expected output: Par
console.log(golfScore(5, 5)); // Expected output: Par

// Test Bogey (1 over par)
console.log(golfScore(3, 4)); // Expected output: Bogey
console.log(golfScore(4, 5)); // Expected output: Bogey
console.log(golfScore(5, 6)); // Expected output: Bogey

// Test Double Bogey (2 over par)
console.log(golfScore(3, 5)); // Expected output: Double Bogey
console.log(golfScore(4, 6)); // Expected output: Double Bogey
console.log(golfScore(5, 7)); // Expected output: Double Bogey

// Test Go Home! (3 or more over par)
console.log(golfScore(3, 7)); // Expected output: Go Home!
console.log(golfScore(4, 8)); // Expected output: Go Home!
console.log(golfScore(5, 9)); // Expected output: Go Home!