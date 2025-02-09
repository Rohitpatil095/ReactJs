const mongoose = require("mongoose");

const user = new mongoose.Schema({
  userName: {
    type: String,
    required: [true, "username is required"],
    unique: true,
    trim: true,
    lowercase: true,
    minLength: 2,
    maxLength: 36,
  },
  password: {
    type: String,
    required: [true, "password is required"],
    minLength: 8,
  },
  firstName: {
    type: String,
    minLength: 2,
    maxLength: 50,
    trim: true,
  },
  lastName: {
    type: String,
    minLength: 2,
    maxLength: 50,
    trim: true,
  },
  email: {
    type: String,
    minLength: 2,
    maxLength: 50,
    trim: true,
    unique: true,
    required: [true, "user email is required"],
    validate: {
      validator: function (validate) {
        return /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i.test(validate);
      },
    },
  },
});

module.exports = { user };
