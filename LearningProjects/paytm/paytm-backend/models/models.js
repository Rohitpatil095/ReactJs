const mongoose=require("mongoose");

const { user } = require("./userSchema");

const userModel=mongoose.model('user',user);

module.exports={userModel}