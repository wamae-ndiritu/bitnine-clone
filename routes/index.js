const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/user");

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const existingUser = await User.find({ email });
    if (existingUser) {
      res.status(400).json({ mesage: "User already exist!" });
    }
    //   Hash the password
    const hash = await bcrypt.hashSync(password, 20);
    const user = await new User({
      username,
      email,
      password: hash,
    });

    await user.save();
    res.status(201).json(user);
  } catch (err) {
    console.log(err);
  }
});
