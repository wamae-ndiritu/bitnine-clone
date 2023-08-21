const express = require("express");
const bcrypt = require("bcrypt");
const { db } = require("../configDB");
const { createUserSchema } = require("../validation");

const router = express.Router();

router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  const { error } = createUserSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  const query = "SELECT * FROM `users` WHERE email = ?";

  db.query(query, [email], (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).json({ message: "Internal error occurred!" });
    } else if (data.length) {
      res.status(409).json({ message: "User already exists!" });
    } else {
      //Hash the password and create a user
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(password, salt);

      const query =
        "INSERT INTO `users`(`username`,`email`,`password`) VALUES (?)";

      const values = [username, email, hash];

      db.query(query, [values], (err, data) => {
        if (err) {
          console.log(err);
          res.status(500).json({ message: "Internal error occurred!" });
        }
        res.status(201).json({ message: "User created successfully!" });
      });
    }
  });
});

module.exports = router;
