const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
  it('should return the correct sum of two rounded numbers', function() {
    assert.strictEqual(calculateNumber(1, 3), 4); // 1 + 3 = 4
    assert.strictEqual(calculateNumber(1, 3.7), 5); // 1 + 4 = 5
    assert.strictEqual(calculateNumber(1.2, 3.7), 5); // 1 + 4 = 5
    assert.strictEqual(calculateNumber(1.5, 3.7), 6); // 2 + 4 = 6
    assert.strictEqual(calculateNumber(1.5, -3.7), -2); // 2 + -4 = -2
  });
});
