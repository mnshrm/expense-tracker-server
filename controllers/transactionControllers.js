const Transactions = require("../models/transaction");

exports.createTransaction = async (req, res, next) => {
  console.log(req.body);

  await Transactions.create(req.body);
  const transactions = await Transactions.find();
  console.log(transactions);

  res.status(200).json({
    stauts: true,
    transactions,
  });
};
