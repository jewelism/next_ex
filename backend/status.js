const axios = require('axios');
const fs = require('fs');
const {endpoint, partnerCode, accessKey, getSignature} = require('./constants');

fs.readFile('captured.json', 'utf8', (err, {requestId, orderId}) => {
  if(err){
    console.error(err);
    return;
  }
  const requestType = 'transactionStatus';
  const rawSignature = `partnerCode=${partnerCode}&accessKey=${accessKey}
  &requestId=${requestId}&orderId=${orderId}&requestType=${requestType}`;
  const signature = getSignature(rawSignature);
  const body = {
    partnerCode,
    accessKey,
    requestId,
    orderId,
    requestType,
    signature
  };
  axios.post(endpoint, body).then(res => console.log('status', res.data));
});

//
// axios.get('/captured.json').then(({requestId, orderId}) => {
//   const requestType = 'transactionStatus';
//   const rawSignature = `partnerCode=${partnerCode}&accessKey=${accessKey}&requestId=${requestId}&orderId=${orderId}&requestType=${requestType}`;
//   const signature = getSignature(rawSignature);
//   const body = {
//     partnerCode,
//     accessKey,
//     requestId,
//     orderId,
//     requestType,
//     signature
//   };
//   axios.post(endpoint, body).then(res => console.log('status', res));
// });