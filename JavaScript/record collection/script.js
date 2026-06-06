// Declare the record collection as an object where each key is a unique album ID
const recordCollection = {
    2548: {
        albumTitle: "Slippery When Wet",
        artist: "Bon Jovi",
        tracks: ["Let It Rock", "You Give Love a Bad Name"]
    },
    2468: {
        albumTitle: "1999",
        artist: "Prince",
        tracks: ["1999", "Little Red Corvette"]
    },
    1245: {
        artist: "Robert Palmer",
        tracks: []
    },
    5439: {
        albumTitle: "ABBA Gold"
    }
};

// Define a function that updates a specific property of an album in the records collection
function updateRecords(records, id, prop, value) {

    // If value is an empty string, delete the property from the album entirely
    if (value === "") {
        delete records[id][prop];

        // If prop is "tracks" and value is not empty, update the tracks array
    } else if (prop === "tracks") {

        // If the album does not yet have a tracks property, initialize it as an empty array
        if (!records[id].hasOwnProperty("tracks")) {
            records[id].tracks = [];
        }

        // Add the new value to the end of the tracks array
        records[id][prop].push(value);

        // If prop is not "tracks" and value is not empty, directly assign the value to the property
    } else {
        records[id][prop] = value;
    }

    // Always return the entire records object
    return records;
}

// Test: Set artist for album 5439 to "ABBA"
updateRecords(recordCollection, 5439, "artist", "ABBA");
console.log(recordCollection[5439].artist); // Expected output: ABBA

// Test: Add a track to album 5439 which has no existing tracks property
updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me");
console.log(recordCollection[5439].tracks); // Expected output: ["Take a Chance on Me"]

// Test: Delete artist property from album 2548 by passing an empty string
updateRecords(recordCollection, 2548, "artist", "");
console.log(recordCollection[2548].artist); // Expected output: undefined

// Test: Add a track to album 1245 which already has an empty tracks array
updateRecords(recordCollection, 1245, "tracks", "Addicted to Love");
console.log(recordCollection[1245].tracks); // Expected output: ["Addicted to Love"]

// Test: Add a track to album 2468 which already has existing tracks
updateRecords(recordCollection, 2468, "tracks", "Free");
console.log(recordCollection[2468].tracks); // Expected output: ["1999", "Little Red Corvette", "Free"]

// Test: Delete tracks property from album 2548 by passing an empty string
updateRecords(recordCollection, 2548, "tracks", "");
console.log(recordCollection[2548].tracks); // Expected output: undefined

// Test: Set albumTitle for album 1245 to "Riptide"
updateRecords(recordCollection, 1245, "albumTitle", "Riptide");
console.log(recordCollection[1245].albumTitle); // Expected output: Riptide