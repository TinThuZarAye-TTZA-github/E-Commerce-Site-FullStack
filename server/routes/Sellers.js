const express = require("express");
const session = require("express-session");
const router = express.Router();
const { Sellers } = require("../models");
const bcrypt = require("bcrypt");
const db = require("../models");
const { sign } = require("jsonwebtoken")


router.post("/", async (req, res) => {
    const { email, password, confirm_password } = req.body;
        
    let hasEmail = await Sellers.findOne({where: {email:email}});
    if(hasEmail) {
        return res.json({error: "email already taken"})
    } else {
        bcrypt.hash(password,10).then((hash) => {
            Sellers.create({
            email:email,
            password: hash,
            confirm_password: hash,
            });      
        });

        res.json("SUCCESS")
    
    }


});

router.get("/", async(req, res) => {
    const listall = await Sellers.findAll();
    res.json(listall);
})


router.get("/byId/:id", async(req, res) => {
    const id = req.params.id;
    const emailId = await Sellers.findByPk(id);
    res.json(emailId)
})

router.get("/login/:id", async(req, res) => {
    const email = req.params.email;
    const checkEmail = await Sellers.findOne(email);
    res.json(checkEmail)
    
})

router.post("/login", async(req, res) => {
    const{ email, password } = req.body;

    const emailmatch = await Sellers.findOne({ where: {email: email}});

    if(!emailmatch) {
        return res.json({error: "Email doesn't exit"});
    }

    bcrypt.compare(password, emailmatch.password).then((match) => {
        if(!match) {
            return res.json({error: "wrong email and password"})
        }
        res.json("you login")
    

        // const accessToken = sign({ email : emailmatch.email, id: emailmatch.id}, "importantsecret")
        // res.json(accessToken);
    })
});




module.exports = router;