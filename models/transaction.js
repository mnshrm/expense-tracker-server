const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  amount: String,
  datetime: String,
  description: String,
  name: String,
});

const Transactions = mongoose.model("transaction", transactionSchema);

module.exports = Transactions;
