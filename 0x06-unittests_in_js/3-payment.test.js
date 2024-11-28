// 3-payment.test.js
const sinon = require('sinon');
const assert = require('assert');
const Utils = require('./utils'); // Import the Utils module
const sendPaymentRequestToApi = require('./3-payment'); // Import the function to test

describe('sendPaymentRequestToApi', () => {
  let spy;

  beforeEach(() => {
    // Create a spy on Utils.calculateNumber function
    spy = sinon.spy(Utils, 'calculateNumber');
  });

  afterEach(() => {
    // Restore the original function after each test
    spy.restore();
  });

  it('should call Utils.calculateNumber with "SUM" type', () => {
    // Call the function with test data
    sendPaymentRequestToApi(100, 20);

    // Check that Utils.calculateNumber was called with the correct arguments
    assert(spy.calledWithExactly('SUM', 100, 20));
  });

  it('should log the correct total to the console', () => {
    // Capture console.log output
    const consoleSpy = sinon.spy(console, 'log');

    // Call the function
    sendPaymentRequestToApi(100, 20);

    // Check that console.log was called with the correct message
    assert(consoleSpy.calledWith('The total is: 120'));

    // Restore console.log
    consoleSpy.restore();
  });
});
