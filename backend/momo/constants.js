const crypto = require('crypto');

const hostname = "https://test-payment.momo.vn";
const path = "/gw_payment/transactionProcessor";
const endpoint = hostname + path;

const partnerCode = "MOMOMRHD20190510";
const accessKey = "1VazpNOTELF3Q50r";
const secretKey = "FzFOBl3VsY6nIXgvZw7EeARJmxIHxy1r";
const orderInfo = "IDL shopping";
const returnUrl = "https://adm.moqa.co.kr";
const notifyUrl = "https://callback.url/notify";
const amount = "8685";

const getSignature = rawSignature => crypto.createHmac('sha256', secretKey)
  .update(rawSignature)
  .digest('hex');

module.exports = {
  endpoint,
  partnerCode,
  accessKey,
  secretKey,
  orderInfo,
  returnUrl,
  notifyUrl,
  amount,
  getSignature
};