const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
  console.log('Something is happening.');
  next();
});

router.use('/api', require('./controllers/user'));
router.use('/api', require('./controllers/get_users'));
router.use('/api', require('./controllers/sentinelle'));

module.exports = router;
