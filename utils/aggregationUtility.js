exports.summarizeTransactions = (transactions) => {
  const finalAmount = transactions.reduce((acc, t) => {
    return (acc += Number(t.amount));
  }, 0);
  return finalAmount.toString();
};
