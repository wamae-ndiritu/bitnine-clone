const express = require("express");
const bcrypt = require("bcrypt");
const { createUserSchema } = require("../validation");

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const { error } = createUserSchema.validate(req.body);

    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    const existingUser = await User.find({ email });
    console.log(existingUser);
    if (existingUser.length > 0) {
      return res.status(400).json({ mesage: "User already exist!" });
    }
    //   Hash the password
    const hash = await bcrypt.hash(password, 20);
    const user = await User.create({
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

module.exports = router;
