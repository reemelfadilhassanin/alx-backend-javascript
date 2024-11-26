// Import the Express module
const express = require('express');

// Initialize the Express app
const app = express();

// Define the port where the server will listen
const PORT = 1245;

// Define the root route
app.get('/', (req, res) => {
  // Send plain text response when the root URL is accessed
  res.send('Hello Holberton School!');
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});

// Export the app for testing purposes
module.exports = app;
