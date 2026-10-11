// Define a function that splits an array into smaller arrays (chunks) of a given size
function chunkArrayInGroups(arr, size) {

    // Initialize an empty array to hold the chunked sub-arrays
    let chunked = [];

    // Loop through the array in steps of size, so each iteration starts a new chunk
    for (let i = 0; i < arr.length; i += size) {

        // Slice out a chunk of elements from index i up to (but not including) i + size
        // If the remaining elements are fewer than size, slice takes whatever is left
        chunked.push(arr.slice(i, i + size));
    }

    // Return the array of chunks
    return chunked;
}

// Test with various arrays and chunk sizes
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));       // Expected output: [["a", "b"], ["c", "d"]]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3));         // Expected output: [[0, 1, 2], [3, 4, 5]]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2));         // Expected output: [[0, 1], [2, 3], [4, 5]]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));         // Expected output: [[0, 1, 2, 3], [4, 5]]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3));      // Expected output: [[0, 1, 2], [3, 4, 5], [6]]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4)); // Expected output: [[0, 1, 2, 3], [4, 5, 6, 7], [8]]
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)); // Expected output: [[0, 1], [2, 3], [4, 5], [6, 7], [8]]