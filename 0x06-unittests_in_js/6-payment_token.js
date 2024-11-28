// 6-payment_token.js
function getPaymentTokenFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({ data: 'Successful response from the API' });
    } else {
      resolve(null); // Resolve with null when success is false
    }
  });
}

module.exports = getPaymentTokenFromAPI;
