const fs = require('fs');

/**
 * Function to count students by field in a CSV file.
 * It reads the file asynchronously, processes the student data,
 * and logs the number of students in each field.
 *
 * @param {string} dataPath - The path to the CSV file containing student data.
 * @returns {Promise}
 */
const countStudents = (dataPath) => new Promise((resolve, reject) => {
  // Asynchronously read the content of the CSV file
  fs.readFile(dataPath, 'utf-8', (err, data) => {
    if (err) {
      // Reject the promise if there is an error reading the file
      reject(new Error('Cannot load the database'));
    }

    if (data) {
      // Split the file content
      const fileLines = data
        .toString('utf-8') // Ensure the data is treated as a UTF-8 string
        .trim() // Remove unnecessary whitespace from both ends
        .split('\n'); // Split the string into an array by newline characters

      // Initialize an object to store students grouped by their field of study
      const studentGroups = {};

      // Extract the header line (field names) from the first row of the CSV
      const dbFieldNames = fileLines[0].split(',');

      // The student properties are all fields except the last one (which is the 'field' of study)
      const studentPropNames = dbFieldNames.slice(0, dbFieldNames.length - 1);

      // Iterate over each line (after the header) to process the student data
      for (const line of fileLines.slice(1)) {
        const studentRecord = line.split(',');
        // Split each student's data into an array
        const studentPropValues = studentRecord.slice(0, studentRecord.length - 1);
        // Exclude the 'field' column
        const field = studentRecord[studentRecord.length - 1];
        // The last column is the field of study

        // If the field is not already in the studentGroups object, add it as an empty array
        if (!Object.keys(studentGroups).includes(field)) {
          studentGroups[field] = [];
        }

        // Pair each property name with its corresponding value
        const studentEntries = studentPropNames
          .map((propName, idx) => [propName, studentPropValues[idx]]);

        // Add the student as an object to the appropriate field group
        studentGroups[field].push(Object.fromEntries(studentEntries));
      }

      // Calculate the total number of student
      const totalStudents = Object
        .values(studentGroups) // Get an array of all student groups
        .reduce((pre, cur) => (pre || []).length + cur.length, 0);
        // Sum the number of students in all fields

      // Log the total number of students
      console.log(`Number of students: ${totalStudents}`);

      // For each field, log the number of students and their names
      for (const [field, group] of Object.entries(studentGroups)) {
        const studentNames = group
          .map((student) => student.firstname)
          .join(', '); // Get the first names of all students
        console.log(
          `Number of students in ${field}: ${group.length}. List: ${studentNames}`,
        );
      }

      // Resolve the promise indicating the data has been processed successfully
      resolve(true);
    }
  });
});

module.exports = countStudents;
