// main.ts

// Define the Teacher interface
interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number; // Optional property
    location: string;
    [key: string]: any; // Allow any additional properties
}

// Define the Directors interface extending Teacher
interface Directors extends Teacher {
    numberOfReports: number; // Required property for Directors
}

// Create a director object
const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: true,
    location: 'London',
    numberOfReports: 17,
};

// Log the director object
console.log(director1);
