// 6-payment_token.test.js
const assert = require('assert');
const getPaymentTokenFromAPI = require('./6-payment_token'); // Import the function to test

describe('getPaymentTokenFromAPI', () => {

  it('should return a successful response when success is true', (done) => {
    getPaymentTokenFromAPI(true)
      .then(response => {
        assert.strictEqual(response.data, 'Successful response from the API');
        done(); // Indicate that the test has finished
      })
      .catch(done); // If an error occurs, pass it to done
  });

  it('should not do anything when success is false', (done) => {
    getPaymentTokenFromAPI(false)
      .then(response => {
        assert.strictEqual(response, null); // Now it resolves with null
        done(); // Indicate that the test has finished
      })
      .catch(done); // If an error occurs, pass it to done
  });
});
