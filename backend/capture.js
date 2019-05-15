const axios = require('axios/index');
const fs = require('fs');
const uuidv1 = require('uuid/v1');
const {getSignature, endpoint, partnerCode, accessKey, amount, orderInfo, returnUrl, notifyUrl} = require('./constants');

const orderId = uuidv1();
const requestId = uuidv1();
const requestType = "captureMoMoWallet";
const extraData = "merchantName=indatalab;merchantId="+partnerCode;
//pass empty value if your merchant does not have stores else merchantName=[storeName]; merchantId=[storeId] to identify a transaction map with a physical store

//before sign HMAC SHA256 with format
//partnerCode=$partnerCode&accessKey=$accessKey&requestId=$requestId&amount=$amount&orderId=$oderId&orderInfo=$orderInfo&returnUrl=$returnUrl&notifyUrl=$notifyUrl&extraData=$extraData
const rawSignature = "partnerCode=" + partnerCode + "&accessKey=" + accessKey + "&requestId=" + requestId + "&amount=" + amount + "&orderId=" + orderId + "&orderInfo=" + orderInfo + "&returnUrl=" + returnUrl + "&notifyUrl=" + notifyUrl + "&extraData=" + extraData;
//puts raw signature
// console.log("--------------------RAW SIGNATURE----------------");
// console.log(rawSignature);
//signature
const signature = getSignature(rawSignature);

// console.log("--------------------SIGNATURE----------------");
// console.log(signature);

//json object send to MoMo endpoint
const body = {
  partnerCode,
  accessKey,
  requestId,
  amount,
  orderId,
  orderInfo,
  returnUrl,
  notifyUrl,
  extraData,
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
    // console.log(res.data);
  });
});