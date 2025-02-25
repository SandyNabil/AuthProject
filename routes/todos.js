const express = require("express");
const Todo = require("../models/todo.js");
const User = require("../models/user.js");
const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const { user } = req.body;
if (!user) {
  return res.status(400).json({ error: "User ID is required" });
}
const userExists = await User.findById(user);
        if (!userExists) {
            return res.status(400).send({ error: "User is not found" });
        }
        const todo = new Todo(req.body);
        await todo.save();
        res.status(201).send(todo);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.get("/", async (req, res) => {
    try {
        const todo = await Todo.find().populate("user", "name -_id");
        res.json(todo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;