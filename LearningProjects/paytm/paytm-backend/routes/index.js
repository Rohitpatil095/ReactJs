const express =require("express");
const router=express.Router();
const homeController =require("../controllers/homeController");

router.get("/index", homeController.home_page);

router.get("/",function (req,res){
    console.log("hitted /");
    res.redirect("/index");
})

module.exports =router