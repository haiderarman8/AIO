// Define a function that truncates a string to a given length and appends "..." if needed
function truncateString(str, num) {

    // If the string length exceeds the limit, slice it down to num characters and append "..."
    if (str.length > num) {
        return str.slice(0, num) + "...";
    }

    // If the string is equal to or shorter than the limit, return it unchanged
    return str;
}

// Test with a string longer than the given limit
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));  // Expected output: A-tisket...
console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11)); // Expected output: Peter Piper...
console.log(truncateString("A-", 1));                                            // Expected output: A...
console.log(truncateString("Absolutely Longer", 2));                             // Expected output: Ab...

// Test with a string equal to or shorter than the given limit — should return unchanged
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));     // Expected output: A-tisket a-tasket A green and yellow basket
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2)); // Expected output: A-tisket a-tasket A green and yellow basket