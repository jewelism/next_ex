const axios = require('axios');
const fs = require('fs');
const crypto = require('crypto');








const hostname = "https://test-payment.momo.vn";
const path = "/gw_payment/transactionProcessor";
const endpoint = hostname + path;
const partnerCode = "MOMOMRHD20190510";
const accessKey = "1VazpNOTELF3Q50r";
const secretKey = "FzFOBl3VsY6nIXgvZw7EeARJmxIHxy1r";
const amount = "8685";
const transId = '2303771426';
const requestType = 'refundMoMoWallet';


//before sign HMAC SHA256 with format
//partnerCode=$partnerCode&accessKey=$accessKey&requestId=$requestId&amount=$amount&orderId=$oderId&orderInfo=$orderInfo&returnUrl=$returnUrl&notifyUrl=$notifyUrl&extraData=$extraData
const rawSignature = `partnerCode=${partnerCode}&accessKey=${accessKey}&requestId=${requestId}
&amount=${amount}&orderId=${orderId}&transId=${transId}&requestType=${requestType}`;
//puts raw signature
// console.log("--------------------RAW SIGNATURE----------------");
// console.log(rawSignature);
//signature
const signature = crypto.createHmac('sha256', secretKey)
  .update(rawSignature)
  .digest('hex');
// console.log("--------------------SIGNATURE----------------");
// console.log(signature);

//json object send to MoMo endpoint
const body = {
  partnerCode,
  accessKey,
  requestId,
  amount,
  orderId,
  transId,
  requestType,
  signature,
};
const bodyString = JSON.stringify(body);

axios.post(endpoint, body, {
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(bodyString)
  }
}).then(res => {
  fs.writeFile('captured.json', JSON.stringify(res.data), 'utf8', (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('wrote res in captured.json');
  });
});