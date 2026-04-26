// Declare a tiger object with its species, age, and endangered status
const tiger = {
    species: "Tiger",
    age: 5,
    isEndangered: true
};

// Declare an elephant object with its species, age, and endangered status
const elephant = {
    species: "Elephant",
    age: 10,
    isEndangered: true
};

// Define an arrow function that returns the species of a given animal
const getSpecies = (animal) => {
    return animal.species;
};

// Display the species of the tiger
console.log(getSpecies(tiger)); // Expected output: Tiger

// Define an arrow function that returns the age of a given animal
const getAge = (animal) => {
    return animal.age;
};

// Display the age of the tiger
console.log(getAge(tiger)); // Expected output: 5

// Define an arrow function that adds a habitat property to a given animal and returns the updated object
const addHabitat = (animal, habitat) => {
    animal.habitat = habitat;
    return animal;
};

// Add "Rainforest" as the tiger's habitat and display the updated object
console.log(addHabitat(tiger, "Rainforest")); // Expected output: { species: "Tiger", age: 5, isEndangered: true, habitat: "Rainforest" }

// Define an arrow function that updates the age of a given animal and returns the updated object
const updateAge = (animal, newAge) => {
    animal.age = newAge;
    return animal;
};

// Update the elephant's age to 12 and display the updated object
console.log(updateAge(elephant, 12)); // Expected output: { species: "Elephant", age: 12, isEndangered: true }

// Define an arrow function that removes the isEndangered property from a given animal and returns the updated object
const removeEndangeredStatus = (animal) => {
    delete animal.isEndangered;
    return animal;
};

// Remove the tiger's endangered status and display the updated object
console.log(removeEndangeredStatus(tiger)); // Expected output: { species: "Tiger", age: 5, habitat: "Rainforest" }

// Define an arrow function that checks if a given animal has a habitat property
const hasHabitat = (animal) => {
    return animal.hasOwnProperty("habitat");
};

// Check if the tiger and elephant each have a habitat property
console.log(hasHabitat(tiger));    // Expected output: true (habitat was added earlier)
console.log(hasHabitat(elephant)); // Expected output: false (no habitat was added)

// Define a function that returns the value of a given property on an animal using bracket notation
function getProperty(animal, propertyName) {
    return animal[propertyName];
}

// Retrieve and display specific properties from the tiger and elephant
console.log(getProperty(tiger, "species"));  // Expected output: Tiger
console.log(getProperty(elephant, "age"));   // Expected output: 12