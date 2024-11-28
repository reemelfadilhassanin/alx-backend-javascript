function calculateNumber(type, a, b) {
  // Round both a and b
  const roundedA = Math.round(a);
  const roundedB = Math.round(b);

  // Perform the operation based on the value of 'type'
  if (type === 'SUM') {
    return roundedA + roundedB;
  } else if (type === 'SUBTRACT') {
    return roundedA - roundedB;
  } else if (type === 'DIVIDE') {
    // Handle division by zero
    if (roundedB === 0) {
      return 'Error';
    }
    // Perform the division
    return roundedA / roundedB;
  }
  return null;  // If the type is not recognized, return null
}

module.exports = calculateNumber;
