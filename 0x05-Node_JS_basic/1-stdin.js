process.stdin.setEncoding('utf8');
process.stdout.write('Welcome to Holberton School, what is your name?\n');
process.stdin.on('readable', () => {
  const param = process.stdin.read();
  if (param !== null) {
    process.stdout.write(`Your name is: ${param}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
