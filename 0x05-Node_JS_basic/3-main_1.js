const countStudents = require('./3-read_file_async');

countStudents("database.csv")
    .then(() => {
        console.log("Done!");
    })
    .catch((error) => {
        console.log(error); // Expected output: Error message if file fails to load
    });

console.log("After!");
