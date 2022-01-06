const express = require("express");
const session = require("express-session");
const router = express.Router();
const { AddItem } = require("../models");
const { validateToken } = require("../middlewares/AuthMiddlewares")

router.get("/:SellerId", async(req, res) => {
    const SellerId = req.params.SellerId;
    const item = await AddItem.findAll({where: {SellerId: SellerId}});
    res.json(item)
})

router.post("/", async(req, res) => {
    const item = req.body;
    await AddItem.create(item);
    res.json(item);
})

router.get("/", async(req,res) => {
    const listofItem = await AddItem.findAll()
    res.json(listofItem)
})

module.exports = router;