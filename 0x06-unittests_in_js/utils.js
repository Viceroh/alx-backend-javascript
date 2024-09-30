const Utils = {
  calculateNumber(type, a, b) {
    roundA = Math.round(a);
    roundB = Math.round(b);
    
    switch(type) {
      case 'SUM':
        return roundA + roundB;
      case 'SUBTRACT':
        return roundA - roundB;
      case 'DIVIDE':
        if (roundB === 0) {
          return 'Error';
        }
        return roundA / roundB;
      default:
        return 'Error';
    }
  }
}

module.exports = Utils;
