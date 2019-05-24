const express = require("express");
const router = express.Router();
const keys = require("../../config/config.js");
const ccxt = require("ccxt");
// const ccxt = require('ccxt')
// const Candle = require('../../models/candle');

const deribit = new ccxt.deribit({
  apiKey: keys.api,
  secret: keys.secret
});

router.route("/balance").post(async (req, res) => {
  // Get All Comments
  const result = await deribit.fetchTotalBalance();
  res.json({
    status: true,
    result: result
  });
});

module.exports = router;


