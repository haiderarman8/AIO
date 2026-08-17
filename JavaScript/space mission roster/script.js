// Declare an empty array to hold the squad of astronauts
const squad = [];

// Declare the first astronaut object with their details
const firstAstronaut = {
    id: 1,
    name: "Andy",
    role: "Commander",
    isEVAEligible: true, // EVA (Extravehicular Activity) eligibility — can perform spacewalks
    priority: 3          // Higher priority number means higher importance in EVA scheduling
};

// Define a function that adds an astronaut to the crew array, preventing duplicate IDs
function addCrewMember(crew, astronaut) {

    // Loop through the existing crew to check for a duplicate ID
    for (let i = 0; i < crew.length; i++) {

        // If an astronaut with the same ID already exists, log a warning and exit early
        if (crew[i].id === astronaut.id) {
            console.log("Duplicate ID: " + astronaut.id);
            return;
        }
    }

    // If no duplicate was found, add the astronaut to the end of the crew array
    crew.push(astronaut);
}

// Add the first astronaut to the squad
addCrewMember(squad, firstAstronaut);

// Declare an array of the remaining astronaut objects to be added to the squad
const remainingCrew = [
    { id: 2, name: "Bart", role: "Pilot", isEVAEligible: false, priority: 8 },
    { id: 3, name: "Caroline", role: "Engineer", isEVAEligible: true, priority: 4 },
    { id: 4, name: "Diego", role: "Scientist", isEVAEligible: false, priority: 1 },
    { id: 5, name: "Elise", role: "Medic", isEVAEligible: true, priority: 7 },
    { id: 6, name: "Felix", role: "Navigator", isEVAEligible: true, priority: 6 },
    { id: 7, name: "Gertrude", role: "Communications", isEVAEligible: false, priority: 4 },
    { id: 8, name: "Hank", role: "Mechanic", isEVAEligible: true, priority: 2 },
    { id: 9, name: "Irene", role: "Specialist", isEVAEligible: true, priority: 5 },
    { id: 10, name: "Joan", role: "Technician", isEVAEligible: false, priority: 1 },
];

// Loop through the remaining crew and add each astronaut to the squad using addCrewMember
for (let i = 0; i < remainingCrew.length; i++) {
    addCrewMember(squad, remainingCrew[i]);
}

// Define a function that swaps two crew members at given indices and returns the updated array
function swapCrewMembers(crew, fromIndex, toIndex) {

    // Validate that both indices are within the bounds of the crew array
    if (
        fromIndex < 0 ||
        toIndex < 0 ||
        fromIndex >= crew.length ||
        toIndex >= crew.length
    ) {
        console.log("Invalid crew indices");
        return;
    }

    // Create a shallow copy of the crew array to avoid modifying the original
    const updatedCrew = crew.slice();

    // Swap the two elements using splice()
    // splice(toIndex, 1, updatedCrew[fromIndex]) replaces the element at toIndex with the element
    // at fromIndex, and returns the removed element as an array — [0] extracts it
    // That removed element is then placed at fromIndex, completing the swap
    updatedCrew[fromIndex] = updatedCrew.splice(toIndex, 1, updatedCrew[fromIndex])[0];

    // Return the new array with the two crew members swapped
    return updatedCrew;
}

// Swap the crew members at index 2 (Caroline) and index 5 (Felix) and store the result
const updatedSquad = swapCrewMembers(squad, 2, 5);

// Define a function that sorts a crew array by priority from highest to lowest (descending)
// Uses the bubble sort algorithm — repeatedly compares adjacent elements and swaps if out of order
function sortByPriorityDescending(crew) {

    // Outer loop controls the number of passes through the array
    for (let i = 0; i < crew.length - 1; i++) {

        // Inner loop compares adjacent elements, shrinking with each pass since the largest
        // value bubbles to the end after each full pass
        for (let j = 0; j < crew.length - 1 - i; j++) {

            // If the current element has a lower priority than the next, swap them
            if (crew[j].priority < crew[j + 1].priority) {
                const temp = crew[j];
                crew[j] = crew[j + 1];
                crew[j + 1] = temp;
            }
        }
    }
}

// Define a function that filters EVA-eligible crew members and returns them sorted by priority
function getEVAReadyCrew(crew) {

    // Declare an empty array to hold eligible astronauts
    const eligible = [];

    // Loop through the crew and add only EVA-eligible astronauts to the eligible array
    for (const astronaut of crew) {
        if (astronaut.isEVAEligible) eligible.push(astronaut);
    }

    // Sort the eligible crew by priority from highest to lowest
    sortByPriorityDescending(eligible);

    // Return the sorted array of EVA-eligible crew members
    return eligible;
}

// Get the EVA-ready crew from the updated squad and store the result
const EVAReadySquad = getEVAReadyCrew(updatedSquad);

// Define a function that splits a crew array into smaller arrays (chunks) of a given size
function chunkCrew(crew, size) {

    // Validate that the chunk size is at least 1
    if (size < 1) {
        console.log("Chunk size must be >= 1");
        return;
    }

    // Declare an empty array to hold the chunks
    const chunks = [];

    // Loop through the crew array in steps of size, slicing out each chunk
    // slice(i, i + size) extracts elements from index i up to (but not including) i + size
    for (let i = 0; i < crew.length; i += size) {
        chunks.push(crew.slice(i, i + size));
    }

    // Return the array of chunks
    return chunks;
}

// Split the EVA-ready squad into groups of 3 and store the result
const EVAChunks = chunkCrew(EVAReadySquad, 3);

// Define a function that prints each crew member's name sorted by priority (highest to lowest)
function printCrewSummary(crew) {

    // Create a shallow copy of the crew array to avoid modifying the original
    const sorted = crew.slice();

    // Sort the copy by priority from highest to lowest
    sortByPriorityDescending(sorted);

    // Loop through the sorted crew and print each astronaut's name
    for (const astronaut of sorted) {
        console.log(astronaut.name);
    }
}

// Print the crew summary for the updated squad sorted by priority
printCrewSummary(updatedSquad);