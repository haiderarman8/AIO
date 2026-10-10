// Declare an array of contact objects, each with a first name, last name, number, and likes
let contacts = [
    {
        firstName: "Akira",
        lastName: "Laine",
        number: "0543236543",
        likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
        firstName: "Harry",
        lastName: "Potter",
        number: "0994372684",
        likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
        firstName: "Sherlock",
        lastName: "Holmes",
        number: "0487345643",
        likes: ["Intriguing Cases", "Violin"],
    },
    {
        firstName: "Kristian",
        lastName: "Vos",
        number: "unknown",
        likes: ["JavaScript", "Gaming", "Foxes"],
    },
];

// Define a function that looks up a property value for a contact by their first name
function lookUpProfile(name, property) {

    // Loop through each contact in the contacts array
    for (let i = 0; i < contacts.length; i++) {

        // Check if the current contact's first name matches the given name
        if (contacts[i].firstName === name) {

            // If the contact is found, check if they have the requested property
            if (contacts[i].hasOwnProperty(property)) {

                // Return the value of the property if it exists
                return contacts[i][property];
            } else {

                // Return a message if the contact exists but the property does not
                return "No such property";
            }
        }
    }

    // If no contact with the given name was found after the full loop, return a not found message
    return "No such contact";
}

// Test with a valid contact and valid property
console.log(lookUpProfile("Kristian", "lastName")); // Expected output: Vos
console.log(lookUpProfile("Sherlock", "likes"));    // Expected output: ["Intriguing Cases", "Violin"]
console.log(lookUpProfile("Harry", "likes"));       // Expected output: ["Hogwarts", "Magic", "Hagrid"]

// Test with a contact that does not exist
console.log(lookUpProfile("Bob", "number"));        // Expected output: No such contact
console.log(lookUpProfile("Bob", "potato"));        // Expected output: No such contact

// Test with a valid contact but a property that does not exist
console.log(lookUpProfile("Akira", "address"));     // Expected output: No such property