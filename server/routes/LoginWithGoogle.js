const express = require("express");
const passport = require("passport");

const router = express.Router();

const Users = require("../models/Users")

const { validateToken } = require("../middlewares/AuthMiddlewares")

const { sign } = require("jsonwebtoken")

const errorRedirect = "http://localhost:3001/usersignup";
const successRedirect = "http://localhost:3001";


router.get("/auth/google",passport.authenticate("google", {scope: ["profile", "email"]})
);

// router.get(
//     "/auth/google/callback" ,passport.authenticate("google"
    
//     , {
//         failureMessage: "Cannot login to Google, please try again",
//         failureRedirect: errorRedirect,
//         successRedirect: successRedirect,
//     }), (req,res) => {

//         console.log("User: ", req.user);
//         res.send("Thank you");
        
//     }
// );



router.get("/auth/google/callback", 
    passport.authenticate("google"
))



module.exports = router;