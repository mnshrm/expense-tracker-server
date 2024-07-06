const { connectDB } = require("./utils/db");
const app = require("./app.js");

connectDB();

app.listen(3000, () => {
  console.log("server started at port 3000");
});
