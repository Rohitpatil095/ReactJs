const asyncHandler = require("express-async-handler");

exports.home_page = asyncHandler((req, res, next) => {
  res.status(200).json({
    msg: "On home page.",
  });
});
