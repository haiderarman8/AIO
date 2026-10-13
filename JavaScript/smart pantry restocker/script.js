// Declare the current pantry inventory as an array of item objects
// Each item has a unique SKU, name, quantity, expiry date, and storage zone
const pantry = [
    { sku: "A10", name: "Tomatoes", qty: 4, expires: "2027-01-01", zone: "fridge" },
    { sku: "D43", name: "Pineapples", qty: 2, expires: "2020-01-01", zone: "general" }
];

// Declare the raw shipment data as an array of pipe-delimited strings
// Format: "SKU|Name|Qty|ExpiryDate" or "SKU|Name|Qty|ExpiryDate|Zone"
// Includes edge cases: duplicate SKUs, zero quantity, negative quantity, missing zone
const rawData = [
    "A10|Tomatoes|5|2027-01-01",          // Existing pantry item — should be restocked
    "B21|Bananas|10|2027-01-01",          // New item with no zone — defaults to "general"
    "C32|Eggs|3|2027-01-01|fridge",       // New item with zone specified — first occurrence kept
    "C32|Eggs|3|2027-01-01",             // Duplicate SKU — should be skipped
    "D43|Pineapples|0|2027-01-01",        // Zero quantity — should be discarded
    "E54|Peppers|-1|2027-01-01|fridge"    // Negative quantity — should be discarded
];

// Define a function that parses the raw shipment strings into structured item objects
function parseShipment(rawData) {
    const parsedItems = [];

    // Use a Set to track SKUs already seen, preventing duplicate entries
    const seenSkus = new Set();

    // Loop through each raw item string in the shipment data
    for (let i = 0; i < rawData.length; i++) {
        const itemString = rawData[i];

        // Split the pipe-delimited string into individual parts
        const parts = itemString.split('|');

        // Extract each field by its position in the parts array
        const sku = parts[0];
        const name = parts[1];
        const qty = parts[2];
        const expires = parts[3];
        const zone = parts[4]; // May be undefined if not provided

        // If this SKU has already been processed, skip it to avoid duplicates
        if (seenSkus.has(sku)) {
            continue;
        }

        // Mark this SKU as seen so any later duplicates are skipped
        seenSkus.add(sku);

        // Push the parsed item object into the results array
        // Convert qty to a number and default zone to "general" if not provided
        parsedItems.push({
            sku: sku,
            name: name,
            qty: Number(qty),
            expires: expires,
            zone: zone || "general"
        });
    }

    // Return the array of parsed and deduplicated item objects
    return parsedItems;
}

// Define a function that determines what action to take for each shipment item
// Actions are: "restock" (item exists in pantry), "donate" (new item), or "discard" (invalid qty)
function planRestock(pantry, shipment) {
    const actions = [];

    // Loop through each item in the shipment
    for (let i = 0; i < shipment.length; i++) {
        const item = shipment[i];
        let actionType = "";

        // If the quantity is zero or negative, the item should be discarded
        if (item.qty <= 0) {
            actionType = "discard";
        } else {

            // Check if this item's SKU already exists in the pantry
            let existsInPantry = false;
            for (let j = 0; j < pantry.length; j++) {
                if (pantry[j].sku === item.sku) {
                    existsInPantry = true;
                    break; // Stop searching once a match is found
                }
            }

            // If the item exists in the pantry, restock it; otherwise donate it
            if (existsInPantry) {
                actionType = "restock";
            } else {
                actionType = "donate";
            }
        }

        // Push the action object containing the action type and item details
        actions.push({
            type: actionType,
            item: item
        });
    }

    // Return the full list of action objects
    return actions;
}

// Define a function that groups actions by their item's storage zone
function groupByZone(actions) {

    // Declare an empty object to hold arrays of actions keyed by zone name
    const grouped = {};

    // Loop through each action and assign it to the correct zone group
    for (let i = 0; i < actions.length; i++) {
        const action = actions[i];
        const zone = action.item.zone;

        // Initialize the zone array if it does not exist yet
        if (!grouped[zone]) {
            grouped[zone] = [];
        }

        // Add the action to its corresponding zone group
        grouped[zone].push(action);
    }

    // Return the grouped actions object
    return grouped;
}

// Define a function that creates a shallow clone of the pantry array
// Each item is manually copied to avoid mutating the original pantry
function clonePantry(pantry) {
    const cloned = [];

    for (let i = 0; i < pantry.length; i++) {
        // Copy each property of the pantry item individually into a new object
        cloned.push({
            sku: pantry[i].sku,
            name: pantry[i].name,
            qty: pantry[i].qty,
            expires: pantry[i].expires,
            zone: pantry[i].zone
        });
    }

    // Return the cloned pantry array
    return cloned;
}

// Parse the raw shipment strings into structured item objects
const shipment = parseShipment(rawData);

// Clone the pantry to avoid mutating the original during restock planning
const pantryCopy = clonePantry(pantry);

// Determine the action (restock, donate, or discard) for each shipment item
const actions = planRestock(pantryCopy, shipment);

// Group the planned actions by storage zone for organized processing
const groupedResult = groupByZone(actions);

// Display the final grouped result
console.log(groupedResult);