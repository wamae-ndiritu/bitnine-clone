const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./connectDB");

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(cors());

connectDB();

app.listen(PORT, () => {
  console.log(`Auth backend running on port ${PORT}`);
});
