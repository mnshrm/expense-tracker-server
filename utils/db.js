const { connect } = require("mongoose");

const connectDB = async () => {
  connect(process.env.MONGODB_URL)
    .then(() => {
      console.log("connected to MongoDB successfully");
    })
    .catch((err) => {
      console.log("Failed to connect to mongoDB");
      console.error(err);
    });
};

module.exports = { connectDB };
