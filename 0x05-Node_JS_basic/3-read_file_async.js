const fs = require('fs');

/**
 * Reads a CSV file and processes the data to count and categorize students by their field of study.
 * @param {string} dataPath - Path to the database CSV file.
 * @throws Will throw an error if the database cannot be loaded or is not a valid file.
 */
const countStudents = (dataPath) => {
  // Check if the file exists
  if (!fs.existsSync(dataPath)) {
    throw new Error('Cannot load the database');
  }

  // Check if the path is actually a file
  if (!fs.statSync(dataPath).isFile()) {
    throw new Error('Cannot load the database');
  }

  // Read the file, remove extra spaces, and split into lines
  const fileLines = fs
    .readFileSync(dataPath, 'utf-8')
    .toString('utf-8')
    .trim()
    .split('\n');

  // Create an object to store students grouped by field of study
  const studentGroups = {};

  // Extract field names from the first line (header) of the CSV
  const dbFieldNames = fileLines[0].split(',');

  // All columns except the last one are student property names
  const studentPropNames = dbFieldNames.slice(0, dbFieldNames.length - 1);

  // Loop through all student records in the file (skip the header)
  for (const line of fileLines.slice(1)) {
    // Split the student data by commas
    const studentRecord = line.split(',');

    // Extract the property values (exclude the last column which is the field)
    const studentPropValues = studentRecord.slice(0, studentRecord.length - 1);

    // Extract the field of study (the last column in the CSV)
    const field = studentRecord[studentRecord.length - 1];

    // If the field does not exist in the studentGroups object, create it
    if (!Object.keys(studentGroups).includes(field)) {
      studentGroups[field] = [];
    }

    // Map the student properties to their corresponding names and values
    const studentEntries = studentPropNames
      .map((propName, idx) => [propName, studentPropValues[idx]]);

    // Add the student to the appropriate field group
    studentGroups[field].push(Object.fromEntries(studentEntries));
  }

  // Calculate the total number of students by summing the lengths of all student groups
  const totalStudents = Object
    .values(studentGroups)
    .reduce((pre, cur) => (pre || []).length + cur.length);

  // Log the total number of students
  console.log(`Number of students: ${totalStudents}`);

  // For each field group, log the number of students and their names
  for (const [field, group] of Object.entries(studentGroups)) {
    const studentNames = group.map((student) => student.firstname).join(', ');
    console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
  }
};

module.exports = countStudents;
