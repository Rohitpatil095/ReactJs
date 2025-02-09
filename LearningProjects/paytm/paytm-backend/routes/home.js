const express=require("express");
const router=express.Router();
const { userModel } = require("../models/userSchema");

router.post("/user",(req,res)=>{

    userModel.create({
        userName: "ranchi",
        password: "dskdj k",
        email: "dkl@gmka.com"
    })

    res.send(201).json({
        msg: "user created success"
    })
})