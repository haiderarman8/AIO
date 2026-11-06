// Declare the raw campus directory data as a nested object
// Each key is a department name containing a department code and an array of programs
// Each program has an ID, name, room, and an array of instructors
// Includes edge cases: null rooms, missing emails, and missing or null office hours
const rawData = {
    "Computer Science": {
        Dept_code: "CSE",
        programs: [
            {
                id: "CSE101",
                name: "Database Management System",
                room: "405",
                instructors: [
                    { id: "INS001", name: "Alejandro", email: "alejandro@example.com", officeHours: "Sun-Tue 10AM-12PM" },
                    { id: "INS002", name: "Kenji", officeHours: null }, // Missing email, null office hours
                ],
            },
            {
                id: "CSE102",
                name: "Data Structures",
                room: null, // No room assigned
                instructors: [
                    { id: "INS003", name: "Fatima", email: "fatima@example.com", officeHours: "Mon-Wed 10AM-2PM" },
                ],
            },
            {
                id: "CSE103",
                name: "Operating Systems",
                room: "401",
                instructors: [
                    { id: "INS005", name: "Wei", email: "wei@example.com", officeHours: "Thu 1PM-3PM" },
                ],
            },
        ],
    },
    "Business Administration": {
        Dept_code: "BBA",
        programs: [
            {
                id: "BBA101",
                name: "Financial Accounting",
                room: "201",
                instructors: [{ id: "INS004", name: "Sofia", email: "sofia@example.com" }], // No officeHours property
            },
            {
                id: "BBA102",
                name: "Marketing Management",
                room: "204",
                instructors: [
                    { id: "INS006", name: "Robin", email: "robin@example.com", officeHours: "Tue-Thu 9AM-11AM" },
                ],
            },
            {
                id: "BBA103",
                name: "Business Law",
                room: "203",
                instructors: [
                    { id: "INS007", name: "Priya", email: "priya@example.com", officeHours: "Mon 2PM-4PM" },
                ],
            },
        ],
    },
};

// Define a function that converts the nested raw data into flat lookup objects keyed by ID
// This makes it fast to find any department, program, or instructor without looping through nested arrays
function normalizeDirectory(rawData) {

    // Declare empty objects to hold each normalized lookup table
    const departmentsById = {};
    const programsById = {};
    const instructorsById = {};
    const instructorsByEmail = {}; // Maps an email address to an instructor ID

    // Convert the raw data object into an array of [departmentName, departmentData] pairs
    const departmentEntries = Object.entries(rawData);

    // Loop through each department entry
    for (let i = 0; i < departmentEntries.length; i++) {

        // Destructure the entry into the department name and its data
        const [departmentName, departmentData] = departmentEntries[i];

        // Use the department code as its ID, or generate a fallback ID if no code exists
        const departmentId = departmentData.Dept_code || `dept-${i + 1}`;

        // Create the normalized department record with an empty list of program IDs
        departmentsById[departmentId] = {
            id: departmentId,
            code: departmentData.Dept_code,
            name: departmentName,
            programIds: [],
        };

        // Loop through each program in the current department
        for (let j = 0; j < departmentData.programs.length; j++) {
            const program = departmentData.programs[j];

            // Copy the program's properties using the spread operator and add a reference to its department
            programsById[program.id] = {
                ...program,
                departmentId,
            };

            // Record this program's ID in its department's list of programs
            departmentsById[departmentId].programIds.push(program.id);

            // Loop through each instructor teaching the current program
            for (let k = 0; k < program.instructors.length; k++) {
                const instructor = program.instructors[k];

                // Copy the instructor's properties and add references to their program and department
                instructorsById[instructor.id] = {
                    ...instructor,
                    programId: program.id,
                    departmentId,
                };

                // Only add an email lookup entry if the instructor has an email address
                if (instructor.email) {
                    instructorsByEmail[instructor.email] = instructor.id;
                }
            }
        }
    }

    // Return all four lookup tables in a single object
    return {
        departmentsById,
        programsById,
        instructorsById,
        instructorsByEmail,
    };
}

// Normalize the raw data into flat lookup tables
const normalizedData = normalizeDirectory(rawData);

// Define a function that finds an instructor by email and returns their name, office hours, and department
function getInstructorByEmail(email, normalizedData) {

    // Look up the instructor ID using the email lookup table
    const instructorId = normalizedData.instructorsByEmail[email];

    // If no instructor has this email, return a not found message
    if (!instructorId) {
        return "Instructor not found";
    }

    // Retrieve the full instructor record and their department record
    const instructor = normalizedData.instructorsById[instructorId];
    const department = normalizedData.departmentsById[instructor.departmentId];

    // Return a summary object, using the nullish coalescing operator (??) to provide fallbacks
    // ?? only falls back when the value is null or undefined
    return {
        name: instructor.name ?? "Unknown Instructor",
        officeHours: instructor.officeHours ?? "Not Available",
        department: department.name ?? "Unknown Department",
    };
}

// Define a function that returns a sorted list of room numbers for programs in a given department/building code
function listRoomsByBuilding(buildingCode, normalizedData) {

    // Convert the programs lookup object into an array of program records
    const programValues = Object.values(normalizedData.programsById);
    const rooms = [];

    // Loop through each program
    for (let i = 0; i < programValues.length; i++) {
        const program = programValues[i];

        // Look up the department this program belongs to
        const department = normalizedData.departmentsById[program.departmentId];

        // Include the room only if the department code matches and the program has a room assigned
        // != null checks for both null and undefined
        if (department.code === buildingCode && program.room != null) {
            rooms.push(program.room);
        }
    }

    // Sort the rooms in ascending order and return them
    rooms.sort();
    return rooms;
}

// Define a function that builds a text summary of the directory's key statistics
function renderDirectorySummary(normalizedData) {

    // Count the total number of departments, programs, and instructors by counting object keys
    const departments = Object.keys(normalizedData.departmentsById).length;
    const programs = Object.keys(normalizedData.programsById).length;
    const instructors = Object.keys(normalizedData.instructorsById).length;

    // Convert the instructors lookup object into an array so it can be looped through
    const instructorValues = Object.values(normalizedData.instructorsById);
    let missingOfficeHours = 0;

    // Count instructors whose office hours are missing (null or undefined)
    for (let i = 0; i < instructorValues.length; i++) {
        if (instructorValues[i].officeHours == null) {
            missingOfficeHours++;
        }
    }

    // Convert the programs lookup object into an array so it can be looped through
    const programValues = Object.values(normalizedData.programsById);
    let programsWithoutRooms = 0;

    // Count programs that have no room assigned (explicitly null)
    for (let i = 0; i < programValues.length; i++) {
        if (programValues[i].room === null) {
            programsWithoutRooms++;
        }
    }

    // Return a formatted multi-line summary string using a template literal
    return `
Campus Directory Summary
------------------------
Departments: ${departments}
Programs: ${programs}
Instructors: ${instructors}
Missing Office Hours: ${missingOfficeHours}
Programs Without Rooms: ${programsWithoutRooms}
`;
}

// Display the directory summary
console.log(renderDirectorySummary(normalizedData));
// Expected output:
// Departments: 2
// Programs: 6
// Instructors: 7
// Missing Office Hours: 2 (Kenji has null, Sofia has no officeHours property)
// Programs Without Rooms: 1 (Data Structures)