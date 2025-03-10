const express = require("express");
const router = express.Router();
const User = require("../models/user.js");

router.post("/", async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).send(user);
    } catch (error){
        res.status(400).send(error);
    }
})

router.get("/", async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).send(users);
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = router;