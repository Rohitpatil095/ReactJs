const mongoose = require("mongoose");
const user = require("./userSchema");

const account = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  balance: {
    type: Number,
    retuired: true,
  },
});

module.exports=account;