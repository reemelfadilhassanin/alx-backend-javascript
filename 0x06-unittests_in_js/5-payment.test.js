// 5-payment.test.js
const sinon = require('sinon');
const assert = require('assert');
const Utils = require('./utils'); // Import the Utils module
const sendPaymentRequestToApi = require('./5-payment'); // Import the function to test

describe('sendPaymentRequestToApi', () => {
  let consoleSpy;

  // beforeEach hook - runs before each test in the suite
  beforeEach(() => {
    // Spy on console.log to capture the output
    consoleSpy = sinon.spy(console, 'log');
  });

  // afterEach hook - runs after each test in the suite
  afterEach(() => {
    // Restore the spy after each test
    consoleSpy.restore();
  });

  it('should log "The total is: 120" when called with 100 and 20', () => {
    // Call the function with test data
    sendPaymentRequestToApi(100, 20);

    // Verify that the correct message is logged to the console
    assert(consoleSpy.calledWith('The total is: 120'));

    // Verify that console.log was called only once
    assert(consoleSpy.calledOnce);
  });

  it('should log "The total is: 20" when called with 10 and 10', () => {
    // Call the function with test data
    sendPaymentRequestToApi(10, 10);

    // Verify that the correct message is logged to the console
    assert(consoleSpy.calledWith('The total is: 20'));

    // Verify that console.log was called only once
    assert(consoleSpy.calledOnce);
  });
});
