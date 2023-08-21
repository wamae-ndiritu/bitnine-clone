const Joi = require("joi");

// Validation schema for creating a user
const createUserSchema = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
  // Add more fields and validation rules as needed
});

module.exports = {
  createUserSchema,
};
