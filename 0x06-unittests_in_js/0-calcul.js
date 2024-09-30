function calculateNumber(a, b) {
  roundA = Math.round(a);
  roundB = Math.round(b);

  return Math.round(roundA + roundB);
}

module.exports = calculateNumber;
