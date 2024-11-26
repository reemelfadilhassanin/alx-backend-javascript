// 1-stdin.js

// Display the prompt message
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Read the user input
process.stdin.on('data', (input) => {
  // Trim the input to remove any extra whitespace
  const name = input.toString().trim();

  // Display the input name
  console.log(`Your name is: ${name}`);

  // Display the closing message
  console.log('This important software is now closing');

  // End the process
  process.exit();
});
