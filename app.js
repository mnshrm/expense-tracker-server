const express = require("express");
const morgan = require("morgan");
const path = require("path");
const cors = require("cors");
require("dotenv").config({
  path: path.join(__dirname, "config", ".env"),
});

const { transactionsRouter } = require("./routes/transactionsRoutes");
const { transactionRouter } = require("./routes/transactionRoutes");

const app = express();
app.use(
  cors({
    origin: "http://localhost:4000",
  })
);
app.use(morgan("dev"));

app.use(express.json({ urlEncoded: false }));

app.use("/api/transaction", transactionRouter);
app.use("/api/transactions", transactionsRouter);

module.exports = app;
