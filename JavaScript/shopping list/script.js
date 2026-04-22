// Display grocery shopping list header
console.log("Grocery shopping list");

// Declare an empty array to hold the shopping list items
const shoppingList = [];

// Note the intention to add fruit
console.log("It will be nice to have some fruit to eat.");

// Add "Apples" to the end of the shopping list
shoppingList.push("Apples");

// Define a function that returns the current shopping list as a formatted string
function getShoppingListMsg(arr) {
  return `Current Shopping List: ${arr}`;
}

// Display the shopping list after adding Apples
console.log(getShoppingListMsg(shoppingList));

// Add "Grapes" to the end of the shopping list
shoppingList.push("Grapes");
console.log(getShoppingListMsg(shoppingList)); // Display updated list

// Note the need for cooking oil
console.log("It looks like we need to get some cooking oil.");

// Add "Vegetable Oil" to the beginning of the shopping list using unshift()
shoppingList.unshift("Vegetable Oil");
console.log(getShoppingListMsg(shoppingList)); // Display updated list

// Add three snack items to the end of the shopping list
shoppingList.push("Popcorn", "Beef Jerky", "Potato Chips");
console.log(getShoppingListMsg(shoppingList)); // Display updated list

// Note that the list has too much junk food
console.log("This looks like too much junk food.");

// Remove the last item ("Potato Chips") from the shopping list using pop()
shoppingList.pop();
console.log(getShoppingListMsg(shoppingList)); // Display updated list

// Note the intention to add a dessert
console.log("It might be nice to get a dessert.");

// Add "Chocolate Cake" to the beginning of the shopping list using unshift()
shoppingList.unshift("Chocolate Cake");
console.log(getShoppingListMsg(shoppingList)); // Display updated list

// Note the decision to be more health conscious
console.log("On second thought, maybe we should be more health conscious.");

// Remove "Chocolate Cake" from the beginning of the shopping list using shift()
shoppingList.shift();

// Replace "Vegetable Oil" at index 0 with the healthier "Canola Oil"
shoppingList[0] = "Canola Oil";

// Display the final updated shopping list
console.log(getShoppingListMsg(shoppingList));