const http = require('http'); // Import Node.js HTTP module
const fs = require('fs'); // Import Node.js FS (File System) module

// Server configuration: port and host
const PORT = 1245;
const HOST = 'localhost';

// Create an HTTP server and assign it to the 'app' variable
const app = http.createServer();

// Retrieve the database file path from command line arguments or default to an empty string
const DB_FILE = process.argv.length > 2 ? process.argv[2] : '';

// Function to count students from a CSV file asynchronously
const countStudents = (dataPath) => new Promise((resolve, reject) => {
  // If no dataPath is provided, reject the promise with an error
  if (!dataPath) {
    reject(new Error('Cannot load the database'));
  }

  // If a valid dataPath is provided, proceed to read the file
  fs.readFile(dataPath, (err, data) => {
    // Handle errors when reading the file
    if (err) {
      reject(new Error('Cannot load the database'));
    }

    // If data is successfully read, process the CSV data
    if (data) {
      const reportParts = [];
      // Split file content into lines, trim any extra whitespace, and split by line breaks
      const fileLines = data.toString('utf-8').trim().split('\n');
      const studentGroups = {}; // Object to group students by their fields (e.g., CS, SWE)

      // Split the first line (header) to get the database column names
      const dbFieldNames = fileLines[0].split(',');
      // Extract student property names (excluding the last field)
      const studentPropNames = dbFieldNames.slice(0, dbFieldNames.length - 1);

      // Loop through each line (excluding the header) and process student data
      for (const line of fileLines.slice(1)) {
        const studentRecord = line.split(','); // Split by comma
        const studentPropValues = studentRecord.slice(0, studentRecord.length - 1);
        // Get student details
        const field = studentRecord[studentRecord.length - 1];
        // Get student's field (e.g., CS, SWE)

        // If the field doesn't exist in studentGroups, create it
        if (!Object.keys(studentGroups).includes(field)) {
          studentGroups[field] = [];
        }

        // Map student properties to their values
        const studentEntries = studentPropNames.map((propName, idx) => [
          propName, studentPropValues[idx],
        ]);

        // Push the student entry into the respective field group
        studentGroups[field].push(Object.fromEntries(studentEntries));
      }

      // Calculate the total number of students by summing students in each group
      const totalStudents = Object.values(studentGroups).reduce(
        (pre, cur) => (pre || []).length + cur.length,
      );

      // Add the total number of students to the report parts
      reportParts.push(`Number of students: ${totalStudents}`);

      // Loop through the student groups and add the number of students in each field
      for (const [field, group] of Object.entries(studentGroups)) {
        reportParts.push([
          `Number of students in ${field}: ${group.length}.`,
          'List:',
          group.map((student) => student.firstname).join(', '), // List student names
        ].join(' '));
      }

      // Resolve the promise with the final report
      resolve(reportParts.join('\n'));
    }
  });
});

// Define the server's route handlers
const SERVER_ROUTE_HANDLERS = [
  {
    // Handle the root route "/"
    route: '/',
    handler(_, res) {
      const responseText = 'Hello Holberton School!'; // Response content
      res.setHeader('Content-Type', 'text/plain'); // Set the content type to plain text
      res.setHeader('Content-Length', responseText.length); // Set the content length
      res.statusCode = 200; // Set status code to 200 (OK)
      res.write(Buffer.from(responseText)); // Write the response to the client
    },
  },
  {
    // Handle the "/students" route
    route: '/students',
    handler(_, res) {
      const responseParts = ['This is the list of our students']; // Start the response

      // Call countStudents to get the report about students
      countStudents(DB_FILE)
        .then((report) => {
          responseParts.push(report); // Append the student report to the response
          const responseText = responseParts.join('\n'); // Combine parts into one response
          res.setHeader('Content-Type', 'text/plain'); // Set content type
          res.setHeader('Content-Length', responseText.length); // Set content length
          res.statusCode = 200; // Set status code to 200 (OK)
          res.write(Buffer.from(responseText)); // Write the response to the client
        })
        .catch((err) => {
          // If an error occurs (e.g., database file not found), append the error message
          responseParts.push(err instanceof Error ? err.message : err.toString());
          const responseText = responseParts.join('\n'); // Combine parts into one response
          res.setHeader('Content-Type', 'text/plain'); // Set content type
          res.setHeader('Content-Length', responseText.length); // Set content length
          res.statusCode = 200; // Set status code to 200 (OK)
          res.write(Buffer.from(responseText)); // Write the response to the client
        });
    },
  },
];

// Listen for requests and match the URL to the appropriate handler
app.on('request', (req, res) => {
  // Loop through the route handlers and call the appropriate one
  for (const routeHandler of SERVER_ROUTE_HANDLERS) {
    if (routeHandler.route === req.url) {
      routeHandler.handler(req, res); // Call the handler for the matched route
      break;
    }
  }
});

// Start the server and listen on the specified port and host
app.listen(PORT, HOST, () => {
  process.stdout.write(`Server listening at -> http://${HOST}:${PORT}\n`);
});

// Export the app for testing purposes
module.exports = app;
