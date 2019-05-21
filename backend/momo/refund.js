const axios = require('axios');
const fs = require('fs');
const {endpoint, partnerCode, accessKey, getSignature} = require('./constants');

fs.readFile('status.json', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  try {
    const {errorCode, requestId, amount, orderId, transId} = JSON.parse(data);
    if (errorCode === -1) {
      console.log('status: transaction init');
      return;
    } else if (errorCode) {
      console.log('error status', errorCode);
      return;
    }
    const requestType = 'refundMoMoWallet';
//before sign HMAC SHA256 with format
//partnerCode=$partnerCode&accessKey=$accessKey&requestId=$requestId&amount=$amount&orderId=$oderId&orderInfo=$orderInfo&returnUrl=$returnUrl&notifyUrl=$notifyUrl&extraData=$extraData
    const rawSignature = `partnerCode=${partnerCode}&accessKey=${accessKey}&requestId=${requestId}&amount=${amount}&orderId=${orderId}&transId=${transId}&requestType=${requestType}`;
//puts raw signature
// console.log("--------------------RAW SIGNATURE----------------");
// console.log(rawSignature);
//signature
    const signature = getSignature(rawSignature);
// console.log("--------------------SIGNATURE----------------");
// console.log(signature);
    const body = {
      partnerCode,
      accessKey,
      requestId,
      amount,
      orderId,
      transId,
      requestType,
      signature
    };
    axios.post(endpoint, body).then(res => {
      console.log('refund data =>', res.data);
    });
  } catch (e) {
    console.error(e);
  }
});