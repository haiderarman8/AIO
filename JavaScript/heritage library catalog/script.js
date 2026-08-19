// Declare an array of raw catalog card strings, each representing a book entry
// Each string follows the format: "Title | Author | Year | Location"
const rawCatalogCards = [
    "From a Buick 8 | King, Stephen | 2002 | Shelf K7",
    "The Shining | King, Stephen | 1977 | Shelf K1",
    "The Stand | King, Stephen | 1978 | Shelf K2",
    "It | King, Stephen | 1986 | Shelf K3",
    "Misery | King, Stephen | 1987 | Shelf K4",
    "Do Androids Dream of Electric Sheep? | Dick, Philip K. | 1968 | Shelf D5",
    "I, Robot | Asimov, Isaac | 1950 | Shelf A8",
    "Foundation | Asimov, Isaac | 1951 | Shelf A9",
    "Dune | Herbert, Frank | 1965 | Shelf H3",
    "Neuromancer | Gibson, William | 1984 | Shelf G8",
    "Snow Crash | Stephenson, Neal | 1992 | Shelf S6",
    "The Martian | Weir, Andy | 2011 | Shelf W5",
    "Ender's Game | Card, Orson Scott | 1985 | Shelf C2",
    "The Hitchhiker's Guide to the Galaxy | Adams, Douglas | 1979 | Shelf A1",
    "Ready Player One | Cline, Ernest | 2011 | Shelf C7",
    "The Dark Tower: The Gunslinger | King, Stephen | 1982 | Shelf K5",
    // Edge cases: entries with one or more missing fields
    "Unknown Title |  | 1975 | Shelf X1",         // Missing author
    "Mysterious Manuscript | Unknown Author |  | Shelf Z9", // Missing year
    "Ancient Scroll | Anonymous | 850 | ",         // Missing location
];

// Define a function that parses a single raw catalog card string into a structured object
function parseCard(rawString) {

    // Split the raw string into parts using "|" as the delimiter
    const parts = rawString.split("|");

    // Trim whitespace from each part and store in a new array
    const trimmedParts = [];
    for (let i = 0; i < parts.length; i++) {
        trimmedParts.push(parts[i].trim());
    }

    // Extract each field by its position in the trimmed parts array
    const title = trimmedParts[0];
    const author = trimmedParts[1];
    const year = trimmedParts[2];
    const location = trimmedParts[3];

    // Return a structured object, falling back to "Unknown" for any missing fields
    // Year is converted to a number with parseInt(), or set to "Unknown" if empty
    return {
        title: title || "Unknown",
        author: author || "Unknown",
        year: year ? parseInt(year) : "Unknown",
        location: location || "Unknown"
    };
}

// Define a function that parses all raw catalog cards into an array of structured objects
function parseCatalog(rawCards) {
    const catalog = [];

    // Loop through each raw card string and parse it into a structured object
    for (let i = 0; i < rawCards.length; i++) {
        catalog.push(parseCard(rawCards[i]));
    }

    // Return the completed array of parsed book objects
    return catalog;
}

// Parse the full raw catalog and store the result as a structured array of book objects
const catalog = parseCatalog(rawCatalogCards);

// Define a function that searches the catalog for books by a given author name
function findByAuthor(catalog, author) {

    // Convert the search term to lowercase for case-insensitive comparison
    const searchTerm = author.toLowerCase();
    const results = [];

    // Loop through each entry and check if the author field contains the search term
    for (let i = 0; i < catalog.length; i++) {
        if (catalog[i].author.toLowerCase().includes(searchTerm)) {
            results.push(catalog[i]);
        }
    }

    // Return all matching entries
    return results;
}

