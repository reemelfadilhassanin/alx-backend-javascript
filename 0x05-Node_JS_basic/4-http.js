const http = require('http');

// Create an HTTP server that listens for requests
const app = http.createServer((req, res) => {
  // Set the response header to indicate plain text content
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Respond with the message "Hello Holberton School!"
  res.end('Hello Holberton School!\n');
});

// Make the server listen on port 1245
app.listen(1245, () => {
  console.log('Server running at http://localhost:1245/');
});

module.exports = app;
