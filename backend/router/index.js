const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
  console.log('Something is happening.');
  next();
});

router.use('/api', require('./controllers/auth'));
router.use('/api', require('./controllers/user'));
router.use('/api', require('./controllers/room'));
router.use('/api', require('./controllers/security'));

router.use('/api', require('./controllers/sentinelle'));

module.exports = router;
