const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./connectDB");
const router = require("./routes");

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(cors());

connectDB();

app.use("/api/v1/users", router);

app.listen(PORT, () => {
  console.log(`Auth backend running on port ${PORT}`);
});
