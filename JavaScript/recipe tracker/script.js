// Declare an empty array to store all recipe objects
const recipes = [];

// Declare the first recipe object with its name, ingredients, cooking time, and placeholder fields
const recipe1 = {
    name: "Spaghetti Carbonara",
    ingredients: ["spaghetti", "Parmesan cheese", "pancetta", "black pepper"],
    cookingTime: 22,       // Cooking time in minutes
    totalIngredients: null, // Will be calculated and assigned later
    difficultyLevel: ""    // Will be determined and assigned later
};

// Declare the second recipe object with its name, ingredients, cooking time, and placeholder fields
const recipe2 = {
    name: "Chicken Curry",
    ingredients: ["chicken breast", "coconut milk", "curry powder", "onion", "garlic"],
    cookingTime: 42,       // Cooking time in minutes
    totalIngredients: null, // Will be calculated and assigned later
    difficultyLevel: ""    // Will be determined and assigned later
};

// Declare the third recipe object with its name, ingredients, cooking time, and placeholder fields
const recipe3 = {
    name: "Vegetable Stir Fry",
    ingredients: ["broccoli", "carrot", "bell pepper"],
    cookingTime: 15,       // Cooking time in minutes
    totalIngredients: null, // Will be calculated and assigned later
    difficultyLevel: ""    // Will be determined and assigned later
};

// Add all three recipe objects to the recipes array
recipes.push(recipe1, recipe2, recipe3);

// Define a function that returns the total number of ingredients in a recipe
function getTotalIngredients(ingredients) {
    return ingredients.length;
}

// Define a function that returns a difficulty level based on cooking time
function getDifficultyLevel(cookingTime) {
    // 30 minutes or under is considered easy
    if (cookingTime <= 30) {
        return "easy";
        // Between 31 and 60 minutes is considered medium
    } else if (cookingTime <= 60) {
        return "medium";
        // Over 60 minutes is considered hard
    } else {
        return "hard";
    }
}

// Calculate and display the total number of ingredients for recipe1
const recipe1TotalIngredients = getTotalIngredients(recipe1.ingredients);
console.log(recipe1TotalIngredients); // Expected output: 4

// Determine and display the difficulty level for recipe1
const recipe1DifficultyLevel = getDifficultyLevel(recipe1.cookingTime);
console.log(recipe1DifficultyLevel); // Expected output: easy

// Update recipe1 with its calculated total ingredients and difficulty level
recipe1.totalIngredients = getTotalIngredients(recipe1.ingredients);
recipe1.difficultyLevel = getDifficultyLevel(recipe1.cookingTime);

// Update recipe2 with its calculated total ingredients and difficulty level
recipe2.totalIngredients = getTotalIngredients(recipe2.ingredients);
recipe2.difficultyLevel = getDifficultyLevel(recipe2.cookingTime);

// Update recipe3 with its calculated total ingredients and difficulty level
recipe3.totalIngredients = getTotalIngredients(recipe3.ingredients);
recipe3.difficultyLevel = getDifficultyLevel(recipe3.cookingTime);

// Display the fully updated recipes array with all fields populated
console.log(recipes);