// Define a function that groups catalog entries by the decade they were published
function groupByDecade(catalog) {

    // Declare an empty object to hold arrays of books keyed by decade (e.g. "1980s")
    const grouped = {};

    for (let i = 0; i < catalog.length; i++) {
        const book = catalog[i];

        // If the year is unknown, group the book under the "Unknown" key and skip to the next
        if (book.year === "Unknown") {
            if (!grouped["Unknown"]) {
                grouped["Unknown"] = [];
            }
            grouped["Unknown"].push(book);
            continue;
        }

        // Calculate the decade by flooring the year to the nearest 10
        // e.g. 1984 -> Math.floor(1984 / 10) * 10 -> 1980
        const decade = Math.floor(book.year / 10) * 10;
        const decadeKey = `${decade}s`;

        // Initialize the decade array if it does not exist yet
        if (!grouped[decadeKey]) {
            grouped[decadeKey] = [];
        }

        // Add the book to its corresponding decade group
        grouped[decadeKey].push(book);
    }

    // Return the object containing all decade groups
    return grouped;
}

// Group the full catalog by decade and store the result
const byDecade = groupByDecade(catalog);

// Define a function that formats a single catalog entry as a readable string
function renderEntry(entry) {

    // Use the entry's fields directly, falling back to "Unknown" for any missing values
    const title = entry.title || "Unknown";
    const author = entry.author || "Unknown";
    const year = entry.year || "Unknown";
    const location = entry.location || "Unknown";

    // Return a formatted string with a divider line above and below the entry details
    return `${"-".repeat(25)}
Title: ${title}
Author: ${author}
Year: ${year}
Location: ${location}
${"-".repeat(25)}`;
}

// Render and display the first catalog entry as a formatted string
console.log(renderEntry(catalog[0]));

// Define a function that checks whether a catalog entry has all required fields filled in
function validateEntry(entry) {

    // Assume the entry is valid until a missing or unknown field is found
    let isValid = true;

    // Check that the title field exists and is not empty or "Unknown"
    if (!("title" in entry) || !entry.title || entry.title === "Unknown") {
        isValid = false;
    }

    // Check that the author field exists and is not empty or "Unknown"
    if (!("author" in entry) || !entry.author || entry.author === "Unknown") {
        isValid = false;
    }

    // Check that the year field exists and is not empty or "Unknown"
    if (!("year" in entry) || !entry.year || entry.year === "Unknown") {
        isValid = false;
    }

    // Check that the location field exists and is not empty or "Unknown"
    if (!("location" in entry) || !entry.location || entry.location === "Unknown") {
        isValid = false;
    }

    // Return true if all fields are valid, false if any field failed the check
    return isValid;
}

// Define a function that exports the catalog as a formatted JSON string
function exportToJSON(catalog) {
    // JSON.stringify with null replacer and indent of 2 produces a human-readable JSON string
    return JSON.stringify(catalog, null, 2);
}

// Define a function that exports the catalog as a CSV formatted string
function exportToCSV(catalog) {

    // Declare the CSV header row with column names
    const header = "Title,Author,Year,Location";
    const rows = [];

    // Loop through each catalog entry and format it as a CSV row
    // Title, author, and location are wrapped in quotes to handle commas within values
    for (let i = 0; i < catalog.length; i++) {
        const entry = catalog[i];
        rows.push(`"${entry.title}","${entry.author}",${entry.year},"${entry.location}"`);
    }

    // Start with the header and append each row on a new line
    let csv = header;
    for (let i = 0; i < rows.length; i++) {
        csv = csv + "\n" + rows[i];
    }

    // Return the complete CSV string
    return csv;
}

// Display the catalog exported as a CSV string
console.log(exportToCSV(catalog));

// Display the total number of entries in the catalog
console.log(catalog.length);

// Display the total number of decade groups in the byDecade object
console.log(Object.keys(byDecade).length);

// Initialize variables to track the oldest and newest publication years
// Infinity ensures any real year will be lower on the first comparison
let oldestYear = Infinity;
let newestYear = 0;

// Loop through the catalog to find the oldest and newest publication years
for (let i = 0; i < catalog.length; i++) {
    const year = catalog[i].year;

    // Skip entries where the year is unknown
    if (year !== "Unknown") {

        // Update oldestYear if the current year is earlier
        if (year < oldestYear) {
            oldestYear = year;
        }

        // Update newestYear if the current year is later
        if (year > newestYear) {
            newestYear = year;
        }
    }
}

// Display the oldest and newest publication years found in the catalog
console.log(oldestYear); // Expected output: 850
console.log(newestYear); // Expected output: 2011