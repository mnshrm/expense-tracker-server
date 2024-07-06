const express = require("express");
const { getTransactions } = require("../controllers/transactionsControllers");
const router = express.Router();

router.route("/").get(getTransactions);

module.exports.transactionsRouter = router;
