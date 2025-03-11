const Trade = require('../models/Trade');
const User = require('../models/User');

const buyCrypto = async (req, res) => {
  const { userId, cryptocurrency, amount, tradeType } = req.body;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const newTrade = new Trade({
      user: userId,
      cryptocurrency,
      amount,
      tradeType: 'buy',
    });

    await newTrade.save();

    res.status(201).json({ message: 'Trade executed successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

const sellCrypto = async (req, res) => {
  const { userId, cryptocurrency, amount, tradeType } = req.body;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const newTrade = new Trade({
      user: userId,
      cryptocurrency,
      amount,
      tradeType: 'sell',
    });

    await newTrade.save();

    res.status(201).json({ message: 'Trade executed successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

const spotTrading = async (req, res) => {
  // Implement spot trading logic here
};

const marginTrading = async (req, res) => {
  // Implement margin trading logic here
};

const futuresTrading = async (req, res) => {
  // Implement futures trading logic here
};

module.exports = {
  buyCrypto,
  sellCrypto,
  spotTrading,
  marginTrading,
  futuresTrading,
};
