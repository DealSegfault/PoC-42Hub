const express = require("express")
const router = express.Router()
const keys = require("../../config/config.js")
const ccxt = require("ccxt")
// const ccxt = require('ccxt')
// const Candle = require('../../models/candle')

const deribit = new ccxt.deribit({
  apiKey: keys.api,
  secret: keys.secret
})

router.route("/position").post(async (req, res) => {
  const result = await deribit.private_get_positions({
    currency: "BTC-PERPETUAL"
  })
  const {
    averagePrice,
    instrument,
    profitLoss,
    realizedPl,
    size
  } = result.result[0]
  res.json({
    status: true,
    result: { averagePrice, instrument, profitLoss, realizedPl, size }
  })
})

module.exports = router
