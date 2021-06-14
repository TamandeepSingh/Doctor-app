const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");

router.get("/welcome", function (req, res, next) {
  res.status(200).send({ welcomeMessage: "Welcome here" });
});

router.get("/userProfile",  (req, res)=>{
  
  console.log("ok herere");
  authController.isLoggedIn(req,res);
});

router.get("/logout",  (req, res)=>{
  
  console.log("ok herere logout");
  authController.logOut(req,res);
});

module.exports = router;
