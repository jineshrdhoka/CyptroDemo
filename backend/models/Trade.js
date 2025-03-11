const mongoose = require('mongoose');

const tradeSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  cryptocurrency: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  tradeType: {
    type: String,
    enum: ['buy', 'sell'],
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Trade = mongoose.model('Trade', tradeSchema);

module.exports = Trade;
