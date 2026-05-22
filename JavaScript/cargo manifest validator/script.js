// Converts weight from pounds to kilograms if unit is "lb".
// Always sets unit to "kg" in the returned copy.
// Uses the approximate conversion: 1 lb = 0.45 kg.
// Returns a NEW object (does not mutate the original manifest).
function normalizeUnits(manifest) {
    return {
        ...manifest,
        weight: manifest.unit === "lb"
            ? manifest.weight * 0.45  // convert lb → kg using 1 lb = 0.45 kg
            : manifest.weight,        // already in kg, keep as-is
        unit: "kg"
    };
}

// Validates each field of the manifest object.
// Returns an empty object {} if all fields are valid,
// or an object describing each field as "Missing" or "Invalid".
function validateManifest(manifest) {
    const errors = {};

    // --- containerId: must be a positive integer ---
    if (!("containerId" in manifest)) {
        errors.containerId = "Missing";
    } else if (
        typeof manifest.containerId !== "number" ||
        !Number.isInteger(manifest.containerId) || // must be a whole number
        manifest.containerId <= 0                  // must be positive
    ) {
        errors.containerId = "Invalid";
    }

    // --- destination: must be a non-empty, non-whitespace string ---
    if (!("destination" in manifest)) {
        errors.destination = "Missing";
    } else if (
        typeof manifest.destination !== "string" ||
        manifest.destination.trim() === "" // blank/whitespace-only is invalid
    ) {
        errors.destination = "Invalid";
    }

    // --- weight: must be a real, positive number ---
    if (!("weight" in manifest)) {
        errors.weight = "Missing";
    } else if (
        typeof manifest.weight !== "number" ||
        Number.isNaN(manifest.weight) || // NaN is typeof "number" but not valid
        manifest.weight <= 0             // must be positive
    ) {
        errors.weight = "Invalid";
    }

    // --- unit: must be exactly "kg" or "lb" ---
    if (!("unit" in manifest)) {
        errors.unit = "Missing";
    } else if (
        manifest.unit !== "kg" && manifest.unit !== "lb"
    ) {
        errors.unit = "Invalid";
    }

    // --- hazmat: must be a strict boolean ---
    if (!("hazmat" in manifest)) {
        errors.hazmat = "Missing";
    } else if (typeof manifest.hazmat !== "boolean") {
        errors.hazmat = "Invalid";
    }

    return errors; // empty {} = valid; populated = one or more errors
}

// Orchestrates validation and normalization of a manifest.
// Logs success + weight in kg if valid; logs error + issues object if not.
function processManifest(manifest) {
    const errors = validateManifest(manifest);
    const isValid = Object.keys(errors).length === 0; // no errors means valid

    if (isValid) {
        // Step 1: Log success with the original containerId
        console.log(`Validation success: ${manifest.containerId}`);

        // Step 2: Always normalize using normalizeUnits() then log weight in kg
        const normalized = normalizeUnits(manifest);
        console.log(`Total weight: ${normalized.weight} kg`);
    } else {
        // Step 1: Log error with containerId (may be undefined if missing)
        console.log(`Validation error: ${manifest.containerId}`);

        // Step 2: Log the full errors object returned by validateManifest
        console.log(errors);
    }
}