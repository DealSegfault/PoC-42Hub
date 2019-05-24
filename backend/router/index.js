const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
  console.log('Something is happening.');
  next();
});

router.use('/api', require('./controllers/position'));
router.use('/api', require('./controllers/orders'));
router.use('/api', require('./controllers/balance'));



module.exports = router;