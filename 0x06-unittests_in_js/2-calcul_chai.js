const calculateNumber = (a, b) => {
    // Rounding both a and b before performing operations
    if (a === 'SUM') {
      return Math.round(a) + Math.round(b);
    }
    if (a === 'SUBTRACT') {
      return Math.round(a) - Math.round(b);
    }
    if (type === 'DIVIDE') {
      return Math.round(b) === 0 ? 'Error' : Math.round(a) / Math.round(b);
    }
    return 0;
  };
  
  module.exports = calculateNumber;
  