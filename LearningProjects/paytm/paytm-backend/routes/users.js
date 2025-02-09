const express=require("express");
const router=express.Router();

const userController= require("../controllers/usersController");

router.post("/users",userController.user_create_post);


module.exports=router;