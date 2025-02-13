const {userModel}= require("../models/models");
const asyncHandler= require("express-async-handler");

exports.user_create_post=asyncHandler(async (req, res,next) => {
  userModel.create({
    userName: "ranchi",
    password: "dskdjOpdsknk@k",
    email: "dkl@gmka.com",
  });

  res.status(201).json({
    msg: "user created success",
  });
});
