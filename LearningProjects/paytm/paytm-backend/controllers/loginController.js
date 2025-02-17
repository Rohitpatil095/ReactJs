const asyncHandler = require("express-async-handler");
const { userModel } = require("../models/models");
const {userToken,validateToken} = require("../middleware/token");
const {TokenException} =require("../errors/TokenException");
const UserRequestException = require("../errors/UserRequestException");
const {
  signUpRequestValidateSchema,loginRequestValidateSchema
} = require("../validation/validators/user.validator");

exports.signup = asyncHandler(async (req, res, next) => {
  const { success } = signUpRequestValidateSchema.safeParse(req.body);
  if (!success) {
    return res.status(411).json({
      msg: "Incorrect Inputs..",
    });
  }

  const userExist =await userModel.findOne({
    userName: req.body.userName,
  });

  if (userExist) {
    console.log("before..");
    return res.status(411).json({
      msg: "User with same details already present...",
    });
  }

  console.log("after")
  const newUser =await userModel.create({
    userName: req.body.userName,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
  });

  const userID = newUser._id;

  console.log(newUser);
  console.log(userID + "===> id");
  const userTokenCreated =await userToken(userID);

  console.log(userTokenCreated + "===> token");
  if (userTokenCreated) {
    return res.status(201).json({
      msg: "User created",
      token: userTokenCreated,
    });
  }

  res.status(411).json({
    msg: "Error during user authentication...",
  });
});


exports.login=asyncHandler(async(req,res,next)=>{

    console.log("---->" + req.body.email);
    const {success} =loginRequestValidateSchema.safeParse(req.body);

    console.log(success + " +====+");
    if(!success){
        throw new UserRequestException("Invalid user inputs..");
    }
    const userEmail=req.body.email;

    const authHeader=req.headers['authorization'];
    console.log(authHeader);
    if(!authHeader || !authHeader.startsWith("Bearer")){
        res.status(403).json({});
    }
    if(!authHeader) throw new TokenException("Provide user Token before proceed..")
    const isValidUser= validateToken(authHeader.split(" ")[1]);

    if(!isValidUser){
        throw new TokenException("USer Token Exception...")
        res.status(401).json({
            msg: "Token validation error."
        })
    }

    res.status(200).json({
        msg: "login success",
        token: isValidUser,
    })
    
})