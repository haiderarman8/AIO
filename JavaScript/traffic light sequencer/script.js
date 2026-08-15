const config1 = {
    fault: false,
    phases: [
        { color: "green", duration: 5 },
        { color: "yellow", duration: 2 },
        { color: "red", duration: 4 }
    ]
};

const config2 = {
    fault: false,
    phases: [
        { color: "red", duration: 3 },
        { color: "yellow", duration: -2 },
        { color: "green", duration: 6 }
    ]
};

const config3 = {
    fault: true,
    phases: [
        { color: "green", duration: 5 },
        { color: "yellow", duration: 2 },
        { color: "red", duration: 6 }
    ]
};

const config4 = {
    fault: false,
    phases: []
};

// Runs through the traffic light sequence for a given number of cycles.
// Logs each phase switch, or special messages for faults/invalid phases/empty phases.
function runSequence(config, cycles) {
    // If the config is faulted, log and stop immediately — no phases run
    if (config.fault) {
        console.log("Faulted phase!");
        return;
    }
    // If there are no phases defined, log and stop
    if (config.phases.length === 0) {
        console.log("No phases found");
        return;
    }
    // Loop through the number of cycles requested
    for (let cycle = 0; cycle < cycles; cycle++) {
        // Loop through every phase in this cycle
        for (const phase of config.phases) {
            // A valid phase must have a positive duration
            if (phase.duration <= 0) {
                console.log("Invalid phase detected");
            } else {
                // Log the switch message for a valid phase
                console.log(`Switching to ${phase.color} for ${phase.duration} s`);
            }
        }
    }
}

// Generates a cumulative timeline of timestamps across all cycles.
// Each value is the running total of durations up to and including that phase.
// Negative durations are included as-is, which can cause the timeline to dip backwards.
function generateTimeline(config, cycles) {
    const timeline = [];
    // If there are no phases, return an empty array immediately
    if (config.phases.length === 0) {
        return timeline;
    }
    let runningTotal = 0; // tracks cumulative time, updated every phase
    // Loop through each cycle
    for (let cycle = 0; cycle < cycles; cycle++) {
        // Loop through each phase in the current cycle
        for (const phase of config.phases) {
            // Always add duration to runningTotal — even if negative (invalid phase).
            // Negative durations simply pull the running total backwards,
            // which is why config2 gives [3, 1, 7] instead of [3, 3, 9]
            runningTotal += phase.duration;
            timeline.push(runningTotal);
        }
    }
    return timeline;
}