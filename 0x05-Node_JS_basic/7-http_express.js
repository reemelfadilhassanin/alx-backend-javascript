// Import the required modules
const express = require('express');
const fs = require('fs');

// Initialize the Express app
const app = express();

// Define the port where the server will listen
const PORT = 1245;

// Function to count students from a CSV file
const countStudents = (dataPath) => {
  return new Promise((resolve, reject) => {
    // Check if the data path is valid
    if (!dataPath) {
      reject(new Error('Cannot load the database'));
    }

    // Read the CSV file asynchronously
    fs.readFile(dataPath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      }

      if (data) {
        const reportParts = [];
        const fileLines = data.trim().split('\n');
        const studentGroups = {};

        // Extract the field names from the first line
        const dbFieldNames = fileLines[0].split(',');
        const studentPropNames = dbFieldNames.slice(0, dbFieldNames.length - 1);

        // Process each line (skip the first line as it's headers)
        for (const line of fileLines.slice(1)) {
          const studentRecord = line.split(',');
          const studentPropValues = studentRecord.slice(0, studentRecord.length - 1);
          const field = studentRecord[studentRecord.length - 1];

          // Group students by their field of study (e.g., CS, SWE)
          if (!Object.keys(studentGroups).includes(field)) {
            studentGroups[field] = [];
          }
          const studentEntries = studentPropNames.map((propName, idx) => [
            propName, studentPropValues[idx]
          ]);
          studentGroups[field].push(Object.fromEntries(studentEntries));
        }

        // Create the report about the number of students
        const totalStudents = Object.values(studentGroups).reduce(
          (pre, cur) => pre + cur.length, 0
        );
        reportParts.push(`Number of students: ${totalStudents}`);

        for (const [field, group] of Object.entries(studentGroups)) {
          reportParts.push(
            `Number of students in ${field}: ${group.length}. List: ${group.map(student => student.firstname).join(', ')}`
          );
        }
        resolve(reportParts.join('\n'));
      }
    });
  });
};

// Define the route handlers
app.get('/', (req, res) => {
  // Root route response
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  // Students route response
  const responseParts = ['This is the list of our students'];
  
  // Get the database file path from command-line argument
  const DB_FILE = process.argv[2];

  // Call countStudents and handle the result or error
  countStudents(DB_FILE)
    .then((report) => {
      responseParts.push(report);
      const responseText = responseParts.join('\n');
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', responseText.length);
      res.statusCode = 200;
      res.send(responseText);
    })
    .catch((err) => {
      responseParts.push(err instanceof Error ? err.message : err.toString());
      const responseText = responseParts.join('\n');
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', responseText.length);
      res.statusCode = 500;
      res.send(responseText);
    });
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});

// Export the app for testing purposes
module.exports = app;
