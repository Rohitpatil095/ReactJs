const mongoose =require("mongoose");

const user=new mongoose.Schema(
    {
        userName: String,
        password: String,
        email: String
    }
)

const userModel = mongoose.model("user", user);


module.exports = { user, userModel };