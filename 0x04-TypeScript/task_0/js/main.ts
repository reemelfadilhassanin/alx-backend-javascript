// main.ts

// Define the Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Create two student objects
const student1: Student = {
    firstName: 'Alice',
    lastName: 'Johnson',
    age: 20,
    location: 'New York'
};

const student2: Student = {
    firstName: 'Bob',
    lastName: 'Smith',
    age: 22,
    location: 'Los Angeles'
};

// Create an array to hold the students
const studentsList: Student[] = [student1, student2];

// Function to render the student table
function renderTable(students: Student[]) {
    const table = document.createElement('table');
    const headerRow = table.insertRow();
    headerRow.insertCell().innerText = 'First Name';
    headerRow.insertCell().innerText = 'Location';

    students.forEach(student => {
        const row = table.insertRow();
        row.insertCell().innerText = student.firstName;
        row.insertCell().innerText = student.location;
    });

    document.body.appendChild(table);
}

// Call the render function
renderTable(studentsList);
