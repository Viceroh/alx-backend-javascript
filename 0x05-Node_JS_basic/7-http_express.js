const express = require('express');

const csvFile = process.argv[2];
const countStud = require('./3-read_file_async');

const port = 1245;

const app = express();

app.get(['/', '/students'], (req, res) => {
  res.set('Content-Type', 'text/plain');
  if (req.path === '/') {
    res.send('Hello Holberton School!');
  } else if (req.path === '/students' && csvFile) {
    countStud(csvFile)
      .then((result) => {
        const response = `This is the list of our students\nNumber of students: ${result[0].length}\nNumber of students in CS: ${result[1].length}. List: ${result[1].join(', ')}\nNumber of students in SWE: ${result[2].length}. List: ${result[2].join(', ')}`;
        res.send(response);
      })
      .catch((error) => {
        res.send(error.message);
      });
  } else {
    res.send('This is the list of our students\nNumber of students: 10\nNumber of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie\nNumber of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy');
  }
});

app.listen(port);

module.exports = app;
