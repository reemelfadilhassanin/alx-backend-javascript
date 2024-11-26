// full_server/utils.js
import fs from 'fs';

export const readDatabase = (filePath) => {
  return new Promise((resolve, reject) => {
    if (!filePath) {
      reject(new Error('Cannot load the database'));
      return;
    }

    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const students = {};
      const lines = data.trim().split('\n');
      const headers = lines[0].split(',');

      lines.slice(1).forEach((line) => {
        const studentData = line.split(',');
        const field = studentData[headers.length - 1];
        const firstname = studentData[0];

        if (!students[field]) students[field] = [];
        students[field].push(firstname);
      });

      resolve(students);
    });
  });
};
