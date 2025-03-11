const express = require('express');
const { buyCrypto, sellCrypto, spotTrading, marginTrading, futuresTrading } = require('../controllers/tradeController');

const router = express.Router();

router.post('/buy', buyCrypto);
router.post('/sell', sellCrypto);
router.post('/spot', spotTrading);
router.post('/margin', marginTrading);
router.post('/futures', futuresTrading);

module.exports = router;
