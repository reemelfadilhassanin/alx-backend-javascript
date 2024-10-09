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

// Create a teacher object
const teacher3: Teacher = {
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: false,
    location: 'London',
    contract: false // Additional property not explicitly defined in the interface
};

// Log the teacher object
console.log(teacher3);
