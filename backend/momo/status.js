const axios = require('axios');
const fs = require('fs');
const {endpoint, partnerCode, accessKey, getSignature} = require('./constants');

fs.readFile('captured.json', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  try {
    const {requestId, orderId} = JSON.parse(data);
    const requestType = 'transactionStatus';
    const rawSignature = `partnerCode=${partnerCode}&accessKey=${accessKey}&requestId=${requestId}&orderId=${orderId}&requestType=${requestType}`;
    const signature = getSignature(rawSignature);
    const body = {
      partnerCode,
      accessKey,
      requestId,
      orderId,
      requestType,
      signature
    };
    axios.post(endpoint, body).then(res => {
      fs.writeFile('status.json', JSON.stringify(res.data), 'utf8', (err) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log('wrote res in status.json');
        // console.log(res.data);
      });
    });
  } catch (e) {
    console.error(e);
  }
});