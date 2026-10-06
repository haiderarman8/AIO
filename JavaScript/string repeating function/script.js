// Define a function that repeats a string a given number of times
function repeatStringNumTimes(str, num) {

  // Initialize an empty string to accumulate the repeated result
  let result = "";

  // Loop from 1 up to and including num, appending the string on each iteration
  for (let i = 1; i <= num; i++) {
    result += str; // Equivalent to result = result + str
  }

  // Return the final repeated string
  return result;
}