// Declare the museum collection as an object where each key is a unique artifact ID
const collection = {

    // Artifact 101 — Golden Mask
    101: {
        title: "Golden Mask",
        category: "Ceremonial",
        curator: {
            id: 201,
            name: "Earl Sinclair",
        },
        // Location history — each entry records which gallery the artifact was displayed in and when
        locations: [
            { gallery: "Hall A", year: 2020 },
            { gallery: "Hall C", year: 2024 },
        ],
        tags: ["gold", "egypt"], // Descriptive tags for searching and categorizing
        onDisplay: true,         // Whether the artifact is currently on display
    },

    // Artifact 102 — Bronze Tablet
    102: {
        title: "Bronze Tablet",
        category: "Inscription",
        curator: {
            id: 202,
            name: "Robert Sinclair",
        },
        locations: [{ gallery: "Archive Wing", year: 2019 }],
        tags: ["bronze", "writing"],
        onDisplay: false,
    },
};

// Display the title and curator name of artifact 101 directly from the collection
console.log(collection[101].title);        // Expected output: Golden Mask
console.log(collection[101].curator.name); // Expected output: Earl Sinclair

// Define a function that returns the title of an artifact by its ID
function getArtifactTitle(id) {

    // Look up the artifact in the collection by ID
    const artifact = collection[id];

    // Return the title if found, otherwise return a not found message
    return artifact ? artifact.title : "Artifact not found";
}

// Retrieve and display the title of artifact 102
console.log(getArtifactTitle(102)); // Expected output: Bronze Tablet

// Define a function that adds a new tag to an artifact if it does not already have it
function addTag(id, tag) {

    // Look up the artifact in the collection by ID
    const artifact = collection[id];

    // Only add the tag if the artifact exists and does not already have this tag
    if (artifact && !artifact.tags.includes(tag)) {
        artifact.tags.push(tag);
    }
}

// Add the "royal" tag to artifact 101 and display the updated tags array
addTag(101, "royal");
console.log(collection[101].tags); // Expected output: ["gold", "egypt", "royal"]

// Define a function that adds a new location entry to an artifact's location history
function moveArtifact(id, gallery, year) {

    // Look up the artifact in the collection by ID
    const artifact = collection[id];

    // If the artifact exists, push a new location object with the gallery and year
    if (artifact) {
        artifact.locations.push({ gallery, year });
    }
}

// Move artifact 102 to "Hall B" in 2026 and display its updated location history
moveArtifact(102, "Hall B", 2026);
console.log(collection[102].locations);

// Define a function that toggles the onDisplay status of an artifact between true and false
function toggleDisplayStatus(id) {

    // Look up the artifact in the collection by ID
    const artifact = collection[id];

    // If the artifact exists, flip the onDisplay boolean using the ! (NOT) operator
    if (artifact) {
        artifact.onDisplay = !artifact.onDisplay;
    }
}

// Display artifact 102's current display status, toggle it, then display the updated status
console.log(collection[102].onDisplay); // Expected output: false
toggleDisplayStatus(102);
console.log(collection[102].onDisplay); // Expected output: true

// Define a function that updates the curator's name for a given artifact
function updateCurator(id, name) {

    // Look up the artifact in the collection by ID
    const artifact = collection[id];

    // If the artifact exists, update the curator's name
    if (artifact) {
        artifact.curator.name = name;
    }
}

// Update the curator of artifact 101 and display the new curator name
updateCurator(101, "Fran Sinclair");
console.log(collection[101].curator.name); // Expected output: Fran Sinclair

// Define a function that returns a formatted summary string for a given artifact
function buildSummary(id) {

    // Look up the artifact in the collection by ID
    const artifact = collection[id];

    // If the artifact does not exist, return a not found message
    if (!artifact) {
        return "Artifact not found";
    }

    // Get the most recent location by accessing the last element in the locations array
    const currentLocation = artifact.locations[artifact.locations.length - 1];

    // Return a multi-line formatted summary of the artifact's key details
    return `${artifact.title}
Category: ${artifact.category}
Curator: ${artifact.curator.name}
Current Gallery: ${currentLocation.gallery}
On Display: ${artifact.onDisplay}`;
}

// Build and display the summary for artifact 101
console.log(buildSummary(101));