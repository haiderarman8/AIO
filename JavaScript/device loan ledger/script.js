// Declare the equipment ledger as an object where each key is a unique asset tag number
// Each device entry tracks its type, checkout status, borrower details, and due date
const equipmentLedger = {
    "1": { type: "PC", status: "CheckedOut", borrower: { name: "John Smith", email: "john@acme.org" }, dueDate: "11/30/2025" },
    "2": { type: "Laptop", status: "CheckedIn", borrower: { name: "", email: "" }, dueDate: "" },
    "3": { type: "Laptop", status: "CheckedOut", borrower: { name: "Jane Doe", email: "jane@acme.org" }, dueDate: "10/31/2025" },
    "4": { type: "iPad", status: "CheckedIn", borrower: { name: "", email: "" }, dueDate: "" }
};

// Define a helper function that compares two date strings in "MM/DD/YYYY" format
// Returns a negative number if date1 is earlier, positive if later, and 0 if equal
function compareDates(dateStr1, dateStr2) {

    // Split each date string by "/" and convert each part to a number
    const [m1, d1, y1] = dateStr1.split('/').map(Number);
    const [m2, d2, y2] = dateStr2.split('/').map(Number);

    // Compare years first — if they differ, the earlier year comes first
    if (y1 !== y2) return y1 - y2;

    // If years match, compare months next
    if (m1 !== m2) return m1 - m2;

    // If months also match, compare days last
    return d1 - d2;
}

// Define a function that checks out a device from the ledger to a borrower
function checkoutDevice(ledger, assetTag, borrower) {

    // If the asset tag does not exist in the ledger, return an error message
    if (!ledger.hasOwnProperty(assetTag)) {
        return { ledger: ledger, message: `assetTag ${assetTag} not found` };
    }

    // If the device is already checked out, return an error message
    if (ledger[assetTag].status === "CheckedOut") {
        return { ledger: ledger, message: `assetTag ${assetTag} already checked out` };
    }

    // Create a deep copy of the ledger using JSON serialization to avoid mutating the original
    const updatedLedger = JSON.parse(JSON.stringify(ledger));
    const device = updatedLedger[assetTag];

    // Update the device's status and borrower details on the copied ledger
    device.status = "CheckedOut";
    device.borrower.name = borrower.name;
    device.borrower.email = borrower.email;

    // Return the updated ledger and a confirmation message
    return { ledger: updatedLedger, message: `assetTag ${assetTag} checked out by ${borrower.name}` };
}

// Define a function that checks a device back into the ledger
function checkinDevice(ledger, assetTag) {

    // If the asset tag does not exist in the ledger, return an error message
    if (!ledger.hasOwnProperty(assetTag)) {
        return { ledger: ledger, message: `assetTag ${assetTag} not found` };
    }

    // Create a deep copy of the ledger using JSON serialization to avoid mutating the original
    const updatedLedger = JSON.parse(JSON.stringify(ledger));
    const device = updatedLedger[assetTag];

    // Reset the device's status, borrower details, and due date on the copied ledger
    device.status = "CheckedIn";
    device.borrower.name = "";
    device.borrower.email = "";
    device.dueDate = "";

    // Return the updated ledger and a confirmation message
    return { ledger: updatedLedger, message: `assetTag ${assetTag} checked in` };
}

// Define a function that returns a list of all overdue devices sorted by due date (earliest first)
function listOverdueDevices(ledger, today) {

    // Initialize an empty array to collect overdue devices
    const overdueDevices = [];

    // Loop through each asset tag in the ledger using for...in
    for (const assetTag in ledger) {
        const device = ledger[assetTag];

        // Only consider devices that are checked out and have a due date set
        if (device.status === "CheckedOut" && device.dueDate) {

            // If the due date is earlier than today, the device is overdue
            // compareDates returns a negative number when dueDate comes before today
            if (compareDates(device.dueDate, today) < 0) {
                overdueDevices.push(device);
            }
        }
    }

    // Sort the overdue devices by due date from earliest to latest and return the result
    return overdueDevices.sort((a, b) => compareDates(a.dueDate, b.dueDate));
}

// Define a function that serializes the ledger object into a JSON string for storage or transfer
function serializeLedger(ledger) {
    return JSON.stringify(ledger);
}

// Define a function that parses a JSON string back into a ledger object
function loadLedger(json) {
    return JSON.parse(json);
}