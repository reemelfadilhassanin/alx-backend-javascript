// 4-payment.test.js
const sinon = require('sinon');
const assert = require('assert');
const Utils = require('./utils'); // Import the Utils module
const sendPaymentRequestToApi = require('./4-payment'); // Import the function to test

describe('sendPaymentRequestToApi', () => {
  let stub;
  let consoleSpy;

  beforeEach(() => {
    // Stub the Utils.calculateNumber function to always return 10
    stub = sinon.stub(Utils, 'calculateNumber').returns(10);
    
    // Spy on console.log to capture the output
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    // Restore the stub and spy after each test
    stub.restore();
    consoleSpy.restore();
  });

  it('should call Utils.calculateNumber with "SUM" type', () => {
    // Call the function with test data
    sendPaymentRequestToApi(100, 20);

    // Verify that the stub was called with the correct arguments
    assert(stub.calledWithExactly('SUM', 100, 20));
  });

  it('should log the correct total to the console', () => {
    // Call the function with test data
    sendPaymentRequestToApi(100, 20);

    // Verify that the correct message is logged to the console
    assert(consoleSpy.calledWith('The total is: 10'));
  });
});
