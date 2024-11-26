// full_server/controllers/StudentsController.js
import { readDatabase } from '../utils';

export default class StudentsController {
  static getAllStudents(req, res) {
    const { dbPath } = req.query;

    readDatabase(dbPath)
      .then((students) => {
        let result = 'This is the list of our students\n';

        Object.keys(students)
          .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
          .forEach((field) => {
            result += `Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}\n`;
          });

        res.status(200).send(result);
      })
      .catch(() => {
        res.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    const { dbPath } = req.query;

    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    readDatabase(dbPath)
      .then((students) => {
        if (students[major]) {
          res.status(200).send(`List: ${students[major].join(', ')}`);
        } else {
          res.status(500).send('Cannot load the database');
        }
      })
      .catch(() => {
        res.status(500).send('Cannot load the database');
      });
  }
}
