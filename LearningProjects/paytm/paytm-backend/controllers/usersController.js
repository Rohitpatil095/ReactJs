const {userModel}= require("../models/models");
const asyncHandler= require("express-async-handler");

exports.user_create_post=asyncHandler(async (req, res,next) => {
  userModel.create({
    // code removed for git security pass
  });

  res.status(201).json({
    msg: "user created success",
  });
});
