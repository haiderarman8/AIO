// Declare an empty array to store lunch menu items
let lunches = [];

// Define a function that adds a lunch item to the end of the menu
function addLunchToEnd(arr, lunch) {
    // Add the new item to the end of the array using push()
    arr.push(lunch);
    console.log(`${lunch} added to the end of the lunch menu.`);

    // Return the updated array
    return arr;
}

// Define a function that adds a lunch item to the start of the menu
function addLunchToStart(arr, lunch) {
    // Add the new item to the beginning of the array using unshift()
    arr.unshift(lunch);
    console.log(`${lunch} added to the start of the lunch menu.`);

    // Return the updated array
    return arr;
}

// Define a function that removes the last lunch item from the menu
function removeLastLunch(arr) {
    // If the array is empty, log a message and stop
    if (arr.length === 0) {
        console.log("No lunches to remove.");
        return arr;
    }

    // Store the last item before removing it so it can be referenced in the log
    const removedLunch = arr[arr.length - 1];

    // Remove the last item from the array using pop()
    arr.pop();
    console.log(`${removedLunch} removed from the end of the lunch menu.`);

    // Return the updated array
    return arr;
}

// Define a function that removes the first lunch item from the menu
function removeFirstLunch(arr) {
    // If the array is empty, log a message and stop
    if (arr.length === 0) {
        console.log("No lunches to remove.");
        return arr;
    }

    // Store the first item before removing it so it can be referenced in the log
    const removedLunch = arr[0];

    // Remove the first item from the array using shift()
    arr.shift();
    console.log(`${removedLunch} removed from the start of the lunch menu.`);

    // Return the updated array
    return arr;
}

// Define a function that randomly selects and logs a lunch item from the menu
function getRandomLunch(arr) {
    // If the array is empty, log a message and stop
    if (arr.length === 0) {
        console.log("No lunches available.");
        return;
    }

    // Generate a random index within the bounds of the array
    const randomIndex = Math.floor(Math.random() * arr.length);

    // Log the randomly selected item without modifying the array
    console.log(`Randomly selected lunch: ${arr[randomIndex]}`);
}

// Define a function that displays all current lunch menu items
function showLunchMenu(arr) {
    // If the array is empty, log a message and stop
    if (arr.length === 0) {
        console.log("The menu is empty.");
        return;
    }

    // Join all items with ", " and display them as a formatted menu
    console.log(`Menu items: ${arr.join(", ")}`);
}

// Test addLunchToEnd
addLunchToEnd(lunches, "Tacos");                          // Expected log: Tacos added to the end of the lunch menu.
console.log(addLunchToEnd(["Pizza", "Tacos"], "Burger")); // Expected output: ["Pizza", "Tacos", "Burger"]

// Test addLunchToStart
addLunchToStart(lunches, "Sushi");                           // Expected log: Sushi added to the start of the lunch menu.
console.log(addLunchToStart(["Burger", "Sushi"], "Pizza")); // Expected output: ["Pizza", "Burger", "Sushi"]

// Test removeLastLunch
removeLastLunch([]);                                              // Expected log: No lunches to remove.
removeLastLunch(["Stew", "Soup", "Toast"]);                      // Expected log: Toast removed from the end of the lunch menu.
console.log(removeLastLunch(["Sushi", "Pizza", "Noodles"]));     // Expected output: ["Sushi", "Pizza"]

// Test removeFirstLunch
removeFirstLunch([]);                                            // Expected log: No lunches to remove.
removeFirstLunch(["Salad", "Eggs", "Cheese"]);                   // Expected log: Salad removed from the start of the lunch menu.
console.log(removeFirstLunch(["Sushi", "Pizza", "Burger"]));     // Expected output: ["Pizza", "Burger"]

// Test getRandomLunch
getRandomLunch([]);                                    // Expected log: No lunches available.
getRandomLunch(["Tacos", "Sushi", "Pizza", "Burger"]); // Expected log: Randomly selected lunch: [random item]

// Test showLunchMenu
showLunchMenu([]);                                          // Expected log: The menu is empty.
showLunchMenu(["Greens", "Corns", "Beans"]);               // Expected log: Menu items: Greens, Corns, Beans
showLunchMenu(["Pizza", "Burger", "Fries", "Salad"]);      // Expected log: Menu items: Pizza, Burger, Fries, Salad