const fs = require('fs');

const countStudents = (path) => {
  fs.readFile(path, 'utf-8', (err, data) => {
    if (err) {
      throw new Error('Cannot load the database');
    }
    const myArray = data.split('\n');
    const filterArray = myArray.filter((item) => item !== '');
    filterArray.shift();
    filterArray.forEach((value, index) => {
      filterArray[index] = value.split(',');
    });
    const studentCs = [];
    const studentSWE = [];
    filterArray.forEach((value) => {
      if (value.includes('CS')) {
        studentCs.push(value.shift());
      } else if (value.includes('SWE')) {
        studentSWE.push(value.shift());
      }
    });
    console.log(`Number of students: ${filterArray.length}`);
    console.log(`Number of students in CS: ${studentCs.length}. List: ${studentCs.join(', ')}`);
    console.log(`Number of students in SWE: ${studentSWE.length}. List: ${studentSWE.join(', ')}`);
  });
};

module.exports = countStudents;
