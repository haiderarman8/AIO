// Declare the morning gate configurations as an array of gate objects
// Each gate has a unique ID, a maximum capacity per tick, and a queue of attendees per tick
const morningGates = [
    { id: "North", capacity: 5, queue: [3, 6, 2, 4] },
    { id: "East", capacity: 3, queue: [2, 4, 3, 5] },
    { id: "South", capacity: 4, queue: [1, 2, 3, 1] },
    { id: "West", capacity: 2, queue: [4, 1, 2, 3] },
];

// Declare the night gate configurations with different capacities and attendee queues
const nightGates = [
    { id: "North", capacity: 4, queue: [6, 2, 5, 1] },
    { id: "East", capacity: 2, queue: [3, 3, 4, 2] },
    { id: "South", capacity: 5, queue: [2, 1, 2, 3] },
    { id: "West", capacity: 3, queue: [5, 2, 1, 4] },
];

// Define a function that initializes a throughput summary object with a count of 0 for each gate
function initializeThroughput(gates) {
    const summary = {};

    // Loop through each gate and set its initial processed count to 0
    for (const gate of gates) {
        summary[gate.id] = 0;
    };

    // Return the summary object with all gate counts initialized to zero
    return summary;
}

// Define a function that processes attendee flow through a gate at a specific tick
// Returns how many attendees were processed and how many overflowed beyond the gate's capacity
function processGateFlow(gate, tickIndex) {

    // Get the number of attendees arriving at this gate during the current tick
    let currentTickQueue = gate.queue[tickIndex];
    let processed = 0;

    // Process attendees one at a time until the queue is empty or capacity is reached
    while (currentTickQueue > 0 && processed < gate.capacity) {
        currentTickQueue--;
        processed++;
    }

    // Return the number of attendees processed and the remaining overflow count
    return {
        processed: processed,
        overflow: currentTickQueue  // Any attendees left over after reaching capacity
    };
}

// Define a function that reroutes overflow attendees to the next gate in the rotation
function rerouteOverflow(gates, currentGate, tickIndex, overflowAmount) {

    // Find the index of the current gate in the gates array
    const currentIndex = gates.indexOf(currentGate);

    // Calculate the next gate's index using modulo to wrap around to the first gate if needed
    const nextGateIndex = (currentIndex + 1) % gates.length;

    // Add the overflow attendees to the next gate's queue at the current tick
    gates[nextGateIndex].queue[tickIndex] += overflowAmount;

    // Log which gate the overflow attendees were rerouted to
    console.log(
        overflowAmount + " attendees rerouted to " +
        gates[nextGateIndex].id
    );
}

// Define a function that handles the full processing of a single gate at a single tick
function handleGateAtTick(gates, gate, tickIndex, throughputSummary) {

    // Log which gate is currently being processed
    console.log("\nProcessing " + gate.id + "...");

    // Log how many attendees are arriving at this gate during the current tick
    console.log(
        gate.queue[tickIndex] + " attendees arriving."
    );

    // Process the gate flow and get the result for this tick
    const result = processGateFlow(gate, tickIndex);

    // Add the number of processed attendees to this gate's running total in the summary
    throughputSummary[gate.id] += result.processed;

    // If there are overflow attendees, log the overflow and reroute them to the next gate
    if (result.overflow > 0) {
        console.log(
            "Overflow of " + result.overflow +
            " attendees. Rerouting..."
        );
        rerouteOverflow(gates, gate, tickIndex, result.overflow);
    }
}

// Define a function that prints the final throughput summary for all gates
function printSummary(summary) {
    console.log("\nThroughput Summary");

    // Loop through each gate ID in the summary and log its total processed attendee count
    for (const gateId in summary) {
        console.log(
            gateId + ": " + summary[gateId] +
            " attendees processed"
        );
    }
}

// Define a function that runs the full festival simulation for a given set of gates and time block
function simulateFestival(gates, timeBlock) {

    // Log the start of the simulation for this time block
    console.log("\n" + timeBlock + " Simulation");

    // Initialize the throughput summary with a count of 0 for each gate
    const throughputSummary = initializeThroughput(gates);

    // Determine the total number of ticks from the length of the first gate's queue
    const maxTicks = gates[0].queue.length;

    // Start the tick counter at 0
    let tickIndex = 0;

    // Loop through each tick until all ticks have been processed
    while (tickIndex < maxTicks) {

        // Log the current tick number (1-based for readability)
        console.log("\nTick " + (tickIndex + 1));

        // Process every gate for the current tick
        for (const gate of gates) {
            handleGateAtTick(gates, gate, tickIndex, throughputSummary);
        }

        // Move to the next tick
        tickIndex++;
    }

    // Print the final throughput summary after all ticks have been processed
    printSummary(throughputSummary);
}

// Run the festival simulation for the morning gates
simulateFestival(morningGates, "Morning");

// Run the festival simulation for the night gates
simulateFestival(nightGates, "Night");