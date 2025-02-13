const mongoose = require("mongoose");

const { user } = require("./userSchema");
const { account } = require("./accountSchema");

const userModel = mongoose.model("user", user);
const accountModel = mongoose.model("account", account);

    
module.exports = { userModel, accountModel };
