const request = require('request');
const { expect } = require('chai');

describe('API integration test', function () {
  this.timeout(5000); // Increase timeout to handle server response delay

  const API_URL = 'http://localhost:7865';

  it('GET / returns correct response', (done) => {
    request.get(`${API_URL}/`, (err, res, body) => {
      if (err) {
        return done(err); // If there's an error in the request, fail the test
      }

      // Check status code
      expect(res.statusCode).to.be.equal(200);
      
      // Check response body
      expect(body).to.be.equal('Welcome to the payment system');

      done(); // Test completion
    });
  });
});
