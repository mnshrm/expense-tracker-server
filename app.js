const express = require("express");
const morgan = require("morgan");
const path = require("path");
require("dotenv").config({
  path: path.join(__dirname, "config", ".env"),
});

const { transactionsRouter } = require("./routes/transactionsRoutes");
const { transactionRouter } = require("./routes/transactionRoutes");

const app = express();
app.use(morgan("dev"));

app.use(express.json({ urlEncoded: false }));

app.use("/api/transaction", transactionRouter);
app.use("/api/transactions", transactionsRouter);

module.exports = app;
