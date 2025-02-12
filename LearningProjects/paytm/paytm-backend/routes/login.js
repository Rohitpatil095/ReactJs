const express=require('express');
const loginController=require("../controllers/loginController");
const router=express.Router();

router.post("/signup",loginController.signup);
router.post("/login",loginController.login);
module.exports=router;