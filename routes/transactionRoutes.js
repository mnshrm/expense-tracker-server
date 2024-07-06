const express = require("express");
const { createTransaction } = require("../controllers/transactionControllers");
const router = express.Router();

router.route("/").post(createTransaction);

exports.transactionRouter = router;
