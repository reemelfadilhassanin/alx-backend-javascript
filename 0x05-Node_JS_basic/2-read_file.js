const fs = require('fs');

function countStudents(path) {
  try {
    // Read the file synchronously
    const data = fs.readFileSync(path, 'utf-8');
    
    // Split the data into lines
    const lines = data.split('\n').filter(line => line.trim() !== ''); // Remove any empty lines
    
    // Extract header and student data (skip the first line which is the header)
    const students = lines.slice(1);
    
    // Initialize a dictionary to hold field counts and names
    const fields = {};

    students.forEach((student) => {
      const [firstname, lastname, age, field] = student.split(',');

      if (field) {
        if (!fields[field]) {
          fields[field] = { count: 0, names: [] };
        }
        fields[field].count += 1;
        fields[field].names.push(firstname);
      }
    });

    // Total number of students
    const totalStudents = students.length;

    // Log the total number of students
    console.log(`Number of students: ${totalStudents}`);

    // Log the number of students per field
    Object.keys(fields).forEach((field) => {
      const { count, names } = fields[field];
      console.log(`Number of students in ${field}: ${count}. List: ${names.join(', ')}`);
    });

  } catch (err) {
    // If there's an error, log the message
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
