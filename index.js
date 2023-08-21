const express = require("express");
const cors = require("cors");
require("dotenv").config();
const router = require("./routes");
const initDB = require("./schemas");

const PORT = process.env.PORT || 5000;

const app = express();
initDB();

app.use(express.json());
app.use(cors());

app.use("/api/v1/users", router);

app.listen(PORT, () => {
  console.log(`Auth backend running on port ${PORT}`);
});
