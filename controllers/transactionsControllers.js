const Transactions = require("../models/transaction");
const { summarizeTransactions } = require("../utils/aggregationUtility");

exports.getTransactions = async (req, res, next) => {
  const transactions = await Transactions.find({}, { _id: 0 });

  const finalAmount = summarizeTransactions(transactions);

  res.status(200).json({
    status: "true",
    finalAmount,
    transactions,
  });
};
